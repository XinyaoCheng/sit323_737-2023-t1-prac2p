
const express = require('express');
const app = express();
let students =[
    {name:'Lily', class:4},
    {name:'Jack',class:3}
]

app.get('/allStudent',(req,res)=>{
    res.json(students)
})

app.get('/test',function (req,res){
    res.send('this is a simple test!')
})


app.listen(3000,()=>{
    console.log('Server id listening on port 3000');

})