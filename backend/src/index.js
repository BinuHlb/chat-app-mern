// Suggested code may be subject to a license. Learn more: ~LicenseLog:2685414856.
import express from "express";
import authRoutes from "./routes/auth.route.js";

const app = express();

app.use("/api/auth", authRoutes)

app.listen(5001, () => {
    console.log('Example app listening on port 5001!')
});