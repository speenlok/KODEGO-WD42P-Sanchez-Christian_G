const express = require("express");
const router = express.Router();

router.get('/', (req, res)=>{
    res.send("List Users")
 });
 router.get('/new', (req, res)=>{
    res.send("Create New user")
 });
 router.get('/old', (req, res)=>{
    res.send("Old user")
});


router.get('/identification/:vic/:sam', (req, res)=>{
   //console.log(req.params.id);    
   //res.send(`The ID is ${req.params.vic}`) 
   
   const sum =  Number(req.params.vic) + Number(req.params.sam);
   const mul =  Number(req.params.vic) * Number(req.params.sam);
   const divi =  Number(req.params.vic) / Number(req.params.sam);
   const subs =  Number(req.params.vic) - Number(req.params.sam);

   res.send(`The ID is ` + sum + ' ' + mul ) 
   
});


module.exports = router