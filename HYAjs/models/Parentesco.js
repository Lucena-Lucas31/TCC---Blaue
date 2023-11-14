const db = require('./dbService')

const Parentesco = db.sequelize.define('Parentesco', {    
    parente1: {
        type: db.Sequelize.STRING
    },
    parente2: {
        type: db.Sequelize.STRING
    },
    parente3: {
        type: db.Sequelize.STRING
    },
    parente4: {
        type: db.Sequelize.STRING
    },
    parente5: {
        type: db.Sequelize.STRING
    },
    parente6: {
        type: db.Sequelize.STRING
    }
})

Parentesco.sync({force: true})

module.exports = Parentesco

