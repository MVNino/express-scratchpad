const Sequelize = require('sequelize')

module.exports = new Sequelize('express_scratchpad', 'root', '', {
    'host': 'localhost',
    'dialect': 'mysql',
})