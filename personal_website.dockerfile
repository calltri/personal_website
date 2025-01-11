FROM node:22
WORKDIR C:/Users/madis/Desktop/website_materials/personal_website
COPY public /personal_website/public
COPY app /personal_website/app
COPY package.json /personal_website/
RUN npm install
CMD ["npm", "start"]