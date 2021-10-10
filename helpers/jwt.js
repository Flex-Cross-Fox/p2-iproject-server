const jwt = require('jsonwebtoken');

function Encoded(input){
    return jwt.sign(input, 'secret')
}

function Decode(token){
    return jwt.verify(token, 'secret')
}

module.exports = { Encoded, Decode };