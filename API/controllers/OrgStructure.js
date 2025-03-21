const pool = require('../db')

exports.AllEmployees = async (req, res) => {
    try{
        const body = await pool.query(`SELECT * FROM public."Employees" ORDER BY id ASC;`)
        res.status(200).json(body.rows)
    } catch (e){
        res.status(500).json(e)
    }
}
exports.SmartRoads = async (req, res) => {
    try{
        const body = await pool.query(`SELECT * FROM public."Employees" WHERE "idDivision" = 2 ORDER BY id ASC;`)
        res.status(200).json(body.rows)
    } catch (e){
        res.status(500).json(e)
    }
}
exports.AdminDep = async (req, res) => {
    try{
        const body = await pool.query(`SELECT * FROM public."Employees"  WHERE "idDivision" != 2 ORDER BY id ASC;`)
        
        res.status(200).json(body.rows)
    } catch (e){
        res.status(500).json(e)
    }
}
exports.Dogovornoy = async (req, res) => {
    try{
        const body1 = await pool.query(`SELECT * FROM public."Employees" WHERE "idDivision" >= 4 AND "idDivision" < 7 OR "idDivision" = 12 ORDER BY id ASC;`)

        res.status(200).json(body1.rows)
    } catch (e){
        res.status(500).json(e)
    }
}
exports.MiddleDep = async (req, res) => {
    try{
        const body = await pool.query(`SELECT * FROM public."Employees" WHERE "idDivision" >= 8 AND "idDivision" < 12  ORDER BY id ASC;`)
        res.status(200).json(body.rows)
    } catch (e){
        res.status(500).json(e)
    }
}
exports.LisenceDep = async (req, res) => {
    try{
        const body = await pool.query(`SELECT * FROM public."Employees" WHERE "idDivision" = 12 ORDER BY id ASC;`)
        res.status(200).json(body.rows)
    } catch (e){
        res.status(500).json(e)
    }
}
exports.Marketing = async (req, res) => {
    try{
        const body = await pool.query(`SELECT * FROM public."Employees" WHERE "idDivision" >= 10 AND "idDivision" <= 11 ORDER BY id ASC;`)
        res.status(200).json(body.rows)
    } catch (e){
        res.status(500).json(e)
    }
}