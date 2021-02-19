const User = require("../../models/user");
const express = require("express");
const app = express();
const passwordHash = require("password-hash");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({
    extended: true,
});
app.use(bodyParser.json());
app.use(urlencodedParser);

async function signup(req, res) {
    const {password, email} = req.body;
    if (!email || !password) {
        //Le cas où l'email ou bien le password ne serait pas soumit ou nul
        return res.status(400).json({
            text: "Invalid request !",
        });
    }
    // Création d'un objet user, dans lequel on hash le mot de passe
    const user = {
        email,
        password: passwordHash.generate(password),
    };
    // On check en base si l'utilisateur existe déjà
    try {
        const findUser = await User.findOne({
            email,
        });
        if (findUser) {
            return res.status(400).json({
                text: "User already exists !",
            });
        }
    } catch (error) {
        return res.status(500).json({error});
    }
    try {
        // Sauvegarde de l'utilisateur en base
        const userData = new User(user);
        const userObject = await userData.save();
        return res.status(200).json({
            text: "Success",
            token: userObject.getToken(),
        });
    } catch (error) {
        return res.status(500).json({error});
    }
}

async function login(req, res) {
    const {password, email} = req.body;
    if (!email || !password) {
        //Le cas où l'email ou bien le password ne serait pas soumit ou nul
        return res.status(400).json({
            text: "Invalid request",
        });
    }
    try {
        // On check si l'utilisateur existe en base
        const findUser = await User.findOne({email});
        if (!findUser) {
            return res.status(401).json({
                text: "User doesn't exist !",
            });
        }
        if (!findUser.authenticate(password)) {
            return res.status(401).json({
                text: "Wrong password !",
            });
        }
        return res.status(200).json({
            token: findUser.getToken(),
            text: "Authentification succeed !",
        });
    } catch (error) {
        return res.status(500).json({
            error,
        });
    }
}

//On exporte nos deux fonctions

exports.login = login;
exports.signup = signup;

//--------------------------------------------------------------------------------------------

// const bcrypt = require("bcryptjs");
// const User = require("../../models/user");

// export const signup = (req, res) => {
//     bcrypt
//         .hash(req.body.password, 12) // (salt round) the highter the number, the safer it will be, but the longer it will take time....
//         .then(hash => {
//             const user = new User({
//                 email: req.body.email,
//                 password: hash,
//             });
//             user.save()
//                 .then(() => res.status(201).json({message: "users created !"}))
//                 .catch(error => res.status(400).json({error}));
//         })
//         .catch(error => res.status(500).json({error}));
// };
// export const login = async (req, res) => {
//     try {
//         const user = await User.findOne({email: req.body.email});
//         if (!user) {
//             res.status(401).json({error: "user not found !"});
//             return;
//         }
//         const valid = await bcrypt.compare(req.body.password, user.password);
//         if (!valid) {
//             res.status(401).json({error: "Wrong password !"});
//             return;
//         }
//         res.status(200).json({
//             userId: user._id,
//             token: "TOKEN",
//         });
//     } catch (error) {
//         res.status(500).json({error});
//     }
// };

// ----------------------------------------------------------------------------------------

// exports.login = (req, res) => {
//     User.findOne({email: req.body.email})
//         .then(user => {
//             if (!user) {
//                 res.status(401).json({error: "user not found !"});
//                 return;
//             }

//             bcrypt
//                 .compare(req.body.password, user.password)
//                 .then(valid => {
//                     if (!valid) {
//                         res.status(401).json({error: "Wrong password !"});
//                         return;
//                     }
//                     res.status(200).json({
//                         userId: user._id,
//                         token: "TOKEN",
//                     });
//                 })
//                 .catch(error => res.status(500).json({error}));
//         })
//         .catch(error => res.status(500).json({error}));
// };
