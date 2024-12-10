const express = require("express");
const mysql = require("mysql");
const app = express();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1111",
  database: "node_mysql",
});

connection.connect((err) => {
  if (err) {
    console.error("연결 실패:", err.stack);
    return;
  }
  console.log("연결됨:", connection.threadId);
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("start");
});

app.get("/users", (req, res) => {
  connection.query("SELECT * FROM user", (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
