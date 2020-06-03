var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:name', (req, res) => {
  const name = req.params.name
  res.send(`You're so cool ${name}`)
})

module.exports = router;
