import express from "express";
import { searchTool } from "../controllers/tool.controller";

const router = express.Router();

// ✅ Fix: Wrap `searchTool` inside an async error handler
router.get("/search", async (req, res, next) => {
  try {
    await searchTool(req, res, next);
  } catch (error) {
    next(error); // Pass errors to Express error handler
  }
});

export default router;
