# Usa imagem do LibreOffice com Node
FROM ubuntu:22.04

# Instala dependências
RUN apt-get update && \
    apt-get install -y libreoffice curl nodejs npm && \
    apt-get clean

# Define o diretório de trabalho
WORKDIR /usr/src/app

# Copia arquivos
COPY package*.json ./
RUN npm install

COPY . .

# Porta que o Render vai usar
EXPOSE 3001

# Inicia a aplicação
CMD ["node", "server.js"]
