const express = require('express');
const route = require('./route/route')
const cors = require('cors');
const bodyParser =require('body-parser'); 
const  mongoose =require('mongoose');
const app = express();
const valid=require('validator')



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

mongoose.connect("mongodb+srv://Deepak:Deepak9162@cluster0.uylkg.mongodb.net/bloggingproject", {
    useNewUrlParser :true
})
.then( () => console.log("MongoDb is Connected"))
.catch( error => console.log(error))


app.use('/',route);

app.listen(process.env.PORT || 8000 ,function () {
    console.log('Express app running on  port ' + (process.env.PORT || 8000))
});





