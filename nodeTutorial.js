// const http=require('http')


// const _ = require('lodash')        //////
// const first= readFile('./testFile.txt','utf8',(err, result)=>{console.log(result)})
// console.log(first)

//////////////////////////////////////////////////
//  BASIC ASYNC FILE 

// const {readFile,writeFile}=require('fs').promises

// const start = async()=>{
//     try{
        
//         const first=await readFile('./testFile.txt','utf8')
//         const second=await readFile('./testFile2.txt','utf8')
        
//         await writeFile('./finalFile.txt',`${first} ${second}  Done!`)
//         const final=await readFile('./finalFile.txt','utf-8')
//         console.log(final)
//     } catch(err){
//         console.log(err)
//     }
// }

// start()

//////////////////////////////////////////////////
// BASIC UNDERSTANDING OF EVENTS


// const EventEmitter=require('events')
// const customEmitter=new EventEmitter()

// customEmitter.on('hello',(name)=>{console.log(`hello ${name}`)})
// customEmitter.on('hello',(name)=>{console.log(`hello ${name}`)})

// customEmitter.emit('hello','shuhail')


//////////////////////////////////////////////////
// BASIC SERVER USING HTTP MODULE


// const http=require('http')
// const server=http.createServer()

// server.on('response',(req,res)=>{
//     res.end('hehe')
//     console.log(req)
// })

// server.listen(5000)

//////////////////////////////////////////////////

// console.log(http)
// console.log('hello world')

// const server=http.createServer((req,res)=>{
//     res.write(`<p>
//         <h1>Hellooooo!</h1>
//         </p>`)
//     res.end('hi')
// })

// server.listen(5000)       ///////////


//////////////////////////////////////////////////


// const stream = require('fs')
// const file=stream.createReadStream('./finalFile.txt',{encoding:'utf-8'})

// file.on('data',(result)=>{
//     console.log(result)
// })

// file.on('error',(result)=>{
//     console.log(result)
// })

///////////////////////////////////////////////////

// const fs = require('fs')
// const http=require('http')

// http
//     .createServer((req,res)=>{
//         // const text=fs.readFileSync('./finalFile.txt','utf-8')
//         const text=fs.createReadStream('./finalFile.txt','utf-8')
//         text.on('open',(result)=>{
//             text.pipe(res)
//             // res.end(result)
//         })
//     })
//     .listen(5000)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BASIC SETUP OF SERVER USING HTTP MODULE FOR URL WITH if, else

// const http=require('http')
// const home=require('fs').readFileSync('../portfolioShuhail/index.html')
// const homeStyle=require('fs').readFileSync('../portfolioShuhail/src/ProfileStyling.css')    /////// in require('http'), for each file lik style and index and each elements, you have to locate them seperately. thats why 'express' module is preferred.
// const homeMain=require('fs').readFileSync('../portfolioShuhail/src/main.jsx')
// const server=http.createServer((req,res)=>{
    
//     console.log(req.method)
    
//     const url=req.url
    
    
//     if(url==='/'){
        
//         res.writeHead(200,{'content-type':'text/html'})
//         res.write(home)
//         res.end()
        
//     } else if(url==='/about'){
//         res.writeHead(200,{'content-type':'text/html'})
//         res.write('<h1>about page</h1>')
//         res.end()
        
//     }
//     else if(url==='/style.css'){
//         res.writeHead(200,{'content-type':'text/css'})
//         res.write(homeStyle)
//         res.end()
        
//     }
//     else if(url==='/main.jsx'){
//         res.writeHead(200,{'content-type':'text/html'})
//         res.write(homeMain)
//         res.end()
        
//     }
    
//     else{
//         res.writeHead(404,{'content-type':'text/html'})
//         res.write('<h3>Page not found.</h3>')
//         res.end()
        
//     }
    
//     // res.end()
    
// })
// .listen(5000)



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BASIC SETUP OF SERVER USING EXPRESS MODULE


// // const app = require('express')()         //you can create it like this too
// const express = require('express')
// const app=express()

// app.get('/',(req,res)=>{
//     // res.send('<h1>Home</h1>')            //yes you can send like this, but add status() is a more common practise to make sure it works perfect.
//     res.status(200).send('<h1>Home</h1>')
// })

// app.get('/about',(req,res)=>{
//     res.status(200).send('<h1>About</h1>')
// })

// app.all('*',(req,res)=>{
//     res.status(404).send('page not found')
// })

// app.listen(5000,()=>{console.log('server is listening on port 5000..')})


/////////////////////////////////////////////////////////////////////////////////////////////////////
// USING EXPRESS, TO HAVE A STATIC LOCATION SO THAT EVERYTHING IS IN GIVEN LOCATION like ./style.css, ./logo.png etc.

// const express=require('express')
// const app=express()


// // const path=require('path')

// // const homePage=path.resolve(__dirname,'./nav-bar/index.html')      //outputs string, for the given arguments to single path
// // app.get('/',(req,res)=>{
// //     res.sendFile(homePage)                                                                  //we use sendFile just like send(), but as its a link to the file.       //if needed, you can also use status() before sendFile like previous example
// // })                                                        //yup. We don't need this. instead we can just use the statis method as it has the root html file

// app.use(express.static('./nav-bar'))

// app.listen(5000, ()=>{
//     console.log('server listening on port 5000....')
// })



//////////////////////////////////////////////////////////////////////////////

// const express=require('express')
// const app=express()
// const {datas}=require('./data')
// // console.log(datas)

// app.get('/',(req,res)=>{
//     res.send('HOME')
// })

// app.get('/api/products', (req,res)=>{
//     const newProducts=datas.map((data)=>{
//         const {id,name,image}=data
//         return {id,name,image}
//     })

//     res.json(newProducts)
// })

// app.get('/api/products/1', (req,res)=>{
//     const singleProduct=datas.find((data)=>data.id==="rec6d6T3q5EBIdCfD")
//     console.log(singleProduct)
//     res.json(singleProduct)
// })

// app.listen(5000,()=>{console.log('listening to port 5000')})



////////////////////////////////////////////////////////////////////////////////
// url queries 


// const express=require('express')
// const { datas } = require('./data')
// const app=express()

// const products=require('./data').datas


// app.get('/products/:productID',(request,response)=>{
//     const reqProduct=products.find((product)=>product.id===request.params.productID)        //params gives string. so for integers, use Number()

//     let sortedProducts=[...products]

//     if(!reqProduct){
//         return response.status(404).send('Product doesn\'t exist')
//     }
//     const queries=request.query

//     if(queries.search){
//         sortedProducts=sortedProducts.filter((product)=>{
//             return product.name.startsWith(queries.search)})
//     }
//     if(queries.limit){
//         sortedProducts=sortedProducts.slice(0,Number(queries.limit))
//     }

//     response.status(200).json(sortedProducts)
// })

// app.listen(5000)

////////////////////////////////////////////////////////////////////////////////////
// express middleware


// const express=require('express')
// const app=express()
// const authorize=require('./authorization')

// const logger=(req,res,next)=>{
//     const method=req.method
//     const url=req.url
//     const time=new Date().getFullYear()
//     console.log(method, url, time)
//     next()
    
// }

// app.use('/api',[logger, authorize])


// app.get('/',(req,res)=>{
//     res.send('Home')
//     // console.log(req.user)
// })

// app.get('/api/about',(req,res)=>{
//     res.send('Home')
//     console.log(req.user)
// })

// app.listen(5000,()=>{console.log('listening to port 5000...')})

/////////////////////////////////////////////////////////////////////////////////////////////
//POST Method

const express = require("express");
const app = express();

const datas = require("./data");
console.clear();

app.use(express.static("./nav-bar"));
// app.use(express.urlencoded({extended:false}))            //mostly for html forms for post method so that we get the data
app.use(express.json()); //Mostly used in For API Requests to payload or give result data in json

// console.log(datas)
app.listen(5000, () => {
  console.log("listening to port 5000....");
});

// app.get('/entrance',(req,res)=>{
//     res.status(200).json({success:true,datas})
// })

app.post("/entrance/:id", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false });
  }
  res.status(201).json({ success: true, name: name });
});


app.put("/entrance/:id", (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const person=datas.find((person)=>person.id===Number(id))

    if (!person) {
      return res.status(404).json({ success: false, msg:`no person with id ${id}` });
    }

    const newPeople=datas.map((person)=>{
        if (person.id===Number(id)) {
            person.name=name            
        }
        return person
    })

    console.log(newPeople)
    res.status(200).json({success:true,data: newPeople})

});