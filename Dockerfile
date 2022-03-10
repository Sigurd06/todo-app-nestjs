FROM node:current-alpine3.15 AS development

WORKDIR /usr/src/app

COPY package*.json ./
RUN yarn install

COPY . .

RUN npm run build

FROM node:current-alpine3.15 as production

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

COPY . .

COPY --from=development /usr/src/app/dist ./dist

EXPOSE 3000

CMD ["yarn","run", "start:prod"]