'use strict';

var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');

  exports.list_all_tasks = function(req, res) {
    Task.find({}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
  };

  exports.create_a_task = function(req,res) {
    // Validate request
if(!req.body) {
    return res.status(400).send({
        message: "Note content can not be empty"
    });
}

//create a task
const task = new Task(req.body)
task.save((err,task)=>{
    if(err){
        res.send(err)
    }
    res.json(task)
})
  }

exports.read_a_task = function(req,res) {
    Task.findById(req.params.taskId,(err,task)=>{
        if(err) {
            res.send(err)
        }
        res.json(task)
    })
}

exports.update_a_task = function(req,res) {
    Task.findByIdAndUpdate(req.params.taskId,req.body,{new:true},(err,task)=>{
        if(err){
            res.send(err)
        }
        res.json(task)
    })
}

exports.delete_a_task = function(req,res) {
    Task.deleteOne({_id:req.params.taskId},(err,task)=>{
        if(err){
            res.send(err)
        }
        res.json({messge:'Task successfully deleted'})
    })
}
