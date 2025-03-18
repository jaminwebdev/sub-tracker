import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the Subscription Tracker API');
});

app.listen(5000, async () => {
  console.log(`Subscription Tracker API is running on http://localhost:5000`);
});

export default app;
