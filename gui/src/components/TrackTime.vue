<template>
  <v-container>
    <v-layout row wrap>
      <v-spacer />
      <v-flex xs12>
        <v-alert
          style="width: 500px"
          v-model="alertSuccess"
          type="success"
          dismissible
          transition="scale-transition"
        >
          {{ alertMsg }}
        </v-alert>
        <v-alert
          style="width: 500px"
          v-model="alertFail"
          type="error"
          dismissible
          transition="scale-transition"
        >
          {{ alertMsg }}
        </v-alert>
        <v-card class="mx-auto" style="max-width: 1000px;">
          <v-system-bar color="grey darken-2" dark />
          <v-toolbar color="grey darken-1" cards dark flat>
            <v-card-title
              v-if="!running && !timeData.timeBegan"
              class="title font-weight-regular"
              >Select Project First Then Click Start To Begin
              Working</v-card-title
            >
            <v-card-title v-else-if="!running" class="title font-weight-regular"
              >Save or Resume Your Paused Tracked Work</v-card-title
            >
            <v-card-title v-if="running" class="title font-weight-regular"
              >Your work Is Being Tracked</v-card-title
            >
          </v-toolbar>
          <v-form ref="form" class="pa-3 pt-4">
            <v-layout column>
              <v-flex>
                <v-autocomplete
                  required
                  :items="projects"
                  v-model="project"
                  item-text="name"
                  item-value="_id"
                  single-line
                  clearable
                  @blur="$v.project.$touch()"
                  @change="projectSelected"
                  :error-messages="projectErrors"
                  box
                  label="Project*"
                ></v-autocomplete>
              </v-flex>
              <v-layout row wrap>
                <v-flex xs2> </v-flex>
                <v-flex xs10>
                  <!-- timer -->
                  <v-layout row wrap>
                    <v-flex>
                      <v-avatar size="100" color="green">
                        <b>
                          Start Time<br />
                          <template v-if="timeData.time.length > 0">
                            {{ timeData.time[0].start }}
                          </template>
                        </b>
                      </v-avatar>
                    </v-flex>
                    <v-flex>
                      <v-avatar size="100" color="red"
                        ><b>
                          End Time<br />
                          <template v-if="timeData.time.length > 0">
                            {{ timeData.time[timeData.time.length - 1].end }}
                          </template>
                        </b>
                      </v-avatar>
                    </v-flex>
                  </v-layout>
                  <br />
                  <span class="time">{{ time }}</span>

                  <div class="btn-container" v-if="ready">
                    <a
                      v-if="!running && !timeData.timeBegan"
                      id="start"
                      @click="start()"
                      >Start</a
                    >
                    <a v-else-if="!running" id="start" @click="start()"
                      >Resume</a
                    >
                    <a v-if="running" id="stop" @click="stop()">Pause</a>
                    <a
                      v-if="running || (!running && timeData.timeBegan)"
                      id="reset"
                      @click="saveTime"
                      >Finish Work</a
                    >
                    <a
                      v-if="timeData.timeBegan"
                      id="reset"
                      @click="reset()"
                      color="red"
                      >Reset</a
                    >
                  </div>
                </v-flex>
              </v-layout>
              <v-flex>
                <template v-if="timeData.time.length > 0">
                  Time Laps
                </template>
                <v-layout row wrap>
                  <template v-for="(tm, index) in timeData.time">
                    <v-flex xs3 :key="index">
                      <v-card color="grey" dark>
                        <v-card-title primary-title>
                          <b>{{ tm.date }}</b>
                        </v-card-title>
                        <v-card-text>
                          {{ tm.start }} - {{ tm.end }}
                        </v-card-text>
                      </v-card>
                    </v-flex>
                  </template>
                </v-layout>
              </v-flex>
              <v-flex>
                <v-textarea
                  label="What are you working on"
                  box
                  v-model="task"
                  hint="Tasks"
                  @input="tasksAdded"
                ></v-textarea>
              </v-flex>
            </v-layout>
          </v-form>
          <v-divider />
          <v-card-actions>
            <v-btn
              @click="saveTime"
              :disabled="$v.$invalid"
              class="white--text"
              color="deep-purple accent-4"
              depressed
            >
              <v-icon left>how_to_reg</v-icon>Finish
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-spacer />
    </v-layout>
  </v-container>
</template>
<script>
import axios from "axios";
import { generalMixin } from "@/components/generalMixin";
import { required } from "vuelidate/lib/validators";
const backendServer = process.env.VUE_APP_BACKEND_SERVER;

export default {
  mixins: [generalMixin],
  validations: {
    project: { required }
  },
  data() {
    return {
      dateMenu: false,
      date: new Date().toISOString().substr(0, 10),
      project: "",
      task: "",
      alertFail: false,
      alertSuccess: false,
      alertMsg: "",
      timeInputs: [0],

      time: "00:00:00.000",
      timeStarted: "",
      timeBegan: null,
      currentTimeBegan: null,
      timeStopped: null,
      stoppedDuration: 0,
      started: null,
      running: false,
      timeData: {
        project: "",
        tasks: "",
        worked: "",
        timeBegan: null,
        currentTimeBegan: null,
        timeStopped: null,
        stoppedDuration: 0,
        running: false,
        time: []
      }
    };
  },
  methods: {
    projectSelected() {
      this.$v.project.$touch();
      this.timeData.project = this.project;
      this.updateProgress();
    },
    tasksAdded() {
      this.timeData.tasks = this.task;
      //need to call this.updateProgress()
    },
    resumeTimer() {
      this.timeBegan = new Date(this.timeData.timeBegan);
      this.currentTimeBegan = new Date(this.timeData.currentTimeBegan);
      this.timeStopped = new Date(this.timeData.timeStopped);
      this.stoppedDuration = this.timeData.stoppedDuration;
      this.time = this.timeData.worked;
      this.project = this.timeData.project;
      this.task = this.timeData.tasks;
      this.running = this.timeData.running;
      if (this.running) {
        this.started = setInterval(this.clockRunning, 10);
      }
    },
    start() {
      if (this.running) return;

      if (this.timeBegan === null) {
        this.timeBegan = new Date();
        this.timeData.timeBegan = new Date(this.timeBegan);
        this.timeData.currentTimeBegan = new Date(this.timeBegan);
        this.currentTimeBegan = new Date(this.timeBegan);
      } else {
        this.currentTimeBegan = new Date();
        this.timeData.currentTimeBegan = new Date(this.currentTimeBegan);
      }

      if (this.timeStopped !== null) {
        this.stoppedDuration += new Date() - this.timeStopped;
        this.timeData.stoppedDuration = this.stoppedDuration;
      }

      this.started = setInterval(this.clockRunning, 10);
      this.timeData.time.push({
        date: this.currentDate,
        start: this.formattedStartedTime,
        end: ""
      });
      this.running = true;
      this.timeData.running = this.running;
      this.updateProgress();
    },

    stop() {
      if (!this.running) {
        return;
      }
      this.running = false;
      this.timeData.running = this.running;
      this.timeStopped = new Date();
      this.timeData.timeStopped = new Date(this.timeStopped);
      clearInterval(this.started);
      for (let index in this.timeData.time) {
        if (this.timeData.time[index].start === this.formattedStartedTime) {
          this.timeData.time[index].end = this.formattedEndTime;
        }
      }
      this.updateProgress();
    },

    reset() {
      this.running = false;
      clearInterval(this.started);
      this.stoppedDuration = 0;
      this.timeBegan = null;
      this.timeStopped = null;
      this.time = "00:00:00.000";
      this.project = "";
      this.task = "";

      this.timeData.project = "";
      this.timeData.tasks = "";
      this.timeData.worked = "";
      this.timeData.timeBegan = null;
      this.timeData.stoppedDuration = 0;
      this.timeData.time = [];
      this.deleteProgress();
    },

    clockRunning() {
      var currentTime = new Date(),
        timeElapsed = new Date(
          currentTime - this.timeBegan - this.stoppedDuration
        ),
        hour = timeElapsed.getUTCHours(),
        min = timeElapsed.getUTCMinutes(),
        sec = timeElapsed.getUTCSeconds(),
        ms = timeElapsed.getUTCMilliseconds();
      this.time =
        this.zeroPrefix(hour, 2) +
        ":" +
        this.zeroPrefix(min, 2) +
        ":" +
        this.zeroPrefix(sec, 2) +
        "." +
        this.zeroPrefix(ms, 3);
      this.timeData.worked = this.time;
      if (this.time) {
        document.title = this.time.split(".")[0];
      }
    },

    updateProgress() {
      let formData = new FormData();
      formData.append("timeData", JSON.stringify(this.timeData));
      axios
        .post(backendServer + "/UpdateProgress/", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .catch(() => {
          this.updateProgress();
        });
    },

    getProgress() {
      axios.get(backendServer + "/getProgress").then(response => {
        if (response.data.timeBegan) {
          for (let prop in response.data) {
            this.timeData[prop] = response.data[prop];
          }
          this.resumeTimer();
        }
      });
    },

    deleteProgress() {
      axios.delete(backendServer + "/deleteProgress").catch(() => {
        this.deleteProgress();
      });
    },

    zeroPrefix(num, digit) {
      var zero = "";
      for (var i = 0; i < digit; i++) {
        zero += "0";
      }
      return (zero + num).slice(-digit);
    },

    addRow: function() {
      this.timeInputs.push(
        parseInt(this.timeInputs[this.timeInputs.length - 1]) + 1
      );
    },
    removeRow: function() {
      this.timeInputs.splice(-1);
    },
    saveTime() {
      this.stop();
      this.$store.state.dynamicProgress = true;
      this.$store.state.progressTitle = "Saving Time";
      let formData = new FormData();
      let workData = {
        project: this.project,
        time: this.timeData.time,
        task: this.task
      };
      formData.append("workData", JSON.stringify(workData));
      axios
        .post(backendServer + "/addAutoTime/", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(() => {
          this.reset();
          this.project = "";
          this.task = "";
          this.$store.state.dynamicProgress = false;
          this.alertSuccess = true;
          this.alertMsg = "Time added successfully";
          setTimeout(() => {
            this.alertSuccess = false;
          }, 3000);
        })
        .catch(() => {
          this.$store.state.dynamicProgress = false;
          this.alertFail = true;
          this.alertMsg = "This Time was not added, something went wrong";
        });
    }
  },
  computed: {
    currentDate() {
      let month = parseInt(this.currentTimeBegan.getMonth());
      month = month + 1;
      if (month.toString().length == 1) {
        month = "0" + month;
      }
      return (
        this.currentTimeBegan.getDate() +
        "-" +
        month +
        "-" +
        this.currentTimeBegan.getFullYear()
      );
    },
    formattedEndTime() {
      if (!this.timeStopped) {
        return "";
      }
      return (
        this.zeroPrefix(this.timeStopped.getHours(), 2) +
        ":" +
        this.zeroPrefix(this.timeStopped.getMinutes(), 2) +
        ":" +
        this.zeroPrefix(this.timeStopped.getSeconds(), 2)
      );
    },
    formattedStartedTime() {
      if (!this.currentTimeBegan) {
        return "";
      }
      return (
        this.zeroPrefix(this.currentTimeBegan.getHours(), 2) +
        ":" +
        this.zeroPrefix(this.currentTimeBegan.getMinutes(), 2) +
        ":" +
        this.zeroPrefix(this.currentTimeBegan.getSeconds(), 2)
      );
    },
    ready() {
      if (this.$v.$invalid) {
        return false;
      }
      return true;
    },
    projectErrors() {
      const errors = [];
      if (!this.$v.project.$dirty) return errors;
      !this.$v.project.required && errors.push("Project is required");
      return errors;
    }
  },
  created() {
    this.getProgress();
    this.getProjects("active");
  }
};
</script>
<style>
#clock {
  order: 0;
  flex: 0 1 auto;
  align-self: center;

  color: rgb(200, 200, 200);
}
.time {
  font-size: 6.5em;
}

.text {
  margin-top: 30px;
  font-size: 1em;
  color: rgba(rgb(200, 200, 200), 0.15);
  text-align: center;
}

.text a {
  text-decoration: none;
  color: inherit;

  transition: color 0.1s ease-out;
}

.btn-container {
  display: flex;
  margin-top: 15px;
}

.btn-container a {
  text-align: center;
  font-family: "Share Tech Mono", sans-serif;
  background: transparent;
  border: none;
  color: rgb(200, 200, 200);
  padding: 10px 15px;
  margin: 0 10px;
  text-transform: uppercase;
  font-size: 2em;
  cursor: pointer;

  flex-grow: 1;

  transition: color 0.1s ease-out;
}
</style>
