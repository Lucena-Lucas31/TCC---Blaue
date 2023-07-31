const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Game = require('./models/Tabels')
var path = require('path')


//config    
    // Template Engine 
       app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
       app.set('view engine', 'handlebars')
    // Body Parser
       app.use(bodyParser.urlencoded({extended: false}))
       app.use(bodyParser.json())
       app.use(express.static(path.join(__dirname + '/public')));

// Rotas

    app.get('/gameAnimals', function(req, res){
        res.render('gameAnimals')
    })

    app.get('/register', function(req, res){
        res.render('register')
    })

app.get("/", function(req, res){
    res.render('home')
});

app.get("/login", function(req, res){
    res.render('login')
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

app.get("/gameShapes", function(req, res){
    res.render('gameShapes')
});

app.get("/gameColors", function(req, res){
    res.render('gameColors')
});

app.get("/customScreen", function(req, res){
    res.render('customScreen')
});



   app.post('/add', function(req, res){
        Game.create({
            pontuacao: req.body.pontuacao,
            modo_jogo: req.body.modo
        }).then(function(){
            res.redirect('/classicThemes')
        }).catch(function(erro){
            res.send("Houve um erro: "+ erro)
        })
    })


app.listen(8081, function(){
    console.log("Servidor rodando na porta 8081");
});