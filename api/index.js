const express = require('express');
const { getUser } = require('./discord');

const app = express();
const api = express.Router();

api.get('/user/:id', async (req, res) => {
    const userData = await getUser(req.params.id);
    res.send(userData.data);
});

api.get('/avatar/:id.:format', async (req, res) => {
    const userData = await getUser(req.params.id);
    res.redirect(`https://cdn.discordapp.com/avatars/${userData.data.id}/${userData.data.avatar}.${req.params.format}${ (req.query.size) ? '?size=' + req.query.size : ''}`);
});

api.get('/banner/:id.:format', async (req, res) => {
    const allowedFormats = ['webp', 'gif', 'png', 'jpg'];
    if (!allowedFormats.includes(req.params.format)) {
        return res.status(400).send({ error: 'Invalid format' });
    }

    const userData = await getUser(req.params.id);
    res.redirect(`https://cdn.discordapp.com/banners/${userData.data.id}/${userData.data.banner}.${req.params.format}`);
});

api.get('/badges/:id', async (req, res) => {
    const userData = await getUser(req.params.id);
    res.send(userData.data.badges);
});

app.use('/api', api);

module.exports = app;
