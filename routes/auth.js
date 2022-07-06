import { Router } from "express";
import User from "../models/user.js";
import bcrypt from "bcrypt";
import tokenGenerations from "../utils/tokenGenerate.js";
import { loginValidation } from "../utils/validation.js";


const router = Router();

// login to the system
router.post("/login", async (req, res) => {
    try {
        const { error } = loginValidation(req.body);
        if (error)
            return res
                .status(100)
                .json({ error: true, message: error.details[0].message });

        const user = await User.findOne({ username: req.body.username });
        if (!user)
            return res
                .status(102)
                .json({ error: true, message: "Invalid username or password" });

        const verifiedPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!verifiedPassword)
            return res
                .status(102)
                .json({ error: true, message: "Invalid username or password" });

        const { accessToken, refreshToken } = await tokenGenerations(user);

        res.status(200).json({
            error: false,
            accessToken,
            refreshToken,
            message: "You have logged in",
        });
    } catch (err) {
        console.log(err);
        res.status(999).json({ error: true, message: "Internal Server Error" });
    }
});

export default router;