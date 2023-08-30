const express = require('express')
const mysql = require('mysql')

// Create connection
const connection = mysql.createConnection({
    host:'',
    user:'',
    password:'',
    database:''
})

connection.connect((err) => {
    if(err)throw err;
    console.log('Mysql Connected...')
})

module.exports = connection;