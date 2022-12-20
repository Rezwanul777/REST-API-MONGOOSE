const express=require('express');
const helloController=require('../controllers/helloController')
const employeController=require('../controllers/employeController')
const JWTController=require('../controllers/JWTController')
const router=express.Router();

// router controller
router.get('/hello-get',helloController.HelloGet)
router.post('/hello-post',helloController.HelloPost)

// mongoose api controller with JWT AUTH

router.post('/InsertEmployee',employeController.InsertEmployee)
router.get('/ReadEmployee',employeController.ReadEmployee)
router.put('/UpdateEmployee/:id',employeController.UpdateEmployee)
router.delete('/DeleteEmployee/:id',employeController.DeleteEmployee)

// JWT Controller-- CreateToken

router.get('/CreateToken',JWTController.CreateToken)

// JWT Controller-- DecodeToken
router.get('/DecodeToken',JWTController.DecodeToken)


module.exports=router;