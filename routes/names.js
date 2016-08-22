const express = require('express');
const router = express.Router();

//const names = ['Kevin', 'Canaan', 'Stever', 'Rufus', 'Archie'];
const names = {"Kevin": 1, "Canaan": 1, "Stever": 1, "Rufus": 1, "Archie": 1};
router.get('/', function(req, res, next) {
  res.render('names.ejs', { names });
});

router.post('/', function(req, res, next) {
  const name = req.body.name;
  if (names[name]) {
    names[name]++;
  }else {
    names[name] = 1;
  }
//console.log(names);
  //names.push(name);
  res.redirect('/names');
});

module.exports = router;
