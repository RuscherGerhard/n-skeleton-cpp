#Build Stage
FROM node:16-alpine AS build

WORKDIR /app
COPY ./package*.json ./
COPY ./tsconfig.json ./
COPY ./cpp-src ./
RUN apk add python3 g++ make
RUN npm i
COPY ./ ./
RUN npm run gyp:build
RUN npm run build

#Production Stage
FROM node:16-alpine AS production

WORKDIR /app
COPY ./package*.json ./
RUN npm ci --only=production
COPY --from=build /app/build/Release/hello-world-native.node ./build/Release/hello-world-native.node
COPY --from=build /app/application ./application
COPY --from=build /app/api-docs ./api-docs
CMD ["node","./application/main.js"]