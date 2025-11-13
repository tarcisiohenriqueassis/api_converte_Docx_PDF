// src/routes/convertRoutes.js
import express from "express";
import multer from "multer";
import path from "path";
import { convertFile } from "../controllers/convertController.js";

const router = express.Router();
const upload = multer({ dest: path.resolve("uploads") });

router.post("/convert", upload.single("file"), convertFile);

export default router;
