import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import connectDB from './Config.js';
import userRoutes from './routes/userRoutes.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

//configuring environment variables
dotenv.config()

const app = express()

//connecting databse
connectDB()

app.use(express.json( {limit: "50mb"} ))
app.use(cors())

app.get('/',(req,res)=>{
    res.send('API running')
})

app.use('/api/users', userRoutes)


//importing and using routes
// app.use('/api/users', userRoutes)
// app.use('/api/category',categoryRoutes)

// const __dirname = path.resolve()

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '/frontend/build')))

//   app.get('*', (req, res) =>
//     res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
//   )
// } else {
//   app.get('/', (req, res) => {
//     res.send('API is running....')
//   })
// }

//error handling
app.use(notFound)
app.use(errorHandler)

app.listen(process.env.PORT, console.log('Server Connected'))