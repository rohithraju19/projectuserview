const express=require('express')
const app=new express()
const cors=require('cors')
app.use(cors())
const PORT=5000
 const BookModel=require('./model/Booksdata')
require('./connection')
app.use(express.json())
// app.post('/addmovie',async (req,res)=>{
//     try {
//         var item=req.body
//         const datasave= new movieModel(item)
//         const saveddata=await datasave.save()
//         res.send('post succesful')
//     } catch (error) {
//         console.log(error)
//     }
// })






app.listen(PORT,()=>{
    console.log('server is running on port 5000')
 })
 app.get("/books",async (req,res)=>{
    try {
        const data=await BookModel.find()
        res.send(data)
    } catch (error) {
        res.send('Data not found')
        
    }
})