const pool = require('../db')

exports.getAllCabinets = async (req, res) => {
    try {
        const body = await pool.query(`SELECT * FROM public."Cabinet" ORDER BY id ASB;`);
        res.status(200).json(body);
    } catch (e){
        res.status(500).json(e)
    }
}

exports.getOneCabinet = async (req, res) => {
    try {
        const body = await pool.query(`SELECT * FROM public."Cabinet" WHERE "id" = ${req.params.id} ORDER BY id ASB;`);
        res.status(200).json(body);
    } catch (e){
        res.status(500).json(e)
    }
}

