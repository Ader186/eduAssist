import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

// Aquí se añadirán las rutas más adelante
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

export default app;