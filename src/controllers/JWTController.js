const jwt = require('jsonwebtoken');

exports.CreateToken=(req,res)=>{
   let Payload={
      exp: Math.floor(Date.now() / 1000) + (30),
      data:{Name:"Rezwan",City:"Bogura",Admin:true}
   }
   let Token=jwt.sign(Payload,"Secret12345")
   res.send(Token)
}

exports.DecodeToken=(req,res)=>{
   let Token=req.headers['token-secret']
   jwt.verify(Token, 'Secret12345', function(err, decoded) {
      if(err){
         res.status(401).json({status:"Invalid token",data:err})
      }else{
         res.status(200).json({status:"Successful token",data:decoded})
      }
    });
    
}