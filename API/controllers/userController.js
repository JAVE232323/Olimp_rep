const jwt = require('jsonwebtoken')
const pool = require('../db')

exports.signin = async (req, res) => {
    try{

        const {username, password} = req.body;

        const user = await pool.query(`SELECT id, "Username", "Password"
	                                    FROM public."Users" 
                                        WHERE "Username"='admin' 
                                        ORDER BY id ASC;`)

        if(!user) return res.status(401).json({message: "Пользователь не найден"})

        const Username = user.rows[0].Username
        const Password = user.rows[0].Password

        console.log(Username, Password)

        const token = jwt.sign({
            username: Username, 
            password: Password,
        }, "secret",)
        res.status(200).json({token})
    } catch (e) {
        console.log(e)
        res.status(500).json(e);
    }

    
};