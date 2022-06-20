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

let OnProgress = new mongoose.Schema({
  user: {
    type: String
  },
  timeData: {
    project: {
      type: Schema.Types.ObjectId,
      ref: 'Project',
      required: true
    },
    tasks: {
      type: String
    },
    worked: {
      type: String
    },
    currentTimeBegan: {
      type: String
    },
    timeBegan: {
      type: String
    },
    timeStopped: {
      type: String
    },
    stoppedDuration: {
      type: Number
    },
    running: {
      type: Boolean
    },
    time: []
  }
})

let ProjectModel = mongoose.model('Project', Project)
let HoursModel = mongoose.model('Hours', Hours)
let OnProgressModel = mongoose.model('OnProgress', OnProgress)
module.exports = {
  ProjectModel,
  HoursModel,
  OnProgressModel
}