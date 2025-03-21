const express = require('express')
const cors = require('cors')
const PORT = 3000;
const app = express();
const pool = require('./db')
const route = require('./routes/index')

app.use(cors());
app.use(express.json())

app.use('/api', route)

app.listen(PORT, async (req, res) => {

    const body = await pool.query(`SELECT version()`);
    console.log(body);
    console.log(`Server started on http://localhost:${PORT}`)
});