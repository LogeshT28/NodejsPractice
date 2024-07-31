var dp = require("mysql2");
var connection = dp.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',  // Ensure this is an empty string if there is no password
    database: 'depart'
});

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');

    var query = 'select * from department';
    connection.query(query, function(err, result) {
        if (err) {
            console.error('Error while selecting data from database:', err);
            return;
        }
        console.log(result);
        connection.end();
    });
});
