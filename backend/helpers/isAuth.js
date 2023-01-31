const jwt = require('jsonwebtoken')




const token = (user) => {
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
if(authorizaton && authorizaton.startsWith('Bearer')){

    //get the bearer from headers
    const token = authorizaton.split(' ')[1]; //Bearer XXXX

    //verify token
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err){
            res.status('401').send({message: 'invalid token'})
        } else {

            //get user from token
            req.user  = User.decoded.user.select('-password')
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

module.exports = {isAuth, token, isAdmin}