var  db = require('mysql2');
var connection =db.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'depart'
}
);


connection.connect(function(err){
        if(err){
            console.error("'Error connecting to the database:', err");
        }
    console.log('Connected to the database');
    var query = 'update department set hod="Srikanth" where deptname ="it"';

    connection.query(query,function(err,result){
        if(err){
            console.error('Error Updateing data into the department table:', err);
            return;
        }
        console.log("Data Updated Succsesfully");

});
});