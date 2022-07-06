import token from "../models/tokens.js";
import jwt from "jsonwebtoken";

const verifyToken = (refreshToken) => {
    const privateKey = process.env.REFRESH_TOKEN_PRIVATE_KEY;

    return new Promise((resolve, reject) => {
        token.findOne({ token: refreshToken }, (err, doc) => {
            if (!doc)
                return reject({ error: true, message: "Invalid  token" });

            jwt.verify(refreshToken, privateKey, (err, tokenDetails) => {
                if (err)
                    return reject({ error: true, message: "Invalid  token" });
                resolve({
                    tokenDetails,
                    error: false,
                    message: "Valid  token",
                });
            });
        });
    });
};

export default verifyToken;