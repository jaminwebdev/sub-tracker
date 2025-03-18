import express from 'express';
import { PORT, NODE_ENV } from './config/env.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the Subscription Tracker API');
});

app.listen(PORT, async () => {
  console.log(`Subscription Tracker API is running on http://localhost:${PORT}`);
  console.log(`Environment: ${NODE_ENV}`);
});

export default app;
