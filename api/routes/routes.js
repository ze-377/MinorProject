var express=require('express')
var router=express.Router()


//restaurant login and signup
var restsign=require('./restaurant/restsign')
router.post('/restsign',restsign.rsignup)
router.post('/restlogin',restsign.restlogin)

//customer login
var custlogin=require('./loginandsignup')
router.post('/signup',custlogin.signup)
router.post('/login',custlogin.login)

//show projects
// var showProjects = require('./showprojects')
// router.get('/showproject',showProjects.findProject)

//Enter Projects//
var enterProjects = require ('./showprojects')
router.post('/enterProjects',enterProjects.enterProjects)
router.get('/showproject',enterProjects.findProject)


module.exports=router
