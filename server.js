// server.js
import app from "./src/app.js";

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`✅ API de conversão rodando na porta ${PORT}`);
});
