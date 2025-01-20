import express from 'express';
import bodyParser from 'body-parser';
import smsRoutes from './routes/smsRoutes.js';

const app = express();

app.use(bodyParser.json());
app.use('/api/sms', smsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
