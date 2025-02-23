import express from "express";
import { chatWithBot } from "../controllers/chatbotController.js";

const router = express.Router();
router.post("/chatbot", chatWithBot);

router.get("/ping", (req, res) => {
    res.send("Server is up and running!");
  });

export default router;