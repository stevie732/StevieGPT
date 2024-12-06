import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  res.status(200).send({
    message: 'Hello from StevieGPT',
  })
});

app.post('/', async (req, res) => {
  try {
    const prompt = req.body.prompt;
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(prompt);
    const response = await result.response;

    res.status(200).send({
      bot: response.text()
    })
  } catch (error) {
    console.error(error);
    res.status(500).send(error || 'Something went wrong');
  }
})

app.listen(5000, () => console.log('AI server is running on http://localhost:5000'));
