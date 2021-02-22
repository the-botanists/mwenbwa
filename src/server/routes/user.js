// Filename : user.js

const express = require("express");
const {check, validationResult} = require("express-validator/check");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

const User = require("../models/user");
const auth = require("../middleware/auth");

/**
 * @method - POST
 * @param - /signup
 * @description - User SignUp
 */

router.post(
    "/signup",
    [
        check("username", "Please Enter a Valid Username").not().isEmpty(),
        check("email", "Please enter a valid email").isEmail(),
        check("password", "Please enter a valid password").isLength({
            min: 6,
        }),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({
                errors: errors.array(),
            });
            return;
        }

        const {username, email, password} = req.body;
        try {
            let user = await User.findOne({
                email,
            });
            if (user) {
                res.status(400).json({
                    msg: "Email Already Exists",
                });
                return;
            }
            const testPseudo = await User.findOne({
                username,
            });
            if (testPseudo) {
                res.status(400).json({
                    msg: "Username Already Exists",
                });
                return;
            }
            // Random color for users
            const color = `#${((Math.random() * 0xffffff) << 0).toString(16)}`;

            user = new User({
                username,
                email,
                password,
                color,
            });

            const salt = await bcrypt.genSalt(12);
            user.password = await bcrypt.hash(password, salt);

            await user.save();

            const payload = {
                user: {
                    id: user.id,
                },
            };

            jwt.sign(
                payload,
                "randomString",
                {
                    expiresIn: 10000,
                },
                (err, token) => {
                    if (err) {
                        throw err;
                    }
                    res.status(200).json({
                        token,
                    });
                },
            );
        } catch (err) {
            res.status(500).send("Error in Saving");
        }
    },
);
router.post(
    "/login",
    [
        check("email", "Please enter a valid email").isEmail(),
        check("password", "Please enter a valid password").isLength({
            min: 1,
        }),
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(400).json({
                message: "error connection",
            });
            return;
        }

        const {email, password} = req.body;
        try {
            const user = await User.findOne({
                email,
            });
            if (!user) {
                res.status(400).json({
                    message: "User Not Exist",
                });
                return;
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                res.status(300).json({
                    message: "Incorrect Password or Email !",
                });
                return;
            }

            const payload = {
                user: {
                    id: user.id,
                },
            };

            jwt.sign(
                payload,
                "randomString",
                {
                    expiresIn: 3600,
                },
                (err, token) => {
                    if (err) {
                        throw err;
                    }
                    res.status(200).json({
                        token,
                    });
                },
            );
        } catch (e) {
            res.status(500).json({
                message: "Server Error",
            });
        }
    },
);
/**
 * @method - GET
 * @description - Get LoggedIn User
 * @param - /user/me
 */

router.get("/me", auth, async (req, res) => {
    try {
        // request.user is getting fetched from Middleware after token authentication
        const user = await User.findById(req.user.id);
        res.json(user);
    } catch (e) {
        res.send({message: "Error in Fetching user"});
    }
});
module.exports = router;
