const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
var path = require('path')
const uploadMiddleware = require('./middlewares/uploadMiddleware');
const fs = require('fs');
const dbService = require("./models/dbService");



//config    
    // Template Engine 
       app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
       app.set('view engine', 'handlebars')
    // Body Parser
       app.use(bodyParser.urlencoded({extended: false}))
       app.use(bodyParser.json())
       app.use(express.static(path.join(__dirname + '/public')));

    //Multer
       app.use(express.json());
       app.use(express.urlencoded({ extended: true }));

// Rotas

    app.get('/gameAnimals', function(req, res){
        res.render('gameAnimals')
    })

    app.get('/register', function(req, res){
        res.render('register')
    })

app.get("/", function(req, res){
    res.render('register')
});

app.get("/home", function(req, res){
    res.render('home')
});

app.get("/firstScreen", function(req, res){
    res.render('firstScreen')
});

app.get("/gameMode", function(req, res){
    res.render('gameMode')
});

app.get("/classicThemes", function(req, res){
    res.render('classicThemes')
});

app.get("/gameNumbers", function(req, res){
    res.render('gameNumbers')
});

app.get("/sobre", function(req, res){
    res.render('sobre')
});

app.get("/gameShapes", function(req, res){
    res.render('gameShapes')
});

app.get("/gameColors", function(req, res){
    res.render('gameColors')
});

app.get("/customScreen", function(req, res){
    res.render('customScreen')
});

app.get("/login", function(req, res){
    res.render('login')
});

app.get('/gameCustom', function(req, res){ 
      
    const Fs = require('fs')  
  const Path = require('path')
  
  const oldPath0 = Path.join(__dirname, "/uploads/0")  
  const newPath0 = Path.join(__dirname, "/public/images/teste/0.jpg")
  
  Fs.renameSync(oldPath0, newPath0)
  
  const oldPath1 = Path.join(__dirname, "/uploads/1")  
  const newPath1 = Path.join(__dirname, "/public/images/teste/1.jpg")
  
  Fs.renameSync(oldPath1, newPath1)

  const oldPath2 = Path.join(__dirname, "/uploads/2")  
  const newPath2 = Path.join(__dirname, "/public/images/teste/2.jpg")
  
  Fs.renameSync(oldPath2, newPath2)

  const oldPath3 = Path.join(__dirname, "/uploads/3")  
  const newPath3 = Path.join(__dirname, "/public/images/teste/3.jpg")
  
  Fs.renameSync(oldPath3, newPath3)

  const oldPath4 = Path.join(__dirname, "/uploads/4")  
  const newPath4 = Path.join(__dirname, "/public/images/teste/4.jpg")
  
  Fs.renameSync(oldPath4, newPath4)

  const oldPath5 = Path.join(__dirname, "/uploads/5")  
  const newPath5 = Path.join(__dirname, "/public/images/teste/5.jpg")
  
  Fs.renameSync(oldPath5, newPath5)



        res.render('gameCustom')
    
    
})



app.get('/getAll', (request, response) => {
    const db = dbService.getDbServiceInstance();

    const result = db.getAllData();

    result
    .then(data => response.json({data : data}))
    .catch(err => console.log(err));
})



app.get('/db', function(req, res){
    res.sendFile('index.html');
})


//resultados jogo
   app.post('/add', function(req, res){

    const {timer , modo_jogo, pontuacao} = req.body;
    const db = dbService.getDbServiceInstance();

    const result = db.insertGame(timer , modo_jogo, pontuacao);

    result
    .then(data => res.json({ sucess: true}))
    .catch(err => console.log(err));
});


   app.post('/upload', uploadMiddleware, (req, res) => {


  const files = req.files;

  
  files.forEach((file, index) => {


    const filePath = `uploads/${index}`;
    

    fs.rename(file.path, filePath, (err) => {
      if (err) {
        // Handle error appropriately and send an error response
        return res.status(500).json({ error: 'Failed to store the file' });
      }
    });
  })
  
  res.redirect('/gameCustom')

});


app.post('/insert', (request, response) => {
    const { parente1, parente2, parente3, parente4, parente5, parente6, nome1, nome2, nome3, nome4, nome5, nome6 } = request.body;
    const db = dbService.getDbServiceInstance();

    const result = db.insertNewName(parente1, parente2, parente3, parente4, parente5, parente6, nome1, nome2, nome3, nome4, nome5, nome6);

    result
    .then(data => response.json({ sucess: true}))
    .catch(err => console.log(err));
});




app.listen(8081, function(){
    console.log("Servidor rodando na porta 8081");
});

