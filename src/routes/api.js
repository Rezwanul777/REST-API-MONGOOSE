const express=require('express');
const helloController=require('../controllers/helloController')
const employeController=require('../controllers/employeController')
const JWTController=require('../controllers/JWTController')
const TokenIssueController=require('../controllers/TokenIssueController')
const TokenVerify=require('../middleware/TokenVerify')
const router=express.Router();

// router controller
router.get('/hello-get',helloController.HelloGet)
router.post('/hello-post',helloController.HelloPost)

// mongoose api controller with JWT AUTH
router.get('/TokenIssue',TokenIssueController.TokenIssue)
router.post('/InsertEmployee',TokenVerify,employeController.InsertEmployee)
router.get('/ReadEmployee',TokenVerify,employeController.ReadEmployee)
router.put('/UpdateEmployee/:id',TokenVerify,employeController.UpdateEmployee)
router.delete('/DeleteEmployee/:id',TokenVerify,employeController.DeleteEmployee)

// JWT Controller-- CreateToken

router.get('/CreateToken',JWTController.CreateToken)

// JWT Controller-- DecodeToken
router.get('/DecodeToken',JWTController.DecodeToken)


module.exports=router;