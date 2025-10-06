const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '',
    user: 'db_user',
    password: 'A$-DF_GH123',
    database: 'lol-kek-test-db.sql'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.stack);
        return;
    }
    console.log('Connected to MySQL as id', connection.threadId);
});

// Remember to close the connection when done
// connection.end();