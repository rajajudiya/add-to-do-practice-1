const express = require('express')
const app = express();
const port = 4000;
const path = require('path');
const router = require('./routes/index');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.static(path.join(__dirname,'views')));
app.use('/', router);

app.listen(port, (req,res) =>{
    console.log(`server is running on http://localhost:${port}`);
    
})