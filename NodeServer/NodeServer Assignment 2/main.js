const ex = require('express')
const wd = ex();
const fs = require('fs');

wd.set("view engine",  "ejs")
wd.use(ex.urlencoded({ extended: true}))

wd.get('/',(r1, r2)=>{
    r2.render("login")
});

wd.get('/login',(r1, r2)=>{
    r2.render("login")
});

wd.post('/login-registration', (r1, r2)=>{
   const username_value = 'admin';
   const password_value = '123456';
            
   let usr = r1.body.username
   let pwd = r1.body.password

   if(usr == username_value && pwd == password_value){
    r2.render('form')

   } else {
    r2.render("login", { errorMessage:"Sorry try again" })
   }

});

wd.post('/form-registration', (req, res)=>{
    
 let fname = req.body.firstname
 let lname = req.body.lastname
 let age = req.body.age
 let address = req.body.address
 let email = req.body.email
    
 console.log(fname +  "    " +lname)
 
    fs.writeFile('storage/' + fname + "-" +lname + '.txt', fname +  "    " +lname  +  "    " + age  +  "    " +address  + "    " +email, function (err) {
    if (err) throw err;
     console.log('Saved!');
     res.end();
     
    }); 
    
})


wd.listen(3000)
console.log('running in port 3000')