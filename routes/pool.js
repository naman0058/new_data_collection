
var mysql = require('mysql')
require('dotenv').config()

const pool = mysql.createPool({
  // host:'db-mysql-blr1-08836-do-user-8036869-0.b.db.ondigitalocean.com',
  host : 'localhost',
   user: 'root',
  password:'123',
    database: 'data_collection',
    port:'3306' ,
    multipleStatements: true
  })




  // var mysql = require('mysql')
  // require('dotenv').config()
  
  // const pool = mysql.createPool({
  //   host:'103.117.180.114',
  //   ///host : 'localhost',
  //    user: 'shopsun_shopsun',
  //   password:'Shopsun@321!',
  //     database: 'shopsun_shopsun',
  //     port:'3306' ,
  //     multipleStatements: true
  //   })
  
  
  
  
  // module.exports = pool;

module.exports = pool;