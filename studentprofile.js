const mongoose = require('mongoose');
const studentschema= new mongoose.Schema({
    name:String,
    age: Number,
    subject: String
});
module.exports=mongoose.model('StudentProfile',studentschema);