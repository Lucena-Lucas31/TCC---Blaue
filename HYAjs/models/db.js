const Sequelize = require('sequelize')

//Conexão com banco de dados SQL
const sequelize = new Sequelize ('tcc_blaue', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
})
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se conectar: "+erro)
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
