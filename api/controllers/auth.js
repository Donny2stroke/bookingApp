import User from "../models/User";

export const register = async (req, res, next) => {
    try {
        const newUser = new User({
            
        })
    } catch (error) {
        next(error);
    }
}