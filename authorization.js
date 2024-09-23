const authorization = (req, res, next)=>{

    const {user}=req.query
    if (user==='shuhail') {
        req.user={name:user,id:1}
        res.send('welcome')
        next()
    }
    else{
        req.status(401).send('Unauthorized')
    }
}

module.exports=authorization