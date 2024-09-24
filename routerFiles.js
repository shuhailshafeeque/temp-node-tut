
const express=require('express')
const routerApp=express.Router()

// express().use(routerApp)

// express().use(express.json())

const getUserVariable=(req,res)=>{
    res.status(200).send("Welcome")
}

const postUser=(req,res)=>{
    console.log(req.body)
    res.send({msg:'success post',name:req.body.name})
}


// routerApp.get('/',(req,res)=>{
//     res.status(200).send("Welcome")
// })

// routerApp.post('/posted',(req,res)=>{
//     console.log(req.body)
//     res.send({msg:'success post',name:req.body.name})
// })

routerApp.get('/',getUserVariable)

routerApp.post('/posted',postUser)              //if same url, then you can use like,  routerApp.route('/').get(getUserVariable).post(postUser)    but in this example, post() uses different url i.e, '/posted'


module.exports=routerApp