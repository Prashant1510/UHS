import express from "express";
import dotenv from "dotenv";
import connectToMongoDB from "./DB/connectToMongoDB.js";
import urlRoute from "./routes/urlRoute.js";
import cors from "cors"

const app = express();
dotenv.config();
app.use(express.json());
const PORT = process.env.PORT;
connectToMongoDB(); // to establish connection with database
app.use(cors());

app.use('/api',urlRoute);


app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
});