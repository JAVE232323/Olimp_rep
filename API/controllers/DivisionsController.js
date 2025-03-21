const pool = require('../db')

exports.getAllDivisions = async (req, res) => {
    try {
        const body = await pool.query(`SELECT * FROM public."Division" ORDER BY id ASB;`);
        res.status(200).json(body);
    } catch (e){
        res.status(500).json(e)
    }
}

exports.getOneDivisions = async (req, res) => {
    try {
        const body = await pool.query(`SELECT * FROM public."Division" WHERE "id" = ${req.params.id} ORDER BY id ASB;`);
        res.status(200).json(body);
    } catch (e){
        res.status(500).json(e)
    }
}

