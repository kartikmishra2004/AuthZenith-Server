import mongoose from "mongoose";

const URI = process.env.MONGODB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("MongoDB connect sucessfuly!");
    } catch (error) {
        console.error("Failed to connect to MongoDB!");
        process.exit(0);
    }
}

export default connectDB