const express = require ('express');
const mongoose = require('mongoose');
const Student = require('./models/student.model.js');
const studentRoute = require('./routes/student.route.js');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/students', studentRoute);


app.get('/', (req, res) => {
    res.send("Hello from ExpressJs");
});


mongoose.connect("mongodb+srv://zubam265:pplIz90RJBl2qtSJ@backenddb.wjd1cpb.mongodb.net/Node-API")
.then(()=> {
    console.log("connected to database!");
    app.listen(3000, () =>{
        console.log("Server is running on port 3000");
    });
})
.catch(()=>{
    console.log("connection failed!");
});