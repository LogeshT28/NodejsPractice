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
    console.log("Connected to databse");
});

var insertdata=(deptid,deptname,deptcount,hod)=>{
    const query = 'INSERT INTO department (deptid, deptname, deptcount, hod) VALUES (?, ?, ?, ?)';
  const values = [deptid, deptname, deptcount, hod];
  //const values = ['dept-1','cse',4,'xxxx'];

  connection.query(query, values, (err, result) => {
    if (err) {
      console.error('Error inserting data into the department table:', err);
      return;
    }
    console.log('Data inserted successfully:', result);
  });
};
//insertdata();
//insertdata('dept-1','cse',4,'xxxx');
// insertdata('dept-2','it',4,'yyy');
insertdata('dept-3','ece',4,'zzzz');
insertdata('dept-4','aids',4,'llll');
insertdata('dept-5','eee',4,'nnnn');


connection.end((err) => {
    if (err) {
      console.error('Error closing the database connection:', err);
      return;
    }
    console.log('Database connection closed.');
  });