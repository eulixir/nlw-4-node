import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Heloo nlw4' });
});

app.post('/', (request, response) => {
  return response.json({ message: 'Os dados foram gravados com sucesso' });
});

app.listen(3333, () => console.log('Server is running ✅'));
