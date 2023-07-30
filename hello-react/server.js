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
  pool.query("SELECT * FROM student", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/api/AddStudent", (req, res) => {
  const student_ID = req.body.student_ID;
  const title_ID = req.body.title_ID;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const email = req.body.email;
  const tel = req.body.tel;


  pool.query(
    "INSERT INTO employees (student_ID, title_ID, firstname, lastname, email, tel) VALUES (?,?,?,?,?,?)",
    [student_ID, title_ID, firstname, lastname, email, tel],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.delete("/api/student/:student_ID", (req, res) => {
  const student_ID = req.params.student_ID;

  pool.query(
    "DELETE FROM student WHERE student_ID = ?",
    [student_ID],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send("Error deleting student.");
      } else {
        res.send("Student deleted successfully.");
      }
    }
  );
});

// app.get('/api/title', (req, res) => {
//   pool.query("SELECT * FROM title", (err, result) => {
//     if (error) {
//       res.json({
//         result: false,
//         message: error.message
//       })
//     } else {
//       res.json({
//         result: true,
//         data: results
//       });
//     }
//   });
//   console.log(res.data);
// });

app.get('/api/title', (req, res) => {
  pool.query("SELECT * FROM title", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post('/api/Addtitle', (req, res) => {
  const gettitleDetle = req.body;
  pool.query('INSERT INTO title VALUES (?,?)',
    [
      gettitleDetle.title_ID,
      gettitleDetle.titlename
    ], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    })

});

app.delete("/api/title/:title_ID", (req, res) => {
  const title_ID = req.params.title_ID;

  pool.query(
    "DELETE FROM title WHERE title_ID = ?",
    [title_ID],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send("Error deleting title.");
      } else {
        res.send("Title deleted successfully.");
      }
    }
  );
});



app.listen(port, () => {
  console.log(`เซิร์ฟเวอร์ทำงานที่ http://localhost:${port}`);
});