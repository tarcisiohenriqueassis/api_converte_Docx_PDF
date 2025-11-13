// src/app.js
import express from "express";
import convertRoutes from "./routes/convertRoutes.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", convertRoutes);

export default app;
