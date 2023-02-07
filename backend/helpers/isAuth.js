const jwt = require('jsonwebtoken')



exports.token = (user) => {
    return jwt.sign(
      {
        id: user._id,
        name: user.name,
        password: user.password,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '5d',
      }
    );
  };


  exports.isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization) {
      const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
      jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
        if (err) {
          res.status(401).send({ message: 'Invalid Token' });
        } else {
          req.user = decode;
          next();
        }
      });
    } else {
      res.status(401).send({ message: 'No Token' });
    }
  };

exports.isAdmin = (req, res, next)=>{
    if(req.user && req.user.role){
        next()
    } else {
        res.status(401).send({ message: 'invalid Admin token'})
    }
}


