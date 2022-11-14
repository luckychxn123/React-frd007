
import cors from 'cors';
import express from 'express'
import { Request, Response } from 'express';
import { loginRoute } from './routes/login'


const app = express()
app.use(express.json())
app.use(cors()) //cors() = default everyone can get in

app.use(loginRoute)


const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}/`);
});
