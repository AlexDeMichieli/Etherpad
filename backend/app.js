const express = require("express");
const axios = require("axios");
const app = express();
const { v4: uuidv4 } = require('uuid');

const generateRandomPadID = () => {
  const randomUUID = uuidv4();

  const padID = randomUUID.replace(/-/g, '');

  return padID;
}


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  });

app.get("/api/create", (req, res) => {
  const padID = generateRandomPadID();
  const apiKey = process.env.API_KEY;
  const url = `http://etherpad:9001/api/1/createPad?apikey=${apiKey}&padID=${padID}`;

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: url,
    headers: {},
  };

  axios
    .request(config)
    .then((response) => {
      res.json({ message: response.data, padID: padID });
    })
    .catch((error) => {
      console.log(error);
    });
});


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
