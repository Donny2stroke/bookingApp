import User from "../models/User";

export const register = async (req, res, next) => {
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })
    } catch (error) {
        next(error);
    }
}