// src/services/convertService.js
import { exec } from "child_process";
import path from "path";
import fs from "fs";

export const convertDocxToPdf = (inputPath, outputDir) => {
  return new Promise((resolve, reject) => {
    // Garante que a pasta de saída existe
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

    const command = `libreoffice --headless --convert-to pdf "${inputPath}" --outdir "${outputDir}"`;

    exec(command, (error) => {
      if (error) {
        console.error("Erro na conversão:", error);
        return reject(error);
      }

      const outputFileName = path.basename(inputPath, ".docx") + ".pdf";
      const outputPath = path.join(outputDir, outputFileName);

      if (!fs.existsSync(outputPath)) {
        return reject(new Error("PDF não foi gerado."));
      }

      resolve(outputPath);
    });
  });
};
