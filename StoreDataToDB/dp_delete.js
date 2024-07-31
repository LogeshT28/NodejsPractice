var  db = require('mysql2');
var connection =db.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'depart'
}
);

connection.connect((err)=>{
    if(err){
        console.error("'Error connecting to the database:', err");
    }
    //console.log("Connected to databse");

    var query = 'delete from department where deptname="eee"';
    connection.query(query, (err, result) => {
        if (err) {
          console.error('Error deleting data into the department table:', err);
          return;
        }
        console.log('Data Deleted successfully:', result);
      });
});


