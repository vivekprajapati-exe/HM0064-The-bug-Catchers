const router = require('express').Router;

router.post('/login' , (req , res)=>{
  res.send("login sucessful")
})
router.post('/signup' , (req , res)=>{
  res.send("signup sucessful")
})