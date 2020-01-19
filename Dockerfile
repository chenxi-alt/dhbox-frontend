FROM node:current
COPY . .
RUN npm install --registry=https://registry.npm.taobao.org
RUN npm run build
CMD ["npm", "run start"]