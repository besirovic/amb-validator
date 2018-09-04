const path = require('path');

const express = require('express');

const PORT = process.env.PORT || 3000;
const BUILD_DIR = path.join(__dirname, 'build');

const app = express();

app.use(express.static(BUILD_DIR));

app.get('*', (req, res) => {
  res.sendFile(path.join(BUILD_DIR, 'index.html'));
});

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`App is running on port ${PORT}`);
});
