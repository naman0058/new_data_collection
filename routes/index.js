var express = require('express');
var router = express.Router();
var pool = require('./pool')


/* GET home page. */
router.get('/', function(req, res, next) {
  var query = `select * from country;`
  var query1 = `select * from state;`
  var query2 = `select t.* , (select c.name from country c where c.id = t.countryid) as countryname from tour t order by id desc;`
  var query3 = `select * from banner_image;`
  pool.query(query+query1+query2+query3,(err,result)=>{
    if(err) throw err;
    else res.render('index', { title: 'Express',result });
  })
  
});

router.get('/admin/login',(req,res)=>{
  res.render('admin-login',{msg:''})
})


router.get('/master/login',(req,res)=>{
  res.render('master-login',{msg:''})
})



router.get('/visa',(req,res)=>{
  pool.query(`select * from visa`,(err,result)=>{
    if(err) throw err;
    else res.render('visa',{msg:'',result})
  })
  
})


router.get('/migrate',(req,res)=>{
  var query = `select * from immigration_country;`
  var query1 = `select * from immigration_subcategory;`
  pool.query(query+query1,(err,result)=>{
    if(err) throw err;
    else res.render('migrate',{msg:'',result})
  })
  
})




router.get('/immigration/:countryname/:1',(req,res)=>{
  console.log(req.params)
 pool.query(`select id from immigration_country where name = '${req.params.countryname}'`,(err,result)=>{
   if(err) throw err;
   else {
     // res.send(result[0])
     let countryid = result[0].id;
    
     pool.query(`select * from immigration_subcategory where id = '1'`,(err,result)=>{
       if(err) throw err;
       else {
       
         let stateid = result[0].id;
         console.log(stateid)
          res.render('migrationdata',{countryid,stateid,msg:'',name:req.params.countryname})
 
 
       }
     })
   }
 })
 
 
 })
 
 
 router.post('/immigration-details',(req,res)=>{
   console.log(req.body)
 pool.query(`select * from immigration_content where countryid = '${req.body.countryid}' and stateid = '${req.body.stateid}' `,(err,result)=>{
   if(err) throw err;
    else res.json(result)
   // else res.render('migrationdata',{result:result})
 })
 })
 
 
 router.get('/get/visa/:name',(req,res)=>{
   pool.query(`select * from visa where name = '${req.params.name}'`,(err,result)=>{
     if(err) throw err;
     else res.render('visadata',{name:req.params.name,result,msg:''})
   })
  
 })
 


 router.post('/get-visa/:name/apply',(req,res)=>{
   let body = req.body;


   var today = new Date();
   var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
   
   var dd = String(today.getDate()).padStart(2, '0');
   var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
   var yyyy = today.getFullYear();
   
   today = yyyy + '-' + mm + '-' + dd;
   
   
     body['date'] = today;
     body['time'] = time;

   pool.query(`insert into contact_us set ?`,body,(err,result)=>{
     if(err) throw err;
     else {
      pool.query(`select * from visa where name = '${req.params.name}'`,(err,result)=>{
        if(err) throw err;
        else res.render('visadata',{name:req.params.name,result,msg:'Successfully submitted...'})
      })
     
     }
   })
 })
 
 
 router.post('/visa-details',(req,res)=>{
   console.log(req.body)
 pool.query(`select * from visa where name = '${req.body.name}' `,(err,result)=>{
   if(err) throw err;
    else res.json(result)
   // else res.render('migrationdata',{result:result})
 })
 })
 




router.post('/admin/login/verification',(req,res)=>{
  console.log('dshj',req.body)
pool.query(`select * from admin where email = '${req.body.email}' and password ='${req.body.password}'`,(err,result)=>{
  if(err) throw err;
  else if(result[0]){

         req.session.propertyadmin = result[0].id;
         res.redirect('/admin')
  }
  else{
    res.render('admin-login',{msg:'Invalid Credentials'})
  }
})
})




router.post('/master/login/verification',(req,res)=>{
  console.log('dshj',req.body)
pool.query(`select * from master_admin where email = '${req.body.email}' and password ='${req.body.password}'`,(err,result)=>{
  if(err) throw err;
  else if(result[0]){

         req.session.masteradmin = result[0].id;
         res.redirect('/masteradmin')
  }
  else{
    res.render('master-login',{msg:'Invalid Credentials'})
  }
})
})



router.get('/logout',(req,res)=>{
  req.session.propertyadmin = null;
  res.redirect('/admin/login')
})


router.get('/master-logout',(req,res)=>{
  req.session.masteradmin = null;
  res.redirect('/master/login')
})


router.get('/admin',(req,res)=>{
  if(req.session.propertyadmin){
    var query1 = `select count(id) as counter from partner where adminid = '${req.session.propertyadmin}';`
    var query2 = `select count(id) as counter from enquiry where adminid = '${req.session.propertyadmin}';`
    var query3 = `select count(id) as counter from enquiry where adminid = '${req.session.propertyadmin}' and date = 'CURDATE()';`
    var query4 = `select p.* , (select count(id) from enquiry e where e.vendorid = p.id) as counter from partner p where adminid = '${req.session.propertyadmin}';`

    pool.query(query1+query2+query3+query4,(err,result)=>{
      if(err) throw err;
      else res.render('admin',{result})
    })
  }
  else{
    res.render('admin-login',{msg:'Invalid Credentials'})

  }
  
})




router.get('/masteradmin',(req,res)=>{
  if(req.session.masteradmin){
    var query = `select count(id) as counter from admin;`
    var query1 = `select count(id) as counter from partner;`
    var query2 = `select count(id) as counter from enquiry;`
    var query3 = `select count(id) as counter from enquiry where date = 'CURDATE()';`

    pool.query(query+query1+query2+query3,(err,result)=>{
      if(err) throw err;
      else res.render('master',{result})
    })
  }
  else{
    res.render('master-login',{msg:'Invalid Credentials'})

  }
  
})



router.get('/event/delete',(req,res)=>{
  pool.query(`delete from enquiry where id = '${req.query.id}'`,(err,result)=>{
    if(err) throw err;
    else res.redirect('/admin');
  })
})




router.get('/partner',(req,res)=>{
  if(req.session.propertyadmin){
    res.render('partner')

  }
  else{
    res.render('admin-login',{msg:'Invalid Credentials'})
  }
})


router.get('/add-event',(req,res)=>{
  if(req.session.propertyadmin){
    res.render('event')

  }
  else{
    res.render('admin-login',{msg:'Invalid Credentials'})
  }
})



router.post('/partner/insert',(req,res)=>{
	let body = req.body
	// console.log(req.body)
  body['adminid'] = req.session.propertyadmin
  console.log(req.body)
	pool.query(`insert into partner set ?`,body,(err,result)=>{
		if(err) throw err;
		else res.json({
			status:200
		})
	})
})



router.get('/partner/show',(req,res)=>{
	pool.query(`select * from partner where adminid = '${req.session.propertyadmin}'`,(err,result)=>{
		err ? console.log(err) : res.json(result)
	})
})



router.get('/partner/delete', (req, res) => {
    const { id } = req.query
    pool.query(`delete from partner where id = ${id}`, (err, result) => {
        if(err) throw err;
        else res.json(result);
    })
})

router.post('/partner/update', (req, res) => {
    console.log(req.body)
    pool.query(`update partner set ? where id = ?`, [req.body, req.body.id], (err, result) => {
        if(err) throw err;
        else res.json(result);
    })
})




router.get('/all-enquiry',(req,res)=>{

      if(req.session.propertyadmin){
        pool.query(`select e.* , 
  (select p.name from partner p where p.id = e.vendorid) as partnername,
  (select a.name from bda a where a.id = e.adminid) as adminname,
  (select e.name from event e where e.id = e.eventid) as eventname
  
  from enquiry e where e.adminid  = '${req.session.propertyadmin}' order by id desc`,(err,result)=>{
    if(err) throw err;
    else {
        res.render('show_enquiry',{result:result})

      }
    })
    }
      else{

        pool.query(`select e.* , 
  (select p.name from partner p where p.id = e.vendorid) as partnername,
  (select a.name from admin a where a.id = e.adminid) as adminname,
  (select e.name from event e where e.id = e.eventid) as eventname
  
  from enquiry e order by id desc`,(err,result)=>{
    if(err) throw err;
    else {
        res.render('showmasterenquiry',{result:result})
    }
  })
      }

})

// /partner-enquiry


router.get('/partner-enquiry',(req,res)=>{


  if(req.session.propertyadmin){
    pool.query(`select e.* , (select p.name from partner p where p.id = e.vendorid) as partnername,
  (select a.name from admin a where a.id = e.adminid) as adminname,
    (select e.name from event e where e.id = e.eventid) as eventname
    
    from enquiry e
                where vendorid = '${req.query.id}' order by id desc`,(err,result)=>{
      if(err) throw err;
      else res.render('show_enquiry',{result:result})
      // else res.json(result)
    })
  }
  else{
    pool.query(`select e.* , (select p.name from partner p where p.id = e.vendorid) as partnername,
  (select a.name from admin a where a.id = e.adminid) as adminname,

    (select e.name from event e where e.id = e.eventid) as eventname
    
    from enquiry e
                where vendorid = '${req.query.id}' order by id desc`,(err,result)=>{
      if(err) throw err;
      else res.render('showmasterenquiry',{result:result})
      // else res.json(result)
    })
  }

  
})


// router.get('/all-enquiry',(re,res)=>{
//   pool.query(`select e.* , (select p.name from partner p where p.id = e.vendorid) as partnername from enquiry e order by id desc`,(err,result)=>{
//     if(err) throw err;
//     else res.render('show_enquiry',{result:result})
//   })
// })





router.get('/partner/login',(req,res)=>{
  res.render('partner-login',{msg:''})
})



router.post('/partner/login/verification',(req,res)=>{
  console.log('dshj',req.body)
pool.query(`select * from partner where number = '${req.body.number}' and password ='${req.body.password}'`,(err,result)=>{
  if(err) throw err;
  else if(result[0]){

         req.session.partner = result[0].id;
         res.redirect('/enquiry')
  }
  else{
    res.render('partner-login',{msg:'Invalid Credentials'})
  }
})
})




router.get('/enquiry',(req,res)=>{
  console.log(req.session.partner)
  if(req.session.partner){

    
        var query = `select count(id) as counter from enquiry where vendorid = '${req.session.partner}' and date = CURDATE();`
        var query2 = `select count(id) as counter from enquiry where vendorid = '${req.session.partner}' and date = CURDATE();`
        pool.query(query+query2,(err,result)=>{
          if(err) throw err;
          res.render('enquiry',{msg:'',result,eventname:''})

        })

      

  }
  else{
    res.render('partner-login',{msg:'Invalid Credentials'})

  }
})








router.get('/report',(req,res)=>{
  if(req.session.propertyadmin){
    res.render('report')

  }
  else{
    res.render('admin-login',{msg:'Invalid Credentials'})
  }
})


router.post('/show-reports',(req,res)=>{
  let body = req.body;
  console.log('dd',req.body)
  pool.query(`select e.* , (select p.name from partner p where p.id = e.vendorid) as partnername,
  (select a.name from admin a where a.id = e.adminid) as adminname,
  (select e.name from event e where e.id = e.eventid) as eventname
  
  from enquiry e where e.adminid = '${req.session.propertyadmin}' and e.date between '${req.body.from_date}' and '${req.body.to_date}' order by id desc`,(err,result)=>{
    if(err) throw err;
    else res.json(result)
  })
})







router.get('/event-enquiry',(req,res)=>{
  pool.query(`select e.* , 
  (select p.name from partner p where p.id = e.vendorid) as partnername,
  (select e.name from event e where e.id = e.eventid) as eventname
   from enquiry e
              where eventid = '${req.query.id}' order by id desc`,(err,result)=>{
    if(err) throw err;
    else res.render('show_enquiry',{result:result})
    // else res.json(result)
  })
})




router.get('/about',(req,res)=>{
  res.render('about')
})


router.get('/faq',(req,res)=>{
  res.render('faq')
})


router.get('/contact',(req,res)=>{
  res.render('contact')
})



router.post('/subscription-details-insert',(req,res)=>{
  let body = req.body;
  console.log(req.body)
  pool.query(`insert into subscription set ?`,body,(err,result)=>{
    if(err) throw err;
    else res.json({msg:'success'})
  })
})


router.get('/tour-search',(req,res)=>{
  console.log(req.body)
  pool.query(`select * from state where countryid = '${req.query.id}'`,(err,result)=>{
    if(err) throw err;
    // else res.json(result)
    else res.render('state_show',{result})
  })
})


router.get('/details/:name/tour-search',(req,res)=>{
  pool.query(`select t.* , (select c.name from country c where c.id = t.countryid) as countryname from tour t where t.stateid = '${req.params.name}'`,(err,result)=>{
    if(err) throw err;
    else res.render('tour_show',{result})
  })
})



router.post('/migrationdata/insert',(req,res)=>{

  let body = req.body;
  var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;


  body['date'] = today;
  body['time'] = time;
  pool.query(`insert into migration_apply set ?`,body,(err,result)=>{
    if(err) throw err;
    else res.json({msg:'success'})
  })
})




router.get('/all-immigration',(req,res)=>{
  pool.query(`select e.* from migration_apply e order by id desc`,(err,result)=>{
    if(err) throw err;
    else res.render('show_migration',{result:result})
  })
})



router.get('/all-contact',(req,res)=>{
  pool.query(`select e.* from contact_us e order by id desc`,(err,result)=>{
    if(err) throw err;
    else res.render('show_contact',{result:result})
  })
})



router.get('/migration/delete',(req,res)=>{
  pool.query(`delete from migration_apply where id = '${req.query.id}'`,(err,result)=>{
    if(err) throw err;
    else res.redirect('/all-immigration');
  })
})



router.get('/contact/delete',(req,res)=>{
  pool.query(`delete from contact_us where id = '${req.query.id}'`,(err,result)=>{
    if(err) throw err;
    else res.redirect('/all-contact');
  })
})










router.get('/sub-admin',(req,res)=>{
  if(req.session.masteradmin){
    res.render('sub-admin')

  }
  else{
    res.render('admin-login',{msg:'Invalid Credentials'})
  }
})









router.post('/admin/insert',(req,res)=>{
	let body = req.body
	console.log(req.body)
	pool.query(`insert into admin set ?`,body,(err,result)=>{
		if(err) throw err;
		else res.json({
			status:200
		})
	})
})



router.get('/admin/show',(req,res)=>{
	pool.query(`select * from admin`,(err,result)=>{
		err ? console.log(err) : res.json(result)
	})
})



router.get('/admin/delete', (req, res) => {
    const { id } = req.query
    pool.query(`delete from admin where id = ${id}`, (err, result) => {
        if(err) throw err;
        else res.json(result);
    })
})

router.post('/admin/update', (req, res) => {
    console.log(req.body)
    pool.query(`update admin set ? where id = ?`, [req.body, req.body.id], (err, result) => {
        if(err) throw err;
        else res.json(result);
    })
})



router.get('/admin-enquiry',(req,res)=>{
  pool.query(`select e.* , (select p.name from partner p where p.id = e.vendorid) as partnername,
  (select a.name from admin a where a.id = e.adminid) as adminname,

  (select e.name from event e where e.id = e.eventid) as eventname
  
  from enquiry e
              where adminid = '${req.query.id}' order by id desc`,(err,result)=>{
    if(err) throw err;

   
      if(req.session.propertyadmin){
        res.render('show_enquiry',{result:result})

      }
      else{
        res.render('showmasterenquiry',{result:result})

      }
  })
})





router.get('/master-report',(req,res)=>{
  if(req.session.masteradmin){
    res.render('masterreport')

  }
  else{
    res.render('master-login',{msg:'Invalid Credentials'})

  }
})



router.post('/show-master-reports',(req,res)=>{
  let body = req.body;
  console.log('dd',req.body)

if(req.body.adminid == 'all'){

  pool.query(`select e.* , (select p.name from partner p where p.id = e.vendorid) as partnername,
  (select a.name from admin a where a.id = e.adminid) as adminname,
  (select e.name from event e where e.id = e.eventid) as eventname
  
  from enquiry e where e.date between '${req.body.from_date}' and '${req.body.to_date}' order by id desc`,(err,result)=>{
    if(err) throw err;
    else res.json(result)
  })
}
else{

  pool.query(`select e.* , (select p.name from partner p where p.id = e.vendorid) as partnername,
  (select a.name from admin a where a.id = e.adminid) as adminname,
  (select e.name from event e where e.id = e.eventid) as eventname
  
  from enquiry e where e.adminid = '${req.body.adminid}' and e.date between '${req.body.from_date}' and '${req.body.to_date}' order by id desc`,(err,result)=>{
    if(err) throw err;
    else res.json(result)
  })
}

})



router.get('/master-dashboard',(req,res)=>{
  if(req.session.propertyadmin){
    pool.query(`select e.* , (select p.name from partner p where p.id = e.vendorid) as partnername,
  (select e.name from event e where e.id = e.eventid) as eventname
    
    from enquiry e order by id desc limit 20`,(err,result)=>{
      if(err) throw err;
      else res.render('admin',{result})
    })
  }
  else{
    res.render('admin-login',{msg:'Invalid Credentials'})

  }
  
})




router.get('/all-subadmin',(req,res)=>{
  pool.query(`select * from bda`,(err,result)=>{
    if(err) throw err;
    else {
     
        res.render('show-admin',{result:result})


    }
  })
})













router.get('/admin/details',(req,res)=>{
  if(req.session.masteradmin){
    var query1 = `select count(id) as counter from partner where adminid = '${req.query.id}';`
    var query2 = `select count(id) as counter from enquiry where adminid = '${req.query.id}';`
    var query3 = `select count(id) as counter from enquiry where adminid = '${req.query.id}' and date = 'CURDATE()';`
    var query4 = `select p.* , (select count(id) from enquiry e where e.vendorid = p.id) as counter from partner p where adminid = '${req.query.id}';`

    pool.query(query1+query2+query3+query4,(err,result)=>{
      if(err) throw err;
      else res.render('admin-details',{result})
    })
  }
  else{
    res.render('master-login',{msg:'Invalid Credentials'})

  }
  
})







module.exports = router;
