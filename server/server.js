const express = require("express");
const bodyParser = require("body-parser");
const axios = require('axios');
const path = require("path");
const http = require("http");
const cors = require('cors');
require("dotenv").config();

const app = express();
let port = process.env.PORT || 3000;
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post('/minecraftspeedrun/email', async (req, res) => {
  const data = {
    service_id: process.env.SERVICE_ID,
    template_id: process.env.TEMPLATE_ID,
    user_id: process.env.USER_ID,
    accessToken: process.env.ACCESS_TOKEN,
    template_params: {
      'from_name': req.body.from_name,
      'reply_email': req.body.reply_email,
      'phone_number': req.body.phone_number,
      'message': req.body.message
    }
  }
  try {
    await axios.post('https://api.emailjs.com/api/v1.0/email/send', data);
    res.send("success")
  }
  catch (e) {
    console.log('whooops', e);
    res.send("error")
  }
});

console.log("NODE_ENV is", process.env.NODE_ENV);
 
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../build")));
  app.get("*", (request, res) => {
    res.sendFile(path.join(__dirname, "../build", "index.html"));
  });
} else {
  port = 3001;
};

server.listen(port, () => console.log(`listening on port ${port}`));