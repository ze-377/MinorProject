var mongoose = require('mongoose')
var Schema = mongoose.Schema

var projects = new Schema({

    projectDept : {
        type : String,
        required : true
    },
     projectName : {
         type : String,

         required : true
     } ,
     projectDetails : {
         type : String ,
         required: true

     },
     projectCode : {
         type : String,
         required : true,
         unique: true
     },
     
})
module.exports=mongoose.model('Projects',projects)