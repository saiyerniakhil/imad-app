var express = require('express');
var morgan = require('morgan');
var Pool = require('pg').Pool;
var path = require('path');
var crypto = require('crypto');
var bodyParser = require('body-parser');
    var config = {
        user: 'akhilsai831',
        database : 'akhilsai831',
        host : 'db.imad.hasura-app.io',
        port : '5432',
        password : process.env.DB_PASSWORD
    };
function createTemplate (data) {
    var title= data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
var htmlTemplate = `
<html>
<head>
<title> ${title} </title>
<meta name="viewport" content = "width=device-width , initial-scale=1">
<link rel="stylesheet" type="text/css" href="ui/style.css">
</head>

<body>
<div class="container">
  <h1>${heading}</h1>
  <p>${date.toDateString()}</p>
  <hr/>
  <div>
            ${content}
    </div>
</div>
</body>
</html>
`;
 return htmlTemplate;   
}


var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.post('/create-user',function (req,res){
    var username = req.body.username;
    var passowrd = req.body.password;
    var salt = crypto.getRandomBytes(128).toString('hex');
    var dbString = hash(password,salt);
    pool.query('INSERT INTO "user" (username,password) VALUES ($1,$2)',[username , dbString], function (err, result){
         if(err) {
            res.status(500).send(err.toString());
        } else {
            res.send('user successfully created'+ username);
        }
    });
});
var pool = new Pool(config); 
app.get('test-db',function(req,res){
    //make a select response
    pool.query('SELECT * FROM  test ',function(err,result){
        if(err) {
            res.status(500).send(err.toString());
        } else {
            res.send(JSON.stringify(result));
        }
    });
    //send the response as the result 
});

var counter = 0;
app.get('/counter',function (req,res){

    counter = counter + 1;
    res.send(`Clicks ${counter.toString()}`);
});

var names =[];
app.get('/submit-name/', function(req ,res){ //URL : submit-name?name=xxxxxx
   //get the name from the request somehow
   var name = req.query.name;
   names.push(name);
   //JSON : JavaScript Object Notation - Its a way of converting JavaScript Objects into Strings
   res.send(JSON.stringify(names)); 
});

function hash(input ,salt){
    var hashed = crypto.pbkdf2Sync(input, salt, 100000, 64, 'sha512');
    return ["pbkdf2","10000",salt,hashed.toString('hex')].join('$');
}
app.get('/hash/:input', function(req,res) {
    var hashedString = hash(req.params.input ,'this-is-some-random-string');
    res.send(hashedString);
});

app.get('/articles/:articleName', function (req,res){
     pool.query("SELECT * FROM article WHERE title = $1" , [req.params.articleName], function (err,result){
        if(err) {
            res.status(500).send(err.toString());
        } else {
            if(result.rows.length === 0 ){
              res.status(404).send('Article Not Found');
            } else {
                var articleData = result.rows[0];
                res.send(createTemplate(articleData));
            }
        }
     });
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});




// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
