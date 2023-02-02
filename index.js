import express from "express";
import mysql from "mysql";

const app = express();
const port = 8800;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "book",
});

app.listen(port, () => {
  console.log("Connected to port " + port);
});
