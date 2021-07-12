const express = require('express');
const Products = require('./model/Products');


const app = express();
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Welcome to Express!')

})
app.post('/products',(req,res)=>{
    const reqBody = req.body
    let friend = {id:reqBody.id,name:reqBody.name,age:reqBody.age,phone:reqBody.phone}
    FriendList.push(friend)
    res.status(200).json(FriendList)
})


app.get('/products',( req,res)=>{
    res.json(FriendList)
}
)
app.listen(9000,()=>{
    console.log('Express server is runing at 127.0.0.1:9000');
})

app.put('/products/:id',(req,res)=>{
const id = req.params.id
const reqBody = req.body
let foundProduct = ProductList.find((friend)=>{
    return friend.id===Number(id)
})
if(!foundproduct){
res.send('product record not found')
}

else{
    foundProduct.id = reqBody.id
    foundPoduct.name = reqBody.name
    foundProduct.age = reqBody.age
    foundProduct.phone = reqBody.phone
}
let index = ProuctList.indexOf(foundproduct)
ProductList[index]=foundProduct
res.status(200).send(ProductList)
})
