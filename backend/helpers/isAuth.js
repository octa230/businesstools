const jwt = require('jsonwebtoken')




const generateToken = (user) => {
    return jwt.sign(
      {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '30d',
      }
    );
  };

  
const isAuth =(req, res, next)=> {

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

const isAdmin = (req, res, next)=>{
    if(req.user && req.user.role){
        next()
    } else {
        res.status(401).send({message: 'invalid Admin token'})
    }
}

module.exports = {isAdmin}

module.exports = {isAuth, generateToken, isAdmin}