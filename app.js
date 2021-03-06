//Part#1 Point1,changed main as app.js in package.json
const express = require('express'); 
const path = require ('path'); 
const bodyParser = require('body-parser'); //Part#1 Point2
const cors = require('cors');//Part#2 Point7
const PORT = process.env.PORT || 5000
const dotenv = require('dotenv')
dotenv.config({path:__dirname+'/.env'});

 //Part#2 Point6 navbar deleted

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homeroute'); //Part#1, Point3 changed to homerouter
const booksRouter = require('./src/routes/booksroute'); 
const authorsRouter = require('./src/routes/authorsroute'); 

const app = new express; 


app.set('views','./src/views'); 
app.set('view engine','ejs'); 

app.use(cors()); //Part#2 Point7
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index',{nav}); //Part#2 Point6
    
});



app.listen(PORT,()=>{
    console.log(`Server Ready on ${PORT}`); //Part #1 Point5
});

