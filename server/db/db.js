const {Pool, Client} = require("pg");

const pool = new Pool({
    user: "postgres",
    password: "",
    host: "localhost",
    port: 5000,
    database: "calendario"
});

pool
  .query('SELECT $1::text as name', ['brianc'])
  .then(res => console.log(res.rows[0].name)) // brianc
  .catch(err => console.error('Error executing query', err.stack));