const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

// IP Server FiveM
const serverIp = '49.128.187.94:30120';

// Middleware
app.use(cors());  // Izinkan permintaan dari frontend
app.use(express.json());

// Endpoint untuk mendapatkan semua pemain
app.get('/api/players', async (req, res) => {
    try {
        const response = await axios.get(`http://${serverIp}/players.json`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Gagal mengambil data pemain.' });
    }
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
