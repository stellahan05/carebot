import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatbotRoutes from "./routes/chatbotRoutes.js";

dotenv.config();
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api", chatbotRoutes);

// dynamic port for Render or fallback to 5001 for local dev
const port = process.env.PORT || 5001;

app.listen(port, () => {
    console.log('Server running on port ${port}');
});