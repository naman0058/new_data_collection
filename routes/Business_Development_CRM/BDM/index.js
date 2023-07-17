var express = require('express');
var router = express.Router();
var pool = require('../../pool');
var folder = 'Business_Development_CRM/BDM'


router.get('/login',(req,res)=>{
    res.render(`${folder}/login`,{msg:''})
  })


  router.post('/verification',(req,res)=>{
    console.log('dshj',req.body)
  pool.query(`select * from bdm where email = '${req.body.email}' and password ='${req.body.password}'`,(err,result)=>{
    if(err) throw err;
    else if(result[0]){
  
           req.session.bdm = result[0].id;
           res.redirect(`/business-development-manager/dashboard`)
    }
    else{
      res.render(`${folder}/login`,{msg:'Invalid Credentials'})
    }
  })
  })


  router.get('/dashboard',(req,res)=>{
    if(req.session.bdm){
      var query = `select count(id) as counter from bda;`
      var query1 = `select count(id) as counter from bdt;`
      var query2 = `select count(id) as counter from enquiry;`
      var query3 = `select count(id) as counter from enquiry where date = CURDATE();`
  
      pool.query(query+query1+query2+query3,(err,result)=>{
        if(err) throw err;
        else res.render(`${folder}/dashboard`,{result})
      })
    }
    else{
      res.render(`${folder}/login`,{msg:'Invalid Credentials'})

  
    }
    
  })
  
  
  router.get('/add-bda',(req,res)=>{
    if(req.session.bdm){
      res.render(`${folder}/BDA`)
  
    }
    else{
      res.render(`${folder}/login`,{msg:'Invalid Credentials'})
    }
  })
  

  router.get('/all-bda',(req,res)=>{
    pool.query(`select * from bda`,(err,result)=>{
      if(err) throw err;
      else {
      res.render(`${folder}/show-BDA`,{result})
       
  
  
      }
    })
  })
  

  router.get('/report',(req,res)=>{
    if(req.session.bdm){
      res.render(`${folder}/report`)  
    }
    else{
      res.render(`${folder}/login`,{msg:'Invalid Credentials'})

  
    }
  })


  
  router.post('/show-reports',(req,res)=>{
    let body = req.body;
    console.log('dd',req.body)
    if(req.body.adminid == 'all'){
      pool.query(`select e.* , 
      (select p.name from bdt p where p.id = e.bdtid) as partnername,
      (select a.name from bda a where a.id = e.bdaid) as adminname,
      (select ev.name from event ev where ev.id = e.eventid) as eventname
      from enquiry e where e.date between '${req.body.from_date}' and '${req.body.to_date}' order by id desc`,(err,result)=>{
        if(err) throw err;
        else res.json(result);
      })
    }
    else{
      pool.query(`select e.* , 
      (select p.name from bdt p where p.id = e.bdtid) as partnername,
      (select a.name from bda a where a.id = e.bdaid) as adminname,
      (select ev.name from event ev where ev.id = e.eventid) as eventname
      from enquiry e where e.bdaid = '${req.body.adminid}' and e.date between '${req.body.from_date}' and '${req.body.to_date}' order by id desc`,(err,result)=>{
        if(err) throw err;
        else res.json(result);
      })
    }
   
  })



  router.get('/bda/details',(req,res)=>{
    if(req.session.bdm){
      var query1 = `select count(id) as counter from bdt where bdaid = '${req.query.id}';`
      var query2 = `select count(id) as counter from enquiry where bdaid = '${req.query.id}';`
      var query3 = `select count(id) as counter from enquiry where bdaid = '${req.query.id}' and date = CURDATE();`
      var query4 = `select p.* , (select count(id) from enquiry e where e.bdtid = p.id) as counter from bdt p where bdaid = '${req.query.id}';`
  
      pool.query(query1+query2+query3+query4,(err,result)=>{
        if(err) throw err;
        else res.render(`${folder}/BDADetails`,{result})
      })
    }
    else{
      res.render(`${folder}/login`,{msg:'Invalid Credentials'})

  
    }
    
  })



  router.get('/bdt/details',(req,res)=>{


      pool.query(`select e.* , (select p.name from bdt p where p.id = e.bdtid) as partnername,
    (select a.name from bda a where a.id = e.bdaid) as adminname,
  
      (select e.name from event e where e.id = e.eventid) as eventname
      
      from enquiry e
                  where bdtid = '${req.query.id}' order by id desc`,(err,result)=>{
        if(err) throw err;
        else res.render(`${folder}/BDTDeatils`,{result:result})
        // else res.json(result)
      })
 
  })




  router.get('/logout',(req,res)=>{
    req.session.bdm = null;
    res.redirect(`/business-development-manager/login`)
  })

module.exports = router;