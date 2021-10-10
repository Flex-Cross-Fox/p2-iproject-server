const { user } = require('../models');
const { comparePass } = require('../helpers/bcrypt')
const { Encoded } = require('../helpers/jwt')
class userController{
    static login(req, res, next){
        user.findOne({ where: {email: req.body.email } } )
        .then((data) => {
            if(data){
                let result = comparePass( req.body.password, data.password )
                if(result){
                    let access_token = Encoded({ email: req.body.email })
                    res.status(200).json(access_token)
                }else{
                    console.log('tidak match password 14');
                }
            }else{
                console.log('email salah 17');
            }
        })
        .catch((err) => {
            console.log('error disini 21');
            console.log(err);
            res.status(400).json(err)
        })
    }

    static register(req, res, next){
        user.create({ name: req.body.name, email: req.body.email, password: req.body.password, role: req.body.role})
        .then((data) => {
            console.log('berhasil disini 30');
            console.log(data);
            res.status(201).json(data)
        })
        .catch((err) => {
            console.log('error disini 35');
            console.log(err);
            res.status(400).json(err)
        })
    }

    static googleLogin(req, res, next){
        let payload;
        const client = new OAuth2Client(process.env.CLIENT_GOOGLE);
        client.verifyIdToken({
            idToken: req.body.idtoken,
            audience: process.env.CLIENT_GOOGLE
        })
        .then((ticket) => {
            payload = ticket.getPayload()
            return User.findOne({where: {email: payload.email}})
        })
        .then((data) => {
            if(!data){
                return User.create({email: payload.email, password: process.env.PASSWORD_GOOGLE})
            }else{
                return { email: data.email, password: data.password}
            }
        })
        .then((data) => {
            const payload = { email: data.email, id: data.id}
            const access_token = Encoded(payload)
            res.status(200).json({ access_token})
        })
        .catch((err) => {
            console.log(err);
            next(err)
        })
    }
};

module.exports = userController;