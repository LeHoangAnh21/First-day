const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html' + '<a href = "https://hoanganh211121.herokuapp.com/about">go to defa</a>');
}) 

app.get('/about', (req,res)=>{
	res.end('Hello World' + '<a href = "https://hoanganh211121.herokuapp.com/">go to defa</a>');
})

const PORT = 5000;
app.listen(process.env.PORT || PORT);
console.log('Server is running')