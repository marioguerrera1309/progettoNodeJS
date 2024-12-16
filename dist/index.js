"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 3000;
// Middleware
app.use((0, cors_1.default)()); // Se hai bisogno di CORS
app.use(express_1.default.json()); // Permette di parsare il corpo delle richieste JSON
// Route per ricevere i dati e salvarli su un file
app.post('/save', (req, res) => {
    const data = req.body;
    // Scrivi i dati su un file chiamato "data.txt"
    fs_1.default.appendFile('data.txt', JSON.stringify(data) + '\n', (err) => {
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
