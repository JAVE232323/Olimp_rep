const pool = require('../db')

exports.getAllPositions = async (req, res) => {
    try {
        const body = await pool.query(`SELECT * FROM public."Positions" ORDER BY id ASB;`);
        res.status(200).json(body);
    } catch (e){
        res.status(500).json(e)
    }
}

exports.getOneDivisions = async (req, res) => {
    try {
        const body = await pool.query(`SELECT * FROM public."Positions" WHERE "id" = ${req.params.id} ORDER BY id ASB;`);
        res.status(200).json(body);
    } catch (e){
        res.status(500).json(e)
    }
}

