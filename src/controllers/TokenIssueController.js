const jwt = require('jsonwebtoken');

exports.TokenIssue=(req,res)=>{
   let Payload={
      exp: Math.floor(Date.now() / 1000) + (60*60),
      data:{Name:"Rezwan",City:"Bogura",Admin:true}
   }
   let Token=jwt.sign(Payload,"Secret123")
   res.send(Token)
}