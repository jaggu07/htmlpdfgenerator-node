var express = require('express');


var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('./test/businesscard.html', 'utf8');
var options = { format: 'A4' };

var router = express.Router();


/* GET home page. */
router.get('/pdf', function(req, res, next) {
  pdf.create(html,options).toFile('./businesscard.pdf', function(err, op) {
  if (err) return console.log(err);
  console.log(op); // { filename: '/app/businesscard.pdf' } 
  if(res){
  	console.log(op);
  	//res.send({res});
  	res.send(op);
}
});
});
module.exports = router;

