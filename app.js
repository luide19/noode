/*
//Conexao com BD MySQL
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cadastro'
});

connection.connect(function(err){
    if (err) console.error('Erro ao realizar a conexão com BD: ' + err.stack); return;
});

connection.query("INSERT INTO users(bloqueado, nome, email ,login ,senha,cpf, perfis) VALUES ('Não','Kelly', 'kelly@celke.com.br', 'kelly.celke', 'ghdgg', '3868', 'Desenvolvedora')",function(err, result){
    if(!err){
        console.log('Usuario cadastrado com sucesso!');
    }else{
        console.log('Erro ao cadastra o usuario!');
    }
});
*/

/*
const Sequelize = require('sequelize')

const sequelize = new Sequelize ('cadastro', 'root' , '', {
    host:'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function() {
    console.log('conexão com sucesso')
}).catch(function(err) {
    console.log('erro de conexao '+err)
})

const User = sequelize.define('cadastros',{
    id: {
        type: Sequelize.INTEGER
    },
    bloqueado:{
        type:Sequelize.STRING
    },
    nome:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING
    },
    login:{
        type:Sequelize.STRING
    },
    senha:{
        type:Sequelize.STRING
    },
    cpf:{
        type:Sequelize.STRING
    },
    perfis:{
        type:Sequelize.STRING
    },
})
*/

const express = require('express');
const { engine } = require ('express-handlebars');

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");

app.get('/cadastro', (req, res) => {
    res.render('form de cadastro');
});


app.listen(8080)