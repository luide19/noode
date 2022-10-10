const express = require('express');
const app = express();

const moment = require('moment')

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const Cadastro = require('./models/Cadastro')

/*
const handlebars =  require('express-handlebars')
app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')
*/

const {engine} = require('express-handlebars')
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");



//css
app.use('/css', express.static(__dirname + '/css'))

app.get('/index', (req, res) => {
    res.render('index');
});

app.get('/log', (req, res) => {
    Cadastro.findAll().then(function(cadastros){
        res.render('log', {cadastros: cadastros} );
    })
});

app.get('/novousuario', (req, res) => {
   res.render('novousuario');
}); 

app.post('/cad', (req, res) => {
  // res.send('Nome: ' + req.body.nome + '<br> Login: ' + req.body.login + '<br> CPF: ' 
 //  + req.body.cpf + '<br> E-mail: ' + req.body.email + '<br> Senha: ' + req.body.senha + '<br> Bloqueado: ' + req.body.bloqueado + '<br> Perfis: ' + req.body.perfis) 
 Cadastro.create({
    nome: req.body.nome ,
    login: req.body.login ,
    cpf: req.body.cpf ,
    email: req.body.email ,
    senha: req.body.senha ,
    bloqueado: req.body.bloqueado ,
    perfis: req.body.perfis
 }).then(function(){
    res.redirect('/log')
    //res.send('CADASTRADO COM SUCESSO')
 }).catch(function(){
    res.send('ERRO' + erro)
 })

});

app.get('/novosetor', (req, res) => {
    res.render('novosetor');
});


app.listen(8080)