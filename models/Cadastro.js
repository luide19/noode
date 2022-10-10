const db = require('./db')

const Cadastro = db.sequelize.define('cadastros',{
    nome:{
        type: db.Sequelize.STRING
    },
    login:{
        type: db.Sequelize.STRING
    },
    cpf:{
        type: db.Sequelize.STRING
    },
    email:{
        type: db.Sequelize.STRING
    },
    senha:{
        type: db.Sequelize.STRING
    },
    bloqueado:{
        type: db.Sequelize.STRING
    },
    perfis:{
        type: db.Sequelize.STRING
    }
})

//criar tabela
//Cadastro.sync({force:true})

module.exports = Cadastro