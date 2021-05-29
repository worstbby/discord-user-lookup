const express = require('express');
const { getUser } = require('./discord');

const app = express();
const api = express.Router();

api.get('/user/:id', async (req, res) => {
    const userData = await getUser(req.params.id);
    res.send(userData.data);
})

app.use('/api',api);

module.exports = app;