import app from "./app.js"
import { connectDB } from "./config/database.js"
import cloudinary from "cloudinary"
import RazorPay from "razorpay"
import nodeCron from "node-cron"
import { Stats } from "./models/Stats.js"

import { createRequire } from "module";
const require = createRequire(import.meta.url)

//Accessing .env variable using Dotenv
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
        path: "./config/config.env"
    })
}

connectDB()

cloudinary.v2.config({
    cloud_name: "dc1pce1ag",
    api_key: "321436732892156",
    api_secret: "YxeLVfV2B_xsKsvUOp-cA-T1Jlg",
})

export const instance = new RazorPay({
    key_id: "rzp_test_mJWQSEigukF578",
    key_secret: "jwmSeRLj5QGE7huEyeAAG5Oj",
});

//1st day of every month
nodeCron.schedule("0 0 0 1 * *", async () => {
    try {
        await Stats.create({});
    } catch (error) {
        console.log(error);
    }
});

app.listen(5000, () => {
    console.log(`Server is working on port: 5000`);
})