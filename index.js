import dotenv from 'dotenv';
dotenv.config();

import pg from "pg";

import express from 'express';
const app = express();

import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const port = process.env.PORT || 3000;

const db = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DATABASE_URL,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

db.connect((err)=> {
if (err) {
    console.error('Error connecting to the database', err.stack);
} else { 
    console.log("Connected to database");

let mentorList =[];
db.query(`SELECT * FROM mentors`, (err,res) => {
    if (err) {
        console.error("Error executing query", err.stack);
    } else {
        mentorList = res.rows;
        console.log("Query results:", mentorList);
    }
    
db.end();
});
}
});

app.use(express.static('public'));
app.listen(process.env.PORT); {
    console.log(`Server is running on port ${port}`)
};

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
  });
  
