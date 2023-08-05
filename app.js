const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const companyRoutes = require('./routes/CompanyRoutes')
const itemRoutes = require('./routes/ItemRoutes')

app.use('/company',companyRoutes)
app.use('/item',itemRoutes)

mongoose.connect("mongodb://127.0.0.1/EMS", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('DB Connected');
    // Your server setup or further application logic can be added here
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.listen(PORT,()=>{
    console.log('server started at ',PORT)
}) 