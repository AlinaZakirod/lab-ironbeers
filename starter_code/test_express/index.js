const express = require('express')
const app = express()
app.use(express.json())
// const classes = require('./classList');
// console.log(classes)
classes  = [
    {id:1, name: "Biology"},
    {id:2, name: "History"},
    {id:3, name: "Politics"},
    {id:4, name: "CS"},
    {id:5, name: "Weed growing"},
]

app.get('/names', (req, res, next) => {
    res.send(classes)
})

app.get('/names/:id',(req,res,next)=>{
   const names = classes.find(x => x.id === parseInt(req.params.id))
   res.send(names)
})
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)