// src/controllers/convertController.js
import path from "path";
import { convertDocxToPdf } from "../services/convertService.js";

export const convertFile = async (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ error: "Nenhum arquivo enviado" });

    const outputDir = path.resolve("outputs");
    const pdfPath = await convertDocxToPdf(file.path, outputDir);

    res.download(pdfPath, (err) => {
      if (err) console.error("Erro ao enviar PDF:", err);
    });
  } catch (err) {
    console.error("❌ Erro:", err);
    res.status(500).json({ error: "Falha ao converter o arquivo" });
  }
};
