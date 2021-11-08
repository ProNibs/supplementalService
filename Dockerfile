FROM node:14-alpine

WORKDIR /app
ENV NODE_ENV=production

# If we just copy package.json
# Won't need to do a re-build all the time
COPY package.json .
RUN yarn install --production
COPY . .

`
EXPOSE 3001
CMD ["node", "server.js"]