'use strict'
const mysql = require('mysql')

exports.connection = () => {
     return mysql.createConnection({
          host: 'localhost',
          user: 'renato',
          password: '#!/bin/bash',
          database: 'sape'
     })
}