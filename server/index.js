import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/post.js'
import {} from 'dotenv/config'

const app = express();

const PORT = process.env.PORT || 5000;

const CONNECTION_URL = process.env.api_key;
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());


app.use('/posts', postRoutes);
mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Connected to MongoDB Server \nServer running on port: http://localhost:${PORT}`)))
    .catch((err) => console.log(err.message));

mongoose.set('useFindAndModify', false);