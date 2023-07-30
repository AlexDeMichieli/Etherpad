FROM node:16-alpine
# creates a workdir 'app'
WORKDIR /app
# copies package.json into the current workdir application
COPY package.json .
# installs dependencies
RUN npm install
# copies everything inside app
COPY . .
# builds the React app for production
RUN npm run build
# exposes port 80 for the React app (default HTTP port)
EXPOSE 80
# starts the React app on port 80
CMD ["npm", "run", "start"]
