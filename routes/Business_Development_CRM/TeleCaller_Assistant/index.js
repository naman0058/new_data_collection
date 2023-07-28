var express = require('express');
var router = express.Router();
var pool = require('../../pool');
var folder = 'Business_Development_CRM/BDA'
var table = 'tellecaller_assistant'


router.get('/login',(req,res)=>{
    res.render(`${folder}/login`,{msg:''})
  })


  router.post('/verification',(req,res)=>{
    console.log('dshj',req.body)
  pool.query(`select * from bda where email = '${req.body.email}' and password ='${req.body.password}'`,(err,result)=>{
    if(err) throw err;
    else if(result[0]){
  
           req.session.bda = result[0].id;
           res.redirect(`/business-development-assistant/dashboard`)
    }
    else{
      res.render(`${folder}/login`,{msg:'Invalid Credentials'})
    }
  })
  })




  router.get('/dashboard',(req,res)=>{
    if(req.session.bda){
        var query1 = `select count(id) as counter from bdt where bdaid = '${req.session.bda}';`
        var query2 = `select count(id) as counter from enquiry where bdaid = '${req.session.bda}';`
        var query3 = `select count(id) as counter from enquiry where bdaid = '${req.session.bda}' and date = CURDATE();`
        var query4 = `select p.* , (select count(id) from enquiry e where e.bdaid = p.id) as counter from bdt p where bdaid = '${req.session.bda}';`
    
        pool.query(query1+query2+query3+query4,(err,result)=>{
        if(err) throw err;
        else res.render(`${folder}/dashboard`,{result})
      })
    }
    else{
      res.render(`${folder}/login`,{msg:'Invalid Credentials'})  
    }   
  })
  
  


  router.get('/add-bdt',(req,res)=>{
    if(req.session.bda){
        res.render(`${folder}/BDT`)
  
    }
    else{
        res.render(`${folder}/login`,{msg:'Invalid Credentials'})  

    }
  })



  router.get('/add-event',(req,res)=>{
    if(req.session.bda){
        res.render(`${folder}/Event`)
  
    }
    else{
        res.render(`${folder}/login`,{msg:'Invalid Credentials'})  

    }
  })




  

router.post('/insert',(req,res)=>{
	let body = req.body
	console.log(req.body)
	pool.query(`insert into ${table} set ?`,body,(err,result)=>{
		if(err) throw err;
		else res.json({
			status:200
		})
	})
})



router.get('/show',(req,res)=>{
	pool.query(`select * from ${table} order by id desc`,(err,result)=>{
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



router.get('/logout',(req,res)=>{
    req.session.bda = null;
    res.redirect(`/business-development-assistant/login`)
  })

  




module.exports = router;