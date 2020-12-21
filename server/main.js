const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db/db");

app.use(cors());
app.use(express.json());

app.listen(5000, () => {
    console.log("success.");
});