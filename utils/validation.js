
const loginValidation = (body) => {
    const schema = Joi.object({
        email: string().username().required().label(" Enter Username"),
        password: string().required().label("Enter Password"),
    });
    return schema.validate(body);
};

const tokenValidation = (body) => {
    const schema = object({
        refreshToken: string().required().label("Refresh Token"),
    });
    return schema.validate(body);
};

export {
    loginValidation,
    tokenValidation,
};