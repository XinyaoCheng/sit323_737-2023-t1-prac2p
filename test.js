const express = require('express');
const app = express();
const bodyParser = require('body-parser')
var jsonParser = bodyParser.json();

let users =[
    {id:1, name:'John'},
    {id:2, name:'Jane'},
    {id:3, name:'Bob'}
];

app.get('/users', (req, res) => {
    res.json(users);
});

//:id是动态参数，需要用req.params来读取

app.get('/users/:id', (req,res)=>{
    var id=+req.params.id;
    console.log(id);
    var user = users.find(u=>u.id==id);
    console.log(user);
    res.send(user);
});

app.post('/users',jsonParser, (req,res)=>{
    //处理函数
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(newUser);
});

app.put('/users/:id', jsonParser, (req, res)=>{
    const userId = parseInt(req.params.id);
    const updatedUser = req.body;
    users=users.map(user =>user.id === userId ? updatedUser : user);
    res.status(200).jason(updatedUser);
});

app.delete('/users/:id', (req,res)=>{
    const userId = parseInt(req.params.id);
    users = users.filter(user =>id !==userId);
    res.status(204).send();
});

//listen（）启动服务器
app.listen(3000, ()=>{
    console.log('Server id listening on port 3000');
});