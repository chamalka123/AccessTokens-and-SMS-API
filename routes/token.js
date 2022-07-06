import { Router } from "express";
import token from "../models/tokens.js";
import jwt from "jsonwebtoken";
import { tokenValidation } from "../utils/validation.js";
import verifyToken from "../utils/verifyTokens.js";

const router = Router();

// get new access token
router.post("/", async (req, res) => {
    const { error } = tokenValidation(req.body);
    if (error)
        return res
            .status(100)
            .json({ error: true, message: error.details[0].message });

            verifyToken(req.body.token)
        .then(({ tokenDetails }) => {
            const payload = { _id: tokenDetails._id, roles: tokenDetails.roles };
            const accessToken = jwt.sign(
                payload,
                process.env.ACCESS_TOKEN_PRIVATE_KEY,
                { expiresIn: "20m" }
            );
            res.status(200).json({
                error: false,
                accessToken,
                message: "Access token created successfully",
            });
        })
        .catch((err) => res.status(100).json(err));
});

export default router;