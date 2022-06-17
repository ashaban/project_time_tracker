<template>
  <v-container>
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

    <div class="btn-container">
      <a id="start" @click="start()">Start</a>
      <a id="stop" @click="stop()">Stop</a>
      <a id="reset" @click="reset()">Reset</a>
    </div>
  </v-container>
</template>

<script>
import { eventBus } from "../main";
export default {
  data() {
    return {
      time: "00:00:00.000",
      timeStarted: "",
      timeBegan: null,
      currentTimeBegan: null,
      timeStopped: null,
      stoppedDuration: 0,
      started: null,
      emitter: null,
      running: false,
      timeData: {
        worked: "",
        time: []
      }
    };
  },
  computed: {
    currentDate() {
      let month = parseInt(this.currentTimeBegan.getUTCMonth());
      month = month + 1;
      if (month.toString().length == 1) {
        month = "0" + month;
      }
      return (
        this.currentTimeBegan.getUTCDate() +
        "-" +
        month +
        "-" +
        this.currentTimeBegan.getUTCFullYear()
      );
    },
    formattedEndTime() {
      if (!this.timeStopped) {
        return "";
      }
      return (
        this.zeroPrefix(this.timeStopped.getUTCHours(), 2) +
        ":" +
        this.zeroPrefix(this.timeStopped.getUTCMinutes(), 2) +
        ":" +
        this.zeroPrefix(this.timeStopped.getUTCSeconds(), 2)
      );
    },
    formattedStartedTime() {
      if (!this.currentTimeBegan) {
        return "";
      }
      return (
        this.zeroPrefix(this.currentTimeBegan.getUTCHours(), 2) +
        ":" +
        this.zeroPrefix(this.currentTimeBegan.getUTCMinutes(), 2) +
        ":" +
        this.zeroPrefix(this.currentTimeBegan.getUTCSeconds(), 2)
      );
    }
  },
  methods: {
    start() {
      if (this.running) return;

      if (this.timeBegan === null) {
        this.reset();
        this.timeBegan = new Date();
        this.currentTimeBegan = this.timeBegan;
      } else {
        this.currentTimeBegan = new Date();
      }

      if (this.timeStopped !== null) {
        this.stoppedDuration += new Date() - this.timeStopped;
      }

      this.started = setInterval(this.clockRunning, 10);
      this.timeData.time.push({
        date: this.currentDate,
        start: this.formattedStartedTime,
        end: ""
      });
      this.emitter = setInterval(() => {
        this.$emit("time", this.timeData);
      }, 1000);
      this.running = true;
    },

    stop() {
      this.running = false;
      this.timeStopped = new Date();
      clearInterval(this.started);
      clearInterval(this.emitter);
      for (let index in this.timeData.time) {
        if (this.timeData.time[index].start === this.formattedStartedTime) {
          this.timeData.time[index].end = this.formattedEndTime;
        }
      }
      this.$emit("time", this.timeData);
    },

    reset() {
      this.running = false;
      clearInterval(this.started);
      clearInterval(this.emitter);
      this.stoppedDuration = 0;
      this.timeBegan = null;
      this.timeStopped = null;
      this.time = "00:00:00.000";
      this.timeData = {
        worked: "",
        time: []
      };
      this.$emit("time", this.timeData);
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
    },

    zeroPrefix(num, digit) {
      var zero = "";
      for (var i = 0; i < digit; i++) {
        zero += "0";
      }
      return (zero + num).slice(-digit);
    }
  },
  created() {
    eventBus.$on("resetTimer", () => {
      this.reset();
    });
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
