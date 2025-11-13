import fs from "fs";

export function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

export function safeUnlink(path) {
  try {
    if (fs.existsSync(path)) fs.unlinkSync(path);
  } catch (err) {
    console.warn("Erro ao apagar arquivo:", err.message);
  }
}
