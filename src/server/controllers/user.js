const bcrypt = require("bcryptjs");
const User = require("../models/user");

export const signup = (req, res) => {
    bcrypt
        .hash(req.body.password, 12) // (salt round) the highter the number, the safer it will be, but the longer it will take time....
        .then(hash => {
            const user = new User({
                email: req.body.email,
                password: hash,
            });
            user.save()
                .then(() => res.status(201).json({message: "users created !"}))
                .catch(error => res.status(400).json({error}));
        })
        .catch(error => res.status(502).json({error}));
};
export const login = async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email});
        if (!user) {
            res.status(401).json({error: "user not found !"});
            return;
        }
        const valid = await bcrypt.compare(req.body.password, user.password);
        if (!valid) {
            res.status(401).json({error: "Wrong password !"});
            return;
        }
        res.status(200).json({
            userId: user._id,
            token: "TOKEN",
        });
    } catch (error) {
        res.status(500).json({error});
    }
};
