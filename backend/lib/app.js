require('./init');
const express = require('express')
const winston = require('winston')
const mongoose = require('mongoose')
const formidable = require('formidable')
const async = require('async')
const moment = require('moment')
const cors = require('cors');

const config = require('./config')
const models = require('./models')

const port = config.getConf('server:port')
const mongoUser = config.getConf("DB_USER")
const mongoPasswd = config.getConf("DB_PASSWORD")
const mongoHost = config.getConf("DB_HOST")
const mongoPort = config.getConf("DB_PORT")
const database = config.getConf("DB_NAME")
let mongoURI
if (mongoUser && mongoPasswd) {
  mongoURI = `mongodb://${mongoUser}:${mongoPasswd}@${mongoHost}:${mongoPort}/${database}`;
} else {
  mongoURI = `mongodb://${mongoHost}:${mongoPort}/${database}`;
}
mongoose.connect(mongoURI);
let db = mongoose.connection
db.on("error", console.error.bind(console, "connection error:"))
db.once("open", () => {
  winston.info('DB Connection established')
})
const app = express()

app.use(cors({
  origin: true,
  credentials: true
}));
app.use(express.static(`${__dirname}/../gui`));

app.post('/addProject', (req, res) => {
  winston.info("Adding a project")
  const form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    let Project = new models.ProjectModel({
      name: fields.name,
      date: fields.date,
      code: fields.code
    })
    Project.save((err, data) => {
      if (err) {
        winston.error(err)
        winston.error('Unexpected error occured,please retry')
        res.status(500).send()
      } else {
        winston.info('Project added successfully')
        res.status(200).send()
      }
    })
  })
})

app.get('/getProjects', (req, res) => {
  let id = req.query.id
  winston.info('Getting projects')
  let filter = {}
  if (id) {
    filter = {
      _id: id
    }
  }
  models.ProjectModel.find(filter).lean().exec({}, (err, data) => {
    if (err) {
      winston.error(err);
      res.status(200).send('Unexpected error occured,please retry')
    }
    res.status(200).json(data)
  });
})

app.post('/addTime', (req, res) => {
  winston.info("Adding time worked")
  const form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    let Hours = new models.HoursModel({
      project: fields.project,
      time: fields.time,
      date: fields.date,
    })
    Hours.save((err, data) => {
      if (err) {
        winston.error(err)
        winston.error('Unexpected error occured,please retry')
        res.status(500).send()
      } else {
        winston.info('Time added successfully')
        res.status(200).send()
      }
    })
  })
})

app.post('/updateTime', (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    let id = fields._id
    models.HoursModel.findByIdAndUpdate(id, {
      project: fields.project,
      time: fields.time,
      date: fields.date
    }, (err, data) => {
      if (err) {
        winston.error(err)
        winston.error('Unexpected error occured,please retry')
        res.status(500).send()
      } else {
        winston.info('Time updated successfully')
        res.status(200).send()
      }
    })
  })
})

app.get('/getTime', (req, res) => {
  let startDate = req.query.startDate
  let endDate = req.query.endDate
  let project = req.query.project
  winston.info("Getting time worked")
  let filter = {}
  if (startDate && endDate) {
    filter = {
      "date": {
        "$gte": startDate,
        "$lte": endDate,
      }
    }
  }
  if (project && project != 'undefined') {
    filter.project = project
  }
  models.HoursModel.find(filter).populate('project').lean().exec({}, (err, data) => {
    if (err) {
      winston.error(err);
      res.status(200).send('Unexpected error occured,please retry')
    }
    let totalHours = '0:00'
    let timeSheet = {
      rows: [],
      totalHours: totalHours
    }
    async.each(data, (timeData, nxtTime) => {
      let time = timeData.time.split("-")
      let time1 = time[0]
      let time2 = time[1]
      let ms = moment(time2, "HH:mm").diff(moment(time1, "HH:mm"));
      let d = moment.duration(ms);
      let hours = Math.floor(d.asHours()) + moment.utc(ms).format(":mm");
      totalHours = sumHours([totalHours, hours])
      timeSheet.rows.push({
        _id: timeData._id,
        project: timeData.project.name,
        project_id: timeData.project._id,
        hours: hours,
        timeRange: timeData.time,
        date: moment(timeData.date).format("DD-MM-YYYY")
      })
      return nxtTime()
    }, () => {
      timeSheet.totalHours = totalHours
      res.status(200).json(timeSheet)
    })
  });

  function sumHours(hours) {
    let hour1 = hours[0]
    let hour2 = hours[1]
    let hour1Arr = hour1.split(":")
    let hour2Arr = hour2.split(":")
    let totalHours = parseInt(hour1Arr[0]) + parseInt(hour2Arr[0])
    let totalMins = parseInt(hour1Arr[1]) + parseInt(hour2Arr[1])
    if (totalMins > 59) {
      let hoursInMins = (totalMins / 60).toString()
      let hoursInMinsArr = hoursInMins.split(".")
      totalHours += parseInt(hoursInMinsArr[0])
      totalMins = totalMins - hoursInMinsArr[0] * 60
    }
    if (totalMins.toString().length === 1) {
      totalMins = "0" + totalMins.toString()
    }
    return totalHours + ":" + totalMins
  }
})

app.listen(port, () => {
  winston.info("Server is running and listening on port " + port)
})