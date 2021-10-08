const { user } = require('../models')
const { Decode } = require('../helpers/jwt')

function authentic(req, res, next){
    const access_token = Decode(req.headers.access_token)
    user.findOne( { where : { email: access_token.email } } )
    .then((data) => {
        console.log(data);
        next()
    })
    .catch((err) => {
        console.log(err);
        res.status(400).json({msg: 'tidak terauthentikasi'})
    })
}

module.exports = { authentic }