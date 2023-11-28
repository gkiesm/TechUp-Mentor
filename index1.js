import dotenv from 'dotenv';
dotenv.config();

import pg from "pg";

const db = new pg.Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
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