import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import tourRoute from './routes/tours.js';
import userRoute from './routes/users.js';
import authRoute from './routes/auth.js'

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions ={
    origin:true,
    credentials:true
}

mongoose.set("strictQuery", false);

const connect = async () => {
    try {
        // Uklonjene zastarjele opcije
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB database connected');
    } catch (err) {
        console.log('MongoDB database connection failed:', err.message);
    }
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/auth', authRoute);

app.listen(port, () => {
    connect();
    console.log('Server listening on port', port);
});

