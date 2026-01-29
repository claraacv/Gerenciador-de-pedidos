FROM node:22

WORKDIR /home/node/app

# Copia apenas package.json e package-lock.json
COPY package*.json ./

# Instala dependências dentro do container
RUN npm install

# Copia o restante do código
COPY . .

EXPOSE 8888

CMD ["npm", "run", "dev"]

