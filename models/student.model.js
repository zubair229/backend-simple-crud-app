const mongoose = require ('mongoose');

const StduentSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        RollNo:{
            type:Number,
            required:true,
        },
        Class:{
            type:String,
            required:true,
        }
    },
    {
        timestamps:true,
    }
);

const Student = mongoose.model("Student", StduentSchema);
module.exports= Student;