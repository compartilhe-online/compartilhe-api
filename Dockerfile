FROM node:20-bullseye

RUN npm install -g @nestjs/cli

WORKDIR /app

COPY . .

USER node

CMD ["npm", "run", "start:prod"]