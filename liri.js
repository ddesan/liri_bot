require("dotenv").config();

const spotify = require('spotify')
spotify.connect({
  ID: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
})