//Forty by croc100
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;

// Telegram Bot API token
const botToken = 'YOUR_BOT_TOKEN';

// Webhook endpoint
app.post(`/webhook/${botToken}`, bodyParser.json(), (req, res) => {
  const { message } = req.body;
  
  // Logic for inspecting or processing intermediate values
  console.log('Received message:', message);
  
  // Perform desired response actions
  // ...

  res.sendStatus(200);
});

// Set webhook endpoint
app.get(`/setWebhook/${botToken}`, async (req, res) => {
  const webhookURL = 'YOUR_WEBHOOK_URL'; // URL for inspecting intermediate values

  try {
    const response = await axios.get(`https://api.telegram.org/bot${botToken}/setWebhook?url=${webhookURL}`);
    console.log(response.data);
    res.sendStatus(200);
  } catch (error) {
    console.error('Failed to set webhook:', error);
    res.sendStatus(500);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
