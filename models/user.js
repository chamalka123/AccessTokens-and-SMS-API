const Schema = mongoose.Schema;

const userSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    fname: {
        type: String,
        required: true,
    },
    lname: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    roles: {
        type: [String],
        enum: ["user", "admin"],
        default: ["user"],
    },
});

const User = mongoose.model("User", userSchema);

export default User;
