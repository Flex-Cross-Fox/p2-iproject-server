const bcrypt = require('bcryptjs')

function hashPass(password){
    return bcrypt.hashSync(password, 10)
}

function comparePass(inputPassword, databasePassword){
    return bcrypt.compareSync(inputPassword, databasePassword)
}

module.exports = { hashPass, comparePass }