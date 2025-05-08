//import pakage
import express from "express";
import mongoose from 'mongoose';
import 'dotenv/config'

const app = express()
const port = process.env.PORT;
const db_url= process.env.DBURL;

app.get('/', (req, res) => {
  res.send('Hello Rashi!')
})

app.listen(port, async() => {
  await mongoose.connect(db_url);
  console.log(`DB connected successfully!, Server is running on port no: ${port}`)
})
