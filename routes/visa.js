var express = require('express');
var router = express.Router();
var upload = require('./multer');
var pool = require('./pool')


var table = 'visa';


router.get('/',(req,res)=>{
    res.render('add-visa')
})



router.post('/insert',upload.single('logo'),(req,res)=>{
	let body = req.body
	body['logo'] = req.file.filename;
	console.log(req.body)
	pool.query(`insert into ${table} set ?`,body,(err,result)=>{
		if(err) throw err;
		else res.json({
			status:200
		})
	})
})


router.get('/show',(req,res)=>{
	pool.query(`select * from ${table}`,(err,result)=>{
		err ? console.log(err) : res.json(result)
	})
})



router.get('/delete', (req, res) => {
    const { id } = req.query
    pool.query(`delete from ${table} where id = ${id}`, (err, result) => {
        if(err) throw err;
        else res.json(result);
    })
})

router.post('/update', (req, res) => {
    console.log(req.body)
    pool.query(`update ${table} set ? where id = ?`, [req.body, req.body.id], (err, result) => {
        if(err) throw err;
        else res.json(result);
    })
})




router.post('/update_image',upload.single('logo'), (req, res) => {
    let body = req.body;

    body['logo'] = req.file.filename

    pool.query(`update ${table} set ? where id = ?`, [req.body, req.body.id], (err, result) => {
        if(err) throw err;
       else  res.redirect('/add-visa')
    })
})












module.exports = router;