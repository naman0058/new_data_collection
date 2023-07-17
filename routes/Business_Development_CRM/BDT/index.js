var express = require('express');
var router = express.Router();
var pool = require('../../pool');
var folder = 'Business_Development_CRM/BDT'
var table = 'bdt'


router.get('/login',(req,res)=>{
    res.render(`${folder}/login`,{msg:''})
  })


  router.post('/verification',(req,res)=>{
    console.log('dshj',req.body)
  pool.query(`select * from bdt where number = '${req.body.number}' and password ='${req.body.password}'`,(err,result)=>{
    if(err) throw err;
    else if(result[0]){
  
           req.session.bdt = result[0].id;
           res.redirect(`/business-development-team/dashboard`)
    }
    else{
      res.render(`${folder}/login`,{msg:'Invalid Credentials'})
    }
  })
  })




  router.get('/dashboard',(req,res)=>{
    if(req.session.bdt){
        var query2 = `select count(id) as counter from enquiry where bdtid = '${req.session.bdt}';`
        var query3 = `select count(id) as counter from enquiry where bdtid = '${req.session.bdt}' and date = CURDATE();`
    
        pool.query(query2+query3,(err,result)=>{
        if(err) throw err;
        else res.render(`${folder}/dashboard`,{result})
      })
    }
    else{
      res.render(`${folder}/login`,{msg:'Invalid Credentials'})  
    }   
  })
  
  


  router.get('/add-enquiry',(req,res)=>{
    if(req.session.bdt){
  
      
          var query = `select count(id) as counter from enquiry where bdtid = '${req.session.bdt}' and date = CURDATE();`
          var query2 = `select count(id) as counter from enquiry where bdtid = '${req.session.bdt}' and date = CURDATE();`
          var query3 = `select * from bdt where id = '${req.session.bdt}';`
          pool.query(query+query2+query3,(err,result)=>{
            if(err) throw err;
            res.render(`${folder}/enquiry`,{msg:'',result,eventname:''})
  
          })
  
        
  
    }
    else{
        res.render(`${folder}/login`,{msg:'Invalid Credentials'})  

  
    }
  })


  router.post('/enquiry-submit',(req,res)=>{
    let body = req.body;
    var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  
  today = yyyy + '-' + mm + '-' + dd;
  
  
    body['date'] = today;
    body['time'] = time;
    body['bdtid'] = req.session.bdt;
  
  
  console.log(req.body)
  
  pool.query(`select * from enquiry where number = '${req.body.number}'`,(err,result)=>{
    if(err) throw err;
    else if(result[0]){
      res.json({msg:'Mobile Number Already Exists'})
    }
    else{
     pool.query(`select * from enquiry where email = '${req.body.email}'`,(err,result)=>{
       if(err) throw err;
       else if(result[0]){
        res.json({msg:'Email ID Already Exists'})
       }
       else {
      pool.query(`select * from enquiry where bdtid = '${req.session.bdt}' and date = CURDATE() limit 1`,(err,result)=>{
     if(err) throw err;
     else if(result[0]){
  
       body['eventid'] = result[0].eventid
  
  
  pool.query(`select * from bdt where id = '${req.session.bdt}'`,(err,result)=>{
    if(err) throw err;
    else {
      body['bdaid']= result[0].bdaid
      pool.query(`insert into enquiry set ?`,body,(err,result)=>{
        if(err) throw err;
        else res.json({msg:'Successfully Submitted'})
        // else res.send('enquiry')
      })
    }
  })
  
      
     }
     else{
      pool.query(`select * from bdt where id = '${req.session.bdt}'`,(err,result)=>{
        if(err) throw err;
        else {
            body['bdaid']= result[0].bdaid

          pool.query(`insert into enquiry set ?`,body,(err,result)=>{
            if(err) throw err;
            else res.json({msg:'Successfully Submitted'})
            // else res.send('enquiry')
          })
        }
      })
      
     }
  
      })
      
       }
     })
    }
  })
  
   
  })
  

  

router.post('/insert',(req,res)=>{
	let body = req.body
	console.log(req.body)
    body['bdaid'] = req.session.bda
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
    req.session.bdt = null;
    res.redirect('/business-development-team/login')
  })



module.exports = router;