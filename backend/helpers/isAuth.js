const jwt = require('jsonwebtoken')




const isAuth =(req, res, next) =>{
const authorizaton = req.headers.authorizaton;
if(authorizaton){
    const token = authorizaton.slice(7, authorizaton.length); //Bearer XXXX
    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
        if(err){
            res.status('401').send({message: 'invalid token'})
        } else {
            req.user  = decode
            next()
        }
    })
} else {
    res.status(401).send({message: 'no token'})
}
}

module.exports = isAuth