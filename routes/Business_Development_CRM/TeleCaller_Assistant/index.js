var express = require('express');
var router = express.Router();
var pool = require('../../pool');
var folder = 'Business_Development_CRM/TeleCaller_Assistant'
var table = 'tellecaller_assistant'


router.get('/login',(req,res)=>{
    res.render(`${folder}/login`,{msg:''})
  })


  router.post('/verification',(req,res)=>{
    console.log('dshj',req.body)
  pool.query(`select * from ${table} where email = '${req.body.email}' and password ='${req.body.password}'`,(err,result)=>{
    if(err) throw err;
    else if(result[0]){
  
           req.session.telecaller_assistant = result[0].id;
           res.redirect(`/telecaller-assistant/dashboard`)
    }
    else{
      res.render(`${folder}/login`,{msg:'Invalid Credentials'})
    }
  })
  })




  router.get('/dashboard',(req,res)=>{
    // console.log(req.session.telecaller_assistant)
    if(req.session.telecaller_assistant){
        var query = `select count(id) as counter from telecallers where taid = '${req.session.telecaller_assistant}';`
        var query1 = `select count(id) as counter from calling where taid = '${req.session.telecaller_assistant}';`
        var query2 = `select count(id) as counter from calling where status = 'active' and taid = '${req.session.telecaller_assistant}';`
        var query3 = `select count(id) as counter from calling where status = 'pending' and taid = '${req.session.telecaller_assistant}';`
        var query4 = `select count(id) as counter from calling where status = 'hold' and taid = '${req.session.telecaller_assistant}';`
        var query5 = `select count(id) as counter from calling where status = 'stuck' and taid = '${req.session.telecaller_assistant}';`
        var query6 = `select count(id) as counter from calling where status = 'closed' and taid = '${req.session.telecaller_assistant}';`
        var query7 = `select t.* , (select count(id) from calling e where e.telecallers_id = t.id) as counter from telecallers t where t.taid = '${req.session.telecaller_assistant}';`
        var query8 = `select count(id) as counter from calling where taid = '${req.session.telecaller_assistant}' and date = CURDATE();`
    
        pool.query(query+query1+query2+query3+query4+query5+query6+query7+query8,(err,result)=>{
        if(err) throw err;
        // else res.json(result)
        else res.render(`${folder}/dashboard`,{result})
      })
    }
    else{
      res.render(`${folder}/login`,{msg:'Invalid Credentials'})  
    }   
  })
  
  


  router.get('/add-telecaller',(req,res)=>{
    if(req.session.telecaller_assistant){
        res.render(`${folder}/telecaller`)
  
    }
    else{
        res.render(`${folder}/login`,{msg:'Invalid Credentials'})  

    }
  })



  router.get('/add-event',(req,res)=>{
    if(req.session.telecaller_assistant){
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
    req.session.telecaller_assistant = null;
    res.redirect(`/telecaller-assistant/login`)
  })

  




module.exports = router;