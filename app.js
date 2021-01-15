const express = require('express');
const path = require('path');
const app = express();
const router = express.Router();
app.use('/', router);
const port = 3000;


router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname + '/about.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/sitemap', function (req, res) {
  res.sendFile(path.join(__dirname + '/sitemap.html'));
  //__dirname : It will resolve to your project folder.
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})