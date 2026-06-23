'use strict';
/**
 * sector-server.js
 * Minimal Express server for Collaborate Global sector microsites.
 * Serves index.html and static assets from the same directory.
 * Railway sets process.env.PORT automatically.
 */
const express = require('express');
const path    = require('path');
const app     = express();
const PORT    = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen(PORT, () => console.log(`Sector microsite running on port ${PORT}`));
