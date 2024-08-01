import User from "../models/user-model.js";

// Register logic
export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const userExist = await User.findOne({ email });
        const usernameExist = await User.findOne({ username });

        if (usernameExist) {
            return res.status(400).json({ message: "Username already exist!!" })
        }
        if (userExist) {
            return res.status(400).json({ message: "Email already exists!" });
        }

        const userCreated = await User.create({ username, email, password });

        res.status(201).json({
            message: "Registration successful!!",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString()
        });
    }
    catch (error) {
        // res.status(400).send("Registration failed!!");
        next(error);
    }
};

// Login logic
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const userExist = await User.findOne({ username });

        if (!userExist) {
            res.status(400).json({ message: "Invalid username or password!!" });
        }

        const user = await userExist.comparePassword(password);

        if (user) {
            res.status(201).json({
                message: "Login successful!!",
                token: await userExist.generateToken(),
                userId: userExist._id.toString()
            });
        }
        else {
            res.status(401).json({ message: "Invalid username or password!!" });
        }

    } catch (error) {
        // res.status(400).send("Login failed!!");
        next(error)
    }
};

// User logic - to send user data in frontend
export const user = async (req, res) => {
    try {
        const userData = req.user;
        return res.status(200).json({ userData })
    } catch (error) {
        console.log("error from the user route", error);
    }
}