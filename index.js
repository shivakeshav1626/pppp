const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config();
const Movie = require('./schema.js')

const app = express();
app.use(express.json())
app.use(cors());
const port = process.env.PORT||5000

app.get('/item',(req,res)=>{
    res.status(200).json({message:'Hello Bhavi'})
})

app.post('/item', async(req,res)=>{
    try{
const {moviename,review,collected} = req.body
if(!moviename || !review || !collected === undefined)
    return res.status(404).json('Movie not reached')
return res.status(200).json({message:'hello'})
const newmovie = new Movie({moviename,review,collected})
 await newmovie.save();
}catch(e){
    console.log(e)
}

})

 const db =  async()=>{
    try{
await mongoose.connect(process.env.MODULE_URL)
  console.log('MongoDB Server Connected')}

catch(e){
  console.log(e)
}
 }
 db();

app.put("/movie/:id", async(req,res) =>{
    try {
      const updatedmovie = await Movie.findByIdAndUpdate(
        req.params.id, 
       req.body,
        { new: true }
      );
      if (!updatedmovie) 
        return res.status(400).json({ error: "Movie not found" });
      res.json(updatedItem);
    } catch (err) {
        console.log(err)
        }
  });
  
  app.delete("/movie/:id", async(req,res) =>{
    try {
      const deletedmovie = await Movie.findByIdAndDelete(req.params.id);

      if (!deletedItem)
         return res.status(400).json({ error: "Movie not found" });
      res.json({ message: "Movie successfully deleted" });
    } catch (error) {
      console.log(error)
    }
  });

  app.listen(port,()=>{
       console.log(`Connected Successfully: http://localhost:${port}`);
  });