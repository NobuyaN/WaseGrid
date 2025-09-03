import express from 'express';
import notesRoutes from './routes/coursesRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

// middleware 
app.use(express.json());

app.use("/api/courses", notesRoutes);

app.listen(PORT, () => {
    console.log('Server is running on PORT:', PORT);
});

