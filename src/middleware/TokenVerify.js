const jwt = require('jsonwebtoken');
module.exports=(req,res,next)=>{
   let Token=req.headers['token-secret']
   jwt.verify(Token, 'Secret123', function(err, decoded) {
      if(err){
         res.status(401).json({status:"Invalid token",data:err})
      }else{
         next()
      }
    });
}