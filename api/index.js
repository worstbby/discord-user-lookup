const express = require('express');
const { getUser } = require('./discord');

const app = express();
const api = express.Router();

api.get('/user/:id', async (req, res) => {
const userData = await getUser(req.params.id);
res.send(userData.data);
});

api.get('/avatar/:id', async (req, res) => {
const userData = await getUser(req.params.id);
let avatarUrl = https://cdn.discordapp.com/avatars/${userData.data.id}/${userData.data.avatar};
if (req.query.size) {
avatarUrl += ?size=${req.query.size};
}
res.redirect(avatarUrl);
});

api.get('/banner/:id', async (req, res) => {
const userData = await getUser(req.params.id);
let bannerUrl = https://cdn.discordapp.com/banners/${userData.data.id}/${userData.data.banner};
if (req.query.size) {
bannerUrl += ?size=${req.query.size};
}
res.redirect(bannerUrl);
});

api.get('/badges/:id', async (req, res) => {
const userData = await getUser(req.params.id);
res.send(userData.data.badges);
});

api.get('/user/flags/:id', async(req, res) => {
const userData = await getUser(req.params.id);
res.send(userData.data.flags);
});

app.use('/api', api);

module.exports = app;
