const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'project'
});

app.use(cors());
app.use(express.json());

app.get('/api/student', (req, res) => {
    pool.query("SELECT * FROM student",(err, result) =>{
      if(err){
        console.log(err);
      }else{
        res.send(result);
      }
    });
  });

app.listen(port, () => {
  console.log(`เซิร์ฟเวอร์ทำงานที่ http://localhost:${port}`);
});