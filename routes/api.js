var express = require('express');
var router = express.Router();
var upload = require('./multer');
var pool = require('./pool')


router.get('/get-top-banner',(req,res)=>{
    pool.query(`select * from brands`,(err,result)=>{
      if(err) throw err;
      else res.json(result)
    })
  })

module.exports = router;