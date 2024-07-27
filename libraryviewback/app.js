const express=require('express')
const app=new express()
const cors=require('cors')
app.use(cors())
const PORT=5000
 const BookModel=require('./model/Booksdata')
 const Request=require('./model/Request')
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
app.post('/addbook',async (req,res)=>{
    try {
        var item=req.body
        const datasave= new BookModel(item)
        const saveddata=await datasave.save()
        res.send('post succesful')
    } catch (error) {
        console.log(error)
    }
})
app.delete('/removebook/:id',async (req,res)=>{
    try{
    await BookModel.findByIdAndDelete(req.params.id)
    res.send('deleted succesfully')
    }catch(error){
        console.log(error)

    }
})

 
  app.post('/:id/request', async (req, res) => {
    try {
      const book = await BookModel.findById(req.params.id);
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }
  
      const newRequest = new Request({
        bookId: book._id,
        bookName: book.title,
      });
  
      await newRequest.save();
      res.status(201).json(newRequest);
    } catch (error) {
      res.status(500).json({ message: 'Error creating request', error });
    }
  });
  app.post('/:id/like', async (req, res) => {
    try {
      // Find the book by its ID
      const book = await BookModel.findById(req.params.id);
  
      // Check if the book exists
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }
  
      // Increment the like count
      book.likecount += 1;
  
      // Save the updated book
      await book.save();
  
      // Respond with the updated book
      res.json(book);
    } catch (error) {
      res.status(500).json({ message: 'Error updating like count', error });
    }
  });