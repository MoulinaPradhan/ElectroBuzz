import express from 'express'
import dotenv from 'dotenv'
import products from './data/products.js'
import connectDB from "./config/db.js"
import colors from 'colors';

dotenv.config()
const app = express();

connectDB()

app.get('/',(req,res)=>{
    res.send("API is running...")
})

//making api
app.get('/api/products',(req,res)=>{
    res.json(products) //its a json file
})

app.get('/api/products/:id',(req,res)=>{
    const product = products.find(p => p._id === req.params.id)
    res.json(product) //its a json file
})

const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))