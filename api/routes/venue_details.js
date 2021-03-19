const mysqlConnection = require('../config/db_connect')
const router = require('express').Router();

router.get('/active', (req, res, next) => {

    let sql = "SELECT DISTINCT  `duty_place`  FROM `pass_gen_tbl`";
    
    mysqlConnection.query(sql, async(error, rows, filed) => {
        res.json(rows)
    })
})


module.exports = router;