var express = require('express');
var router = express.Router();
var pool = require('../../pool');
var folder = 'Business_Development_CRM/BDA'
var table = 'event'


router.post('/insert',(req,res)=>{
	let body = req.body
	console.log(req.body)
  body['bdaid'] = req.session.bda

	pool.query(`insert into event set ?`,body,(err,result)=>{
		if(err) throw err;
		else res.json({
			status:200
		})
	})
})




router.get('/show',(req,res)=>{
	pool.query(`select * from event where bdaid = '${req.session.bda}'`,(err,result)=>{
		err ? console.log(err) : res.json(result)
	})
})



router.get('/show/bdt',(req,res)=>{
    // console.log(re.query)
	pool.query(`select * from event where bdaid = '${req.query.bda}'`,(err,result)=>{
		err ? console.log(err) : res.json(result)
	})
})



router.get('/delete', (req, res) => {
    const { id } = req.query
    pool.query(`delete from event where id = ${id}`, (err, result) => {
        if(err) throw err;
        else res.json(result);
    })
})

router.post('/update', (req, res) => {
    console.log(req.body)
    pool.query(`update event set ? where id = ?`, [req.body, req.body.id], (err, result) => {
        if(err) throw err;
        else res.json(result);
    })
})




// router.get('/enquiry',(req,res)=>{
//     pool.query(`select e.* , 
//     (select p.name from partner p where p.id = e.vendorid) as partnername,
//     (select e.name from event e where e.id = e.eventid) as eventname
//      from enquiry e
//                 where eventid = '${req.query.id}' order by id desc`,(err,result)=>{
//       if(err) throw err;
//       else res.render('show_enquiry',{result:result})
//       // else res.json(result)
//     })
//   })
  


module.exports = router;