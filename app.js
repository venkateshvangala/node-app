const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const router = express.Router();
app.use('/', router);
app.set('view engine', 'html');
app.engine('html', require('consolidate').underscore);
const port = 3000;





router.get('/', function (req, res) {
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then(function(data) {
    console.log(data)
    res.render(path.join(__dirname + '/index.html'), { users : data});
  })
  .catch(function (error) {
    console.log(error);
  });
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