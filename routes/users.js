var express = require('express');
var router = express.Router();

let users = [
  { id: 1, name: 'Ram Dandu' },
  { id: 2, name: 'Anupama Kommalapati'}
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

router.get('/:id', function(req, res, next) {
  console.log('Id '+req.params.id);
  let user = users.find(user => {
    return user.id == req.params.id;
  });
  console.log('User '+JSON.stringify(user));
  res.json(user);
});

module.exports = router;
