import express from "express";
import cors from "cors";
import helmet from "helmet";
import toolRoutes from "./routes/tool.routes";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(helmet());
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "../public")));

// API routes
app.use("/api", toolRoutes);

export default app;
