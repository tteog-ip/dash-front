FROM node:14.21.3-bullseye As build
RUN git clone https://github.com/tteog-ip/dash-front
WORKDIR /dash-front
RUN npm install
RUN chmod +x node_modules/.bin/react-scripts
RUN npm run build
FROM nginx:latest
RUN rm -rf /usr/share/nginx/html/index.html
ADD build /usr/share/nginx/html/
RUN rm -rf /etc/nginx/sites-available/default
ADD default /etc/nginx/sites-availabel/default
