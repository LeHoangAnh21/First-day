const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    res.sendFile(__dirname + 'C:\MAMP\htdocs\shopee\index.html');
}) 

app.get('/about', (req,res)=>{
	res.end('Hello World' + '<a href = "https://hoanganh211121.herokuapp.com/">go to defa</a>');
})

const PORT = 5000;
app.listen(process.env.PORT || PORT);
console.log('Server is running')