import mongoose from "mongoose";

const Schema = mongoose.Schema;

const tokenSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, required: true },
    token: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, expires: 43200 }, 
});

const token = mongoose.model("UserTokens", tokenSchema);

export default token;