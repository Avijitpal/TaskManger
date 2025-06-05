//In this file then the data format is set
// and also here we are going to set the Schema format

const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title:{
    type:String,
    required:[true,"Task title is required"],
    trim:true
  },
  description:{
    type:String,
    trim:true
  },
  completed:{
    type:Boolean,
    default:false
  }
}
,{
    timestamps:true
})

module.exports = mongoose.model('Task', taskSchema)