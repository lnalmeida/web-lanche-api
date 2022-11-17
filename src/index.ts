import express from 'express';
import path from 'node:path';
import mongoose from 'mongoose';
import { router } from './routes';


mongoose.connect('mongodb+srv://weblanche:ltja4664@cluster0.ees2xqj.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log('Database connection successfull');
        const app = express();
        const port = process.env.PORT || 3210;
        app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
        app.use(express.json());
        app.use(router);
        app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
    })
    .catch(() => console.error('Database connection error'));



