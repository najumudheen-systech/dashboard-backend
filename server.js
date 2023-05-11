const express = require('express');
require('dotenv').config()
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT||5001;

app.use(cors());

app.get('/api/widget-data', async (req, res) => {
  try {
    const {start_date,end_date,type}=req.query
    const curlResponse = await axios.get(`https://ccu.systech.ae:8786/apiServer/?start_date=${start_date}&end_date=${end_date}&type=${type}`, {
      headers: {
        Authorization: 'fecace70bf6ea0c4',
        sessionID: 'fecace70bf6ea0c4',
      },
    });
    res.json(curlResponse.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
