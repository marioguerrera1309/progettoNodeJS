import express from 'express';
import fs from 'fs';
import cors from 'cors';

const app = express();
const port = 3000;

// Middleware
app.use(cors());  // Se hai bisogno di CORS
app.use(express.json());  // Permette di parsare il corpo delle richieste JSON

// Route per ricevere i dati e salvarli su un file
app.post('/save', (req, res) => {
  const data = req.body;

  // Scrivi i dati su un file chiamato "data.txt"
  fs.appendFile('data.txt', JSON.stringify(data) + '\n', (err) => {
    if (err) {
      console.error('Errore nella scrittura del file:', err);
      return res.status(500).send('Errore nel salvataggio dei dati.');
    }
    console.log('Dati salvati:', data);
    res.status(200).send('Dati salvati con successo!');
  });
});

// Avvio del server
app.listen(port, () => {
  console.log(`Server in ascolto su http://151.97.157.244:${port}`);
});
