import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import { dbConnection } from './config/dbConnection.js';

dotenv.config();

const PORT = process.env.PORT;
const app = express();

dbConnection();
app.use(express.json());
app.use('/users', userRoutes);

app.listen(PORT, (error) => {
    console.log(`listening on port ${PORT}`);
});
