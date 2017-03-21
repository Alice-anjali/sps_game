var express = require('express')
var bodyParser = require('body-parser')

var app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.sendfile('public/index.html')
})

app.post('/compete',function(req,res){
  var name = req.body.name;
  var f = "";
  var randomNumber = Math.floor(Math.random() * 3);
  var num = randomNumber.toString();

  if(name==num){f="Oops! That's a Tie"}
  if(name==0&&num==1){f="You lost!"}
  if(name==1&&num==0){f="Hurray! You won"}
  if(name==1&&num==2){f="You lost!"}
  if(name==2&&num==1){f="Hurray! You won"}
  if(name==2&&num==0){f="You lost!"}
  if(name==0&&num==2){f="Hurray! You won"}

  var n1;
  var n2;
  if(name==0){n1="Stone"}
  if(name==1){n1="Paper"}
  if(name==2){n1="Scissor"}
  if(num==0){n2="Stone"}
  if(num==1){n2="Paper"}
  if(num==2){n2="Scissor"}
  var user_res = "Your choice : "+n1;
  var comp_res = "Computer's choice : "+n2;

  var obj1 = {
    user : user_res,
    comp : comp_res,
    final_result : f
  }
  res.send(obj1);

})

app.use(express.static('public'));


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
