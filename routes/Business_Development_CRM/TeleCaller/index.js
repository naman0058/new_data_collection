var express = require('express');
var router = express.Router();
var pool = require('../../pool');
var folder = 'Business_Development_CRM/TeleCaller'
var table = 'telecallers'


router.get('/login',(req,res)=>{
    res.render(`${folder}/login`,{msg:''})
  })


  router.post('/verification',(req,res)=>{
    console.log('dshj',req.body)
  pool.query(`select * from ${table} where number = '${req.body.number}' and password ='${req.body.password}'`,(err,result)=>{
    if(err) throw err;
    else if(result[0]){
  
           req.session.telecaller = result[0].id;
           res.redirect(`/TeleCaller/dashboard`)
    }
    else{
      res.render(`${folder}/login`,{msg:'Invalid Credentials'})
    }
  })
  })




  router.get('/dashboard',(req,res)=>{
    if(req.session.telecaller){
        var query = `select count(id) as counter from calling where telecallers_id = '${req.session.telecaller}';`
        var query1 = `select count(id) as counter from calling where telecallers_id = '${req.session.telecaller}' and date = CURDATE();`
        var query2 = `select count(id) as counter from calling where status = 'active' and telecallers_id = '${req.session.telecaller}';`
        var query3 = `select count(id) as counter from calling where status = 'pending' and telecallers_id = '${req.session.telecaller}';`
        var query4 = `select count(id) as counter from calling where status = 'hold' and telecallers_id = '${req.session.telecaller}';`
        var query5 = `select count(id) as counter from calling where status = 'stuck' and telecallers_id = '${req.session.telecaller}';`
        var query6 = `select count(id) as counter from calling where status = 'closed' and telecallers_id = '${req.session.telecaller}';`
        var query7 = `select count(id) as counter from calling where status is null and telecallers_id = '${req.session.telecaller}';`

    
        pool.query(query+query1+query2+query3+query4+query5+query6+query7,(err,result)=>{
        if(err) throw err;
        else res.render(`${folder}/dashboard`,{result})
      })
    }
    else{
      res.render(`${folder}/login`,{msg:'Invalid Credentials'})  
    }   
  })
  
  


  router.get('/add-enquiry',(req,res)=>{
    if(req.session.telecaller){
  
      
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
    body['taid'] = req.session.telecaller_assistant
	pool.query(`insert into ${table} set ?`,body,(err,result)=>{
		if(err) throw err;
		else res.json({
			status:200
		})
	})
})



router.get('/show',(req,res)=>{
	pool.query(`select * from ${table} where taid = '${req.session.telecaller_assistant}' order by id desc `,(err,result)=>{
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




router.get('/enquiry/:name',(req,res)=>{
  if(req.params.name == 'new'){
pool.query(`select c.*, 
(select e.name from enquiry e where e.id = c.enquiryid) as enquiryname,
(select e.number from enquiry e where e.id = c.enquiryid) as enquirynumber,
(select e.nationality from enquiry e where e.id = c.enquiryid) as enquirynationality
 from calling c where c.status is null and c.telecallers_id = '${req.session.telecaller}' order by id desc`,(err,result)=>{
  if(err) throw err;
  else res.render(`${folder}/show_enquiry`,{result,type:req.params.name})
 })
  }
  else{
    pool.query(`select c.*, 
    (select e.name from enquiry e where e.id = c.enquiryid) as enquiryname,
    (select e.number from enquiry e where e.id = c.enquiryid) as enquirynumber,
    (select e.nationality from enquiry e where e.id = c.enquiryid) as enquirynationality
     from calling c where c.status = '${req.params.name}' and c.telecallers_id = '${req.session.telecaller}' order by id desc`,(err,result)=>{
      if(err) throw err;
      else res.render(`${folder}/show_enquiry`,{result,type:req.params.name})
     })
  }
})



router.get('/update/details',(req,res)=>{
  pool.query(`select * from calling where id = '${req.query.id}' and telecallers_id = '${req.session.telecaller}'`,(err,result)=>{
    if(err) throw err;
    else if(result[0]){
    res.render(`${folder}/update_enquiry`,{result})
    }
    else{
     res.redirect('/telecaller/dashboard')
    }
  })
})


router.post('/calling/update',(req,res)=>{
  let body = req.body;
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  
  today = yyyy + '-' + mm + '-' + dd;

console.log(body)

  pool.query(`update calling set status = '${req.body.status}' , feedback = '${req.body.feedback}' , updated_date = '${today}' where id = '${req.body.id}'`,(err,result)=>{
    if(err) throw err;
    else res.json({msg:'success'})
  })
})

  
router.get('/logout',(req,res)=>{
    req.session.telecaller = null;
    res.redirect('/telecaller/login')
  })



module.exports = router;