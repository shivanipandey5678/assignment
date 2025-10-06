import 'dotenv/config';

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { connectDb } from './config/db.js';
import router from './routes/employee.Routes.js';

const app = express();
const PORT = process.env.PORT || 5000;

//MIDDLEWARE
app.use(cors())
app.use(express.json())

//ROUTES
app.use("/api/employee",router)
// -------------------HEALTH-CHECK ROUTE----------------
app.get('/health-check' , (req, res)=> {
    res.send(`Server is running at ${PORT}!`)
})

app.listen(PORT , async() => {
    await connectDb();
    console.log(`✅ App is listening on port ${PORT}`);
});