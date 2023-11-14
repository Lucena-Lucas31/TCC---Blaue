const db = require('./dbService')

/*
const User = db.sequelize.define('user_data', {
    email: {
        type: db.Sequelize.STRING
    },
    username: {
        type: db.Sequelize.STRING
    },
    password: {
        type: db.Sequelize.STRING
    },
    birth_dt: {
        type: db.Sequelize.DATE 
    },
    tel: {
        type: db.Sequelize.INTEGER
    }
})
*/

// User.sync({force: true})

const Game = db.sequelize.define('tb_game', {    
    modo_jogo: {
        type: db.Sequelize.STRING
    },
    pontuacao: {
        type: db.Sequelize.INTEGER
    }, 
    timer: {
        type: db.Sequelize.INTEGER
    }

})

Game.sync({force: true})

module.exports = Game
