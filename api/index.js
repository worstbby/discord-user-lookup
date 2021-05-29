const express = require('express');
const { getUser, getAvatar } = require('./discord');

const app = express();
const api = express.Router();

api.get('/user/:id', async (req, res) => {
    const userData = await getUser(req.params.id);
    res.send(userData.data);
})

api.get('/avatar/:id.:format', async (req, res) => {
    const userData = await getUser(req.params.id);
    res.redirect(`https://cdn.discordapp.com/avatars/${userData.data.id}/${userData.data.avatar}.${req.params.format}`);
})

app.use('/api',api);

module.exports = app;