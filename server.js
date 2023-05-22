const express = require('express');
require('dotenv').config()
const cors = require('cors');
const dashboardRoutes = require('./routes/dashboard')
const app = express();
const PORT = process.env.PORT||5001;

app.use(cors());

app.use('/api/dashboard', dashboardRoutes)


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
