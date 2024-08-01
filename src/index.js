import 'dotenv/config';
import express from "express";
import authRoute from "./routes/auth-rout.js";
import contactRoute from "./routes/contact-rout.js";
import connectDB from "./utils/db.js";
import cors from 'cors';
import errorMiddleware from './middlewares/error-middleware.js';

const app = express();

// const corsOptions = {
//     origin: ["https://authxzenith.vercel.app", "http://localhost:3000"],
//     methods: "GET, POST, PUT, DELETE",
//     credentials: true
// }
app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoute); //Mounting external authentication route.
app.use("/api/contact", contactRoute) //Mounting external contact route.

app.use(errorMiddleware);

const PORT = 3000;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`App is running on port ${PORT}`);
    });
})