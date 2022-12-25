const express = require('express');
const { getUser } = require('./discord'); // Asume que este archivo contiene la función getUser

const app = express();
const api = express.Router();

api.get('/user/:id', async (req, res) => {
  const userData = await getUser(req.params.id);
  const user = userData.data;
  const avatarUrl = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}`;
  const bannerUrl = `https://cdn.discordapp.com/banners/${user.id}/${user.banner}`;
  res.send({
    ...user,
    avatarUrl,
    bannerUrl,
    status: user.status,
    aboutMe: user.description,
  });
});

api.get('/avatar/:id.:format', async (req, res) => {
  const userData = await getUser(req.params.id);
  res.redirect(`https://cdn.discordapp.com/avatars/${userData.data.id}/${userData.data.avatar}.${req.params.format}${ (req.query.size) ? '?size=' + req.query.size : ''}`);
});

api.get('/banner/:id.:format/:size?', async (req, res) => {
  const allowedFormats = ['webp', 'gif', 'png', 'jpg'];
  if (!allowedFormats.includes(req.params.format)) {
    return res.status(400).send({ error: 'Invalid format' });
  }

  const userData = await getUser(req.params.id);
  let bannerUrl = `https://cdn.discordapp.com/banners/${userData.data.id}/${userData.data.banner}.${req.params.format}`;
  if (req.params.size) {
    bannerUrl += `?size=${req.params.size}`;
  }
  res.redirect(bannerUrl);
});

app.use('/api', api);

module.exports = app;
