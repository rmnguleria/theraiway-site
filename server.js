var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/',function(req,res){
	res.sendfile('./index.html');
});

app.listen(3000);

 	51126512172
 	AC47878614