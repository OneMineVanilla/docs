# chatgpt
FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache git

COPY . .

RUN npm install
RUN npm run docs:build

EXPOSE 4173

CMD ["npm", "run", "docs:preview"]
