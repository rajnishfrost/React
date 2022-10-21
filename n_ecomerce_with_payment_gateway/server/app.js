import express from "express";
import {config} from "dotenv";
import paymentRoute from "./routes/paymentRoute.js";
import userInfoRoute from "./routes/userInfoRoute.js"
import cors from "cors";

config({path : "./config/config.env"});
export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use("/api" , paymentRoute);
app.use("/data" , userInfoRoute)
app.get("/api/getkey" , (req,res) =>res.status(200).json({key : process.env.Razorpay_API_Key}));
