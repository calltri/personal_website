FROM node:22-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i
# RUN --mount=type=bind,source=package.json,target=package.json \
#     --mount=type=bind,source=package-lock.json,target=package-lock.json \
#     --mount=type=cache,target=/root/.npm \
#     npm ci --omit=dev
COPY public ./public
COPY app ./app
EXPOSE 3000
# Related to ownership and not giving the container root authorization
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "run", "dev"]
