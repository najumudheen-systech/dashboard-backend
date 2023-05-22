const axios = require('axios');

async function fetchData(req, res) {
  try {
    const { start_date, end_date, type } = req.query;
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
}

module.exports = {
  getWidgetData: async (req, res) => {
    await fetchData(req, res);
  },
  getIvrData: async (req, res) => {
    await fetchData(req, res);
  },
  getCallInfoData: async (req, res) => {
    await fetchData(req, res);
  },
  getQueueData: async (req, res) => {
    await fetchData(req, res);
  },
  getCallDispoData: async (req, res) => {
    await fetchData(req, res);
  },
  getCallRatioData: async (req, res) => {
    await fetchData(req, res);
  },
  getLangData: async (req, res) => {
    await fetchData(req, res);
  },
};
