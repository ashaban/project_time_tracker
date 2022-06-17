const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Project = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  date: {
    type: Date,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  status: {
    type: String
  }
})

let Hours = new mongoose.Schema({
  time: {
    type: String,
    required: true
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: 'Project',
    required: true
  },
  task: {
    type: String
  },
  date: {
    type: Date,
    required: true
  }
})

let ProjectModel = mongoose.model('Project', Project)
let HoursModel = mongoose.model('Hours', Hours)
module.exports = {
  ProjectModel,
  HoursModel,
}