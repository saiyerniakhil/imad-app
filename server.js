var express = require('express');
var morgan = require('morgan');
var path = require('path');

var articles  = { 
    'article-one' : {
    title : 'Article One | Akhil',
    heading : 'Article One',
    date : 'Feb 15 2018',
    content:`
          <p>
              Hi! This is Akhil .This my first article on IMAD App :)
          </p> `
    },
    'article-two' : {
    title : 'Article Two | Akhil',
    heading :'Article Two',
    date : 'Feb 16 2018',
    content : ` <p>This is my second aricle in my Web Application.</p>`
    },
    'article-three' : {
    title : 'Article Three | Akhil',
    heading :'Article Three',
    date : 'Feb 16 2018',
    content : ` <p>
              Hi! This is Akhil .This my third article on IMAD App :)
          </p>`
    }    
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
  <p>${date}</p>
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

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req,res){
     var articleName = req.params.articleName;
     res.send(createTemplate(articles[articleName]));
});

var counter = 0;
app.get('/counter',function (req,res){
    counter = counter + 1;
    res.send(`CLicks ${counter.toString()}`);
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
