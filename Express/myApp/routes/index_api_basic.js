var express = require('express');
var router = express.Router();
let Servant = require('../models/ServanrData');

/* GET home page. */
router.get('/', function(req, res, next) {// index.ejs
  res.render('index', { title: 'Hello World' });
});

// client gui /list_all_foods thi ham nay duoc thuc thi khi server nhan duoc request va tra ve noi dung
router.get('/list_all_servant', (request, response, next) => {
  response.end("GET requested => list_all_servant");
});
// them ban ghi vao csdl
router.post('/insert_new_servant', (request, response, next) => {
  response.end("POST requested => insert_new_servant");
});
// update ban ghi san co trong csdl
router.put('/update_a_servant', (request, response, next) => {
  response.end("PUT requested => update_a_servant");
});
// delete ban ghi trong csdl
router.delete('/delete_a_servant', (request, response, next) => {
  response.end("DELETE requested => delete_a_servant");
});
module.exports = router;
