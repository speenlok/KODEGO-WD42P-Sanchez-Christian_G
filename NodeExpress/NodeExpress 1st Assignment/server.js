const express = require("express");
const app = express();

app.set("view engine", "ejs")

app.get('/', (req, res)=>{
    res.render('home', obj)
    //res.render()
});

const obj = { newVaraiable : "Hello, This is a test server" }

app.get('/home', (req, res)=>{
   res.render('home', obj)
});

app.get('/contact-us', (req, res)=>{
   res.render('contact-us')
});

app.get('/about-us', (req, res)=>{
   res.render('about')
});

const userRouter = require('./routes/users')
app.use('/users', userRouter)


app.listen(3000);
console.log("running in port 3000");

