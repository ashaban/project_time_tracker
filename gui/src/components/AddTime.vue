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
            <v-card-title class="title font-weight-regular"
              >Click Start To Begin Working</v-card-title
            >
          </v-toolbar>
          <v-form ref="form" class="pa-3 pt-4">
            <v-layout column>
              <v-layout row wrap>
                <v-flex xs2> </v-flex>
                <v-flex xs10>
                  <keep-alive>
                    <Timer @time="newTime"></Timer>
                  </keep-alive>
                </v-flex>
              </v-layout>
              <v-flex>
                <v-layout row wrap>
                  <template v-for="tm in time">
                    <v-flex xs3>
                      <v-card color="grey" dark>
                        <v-card-title primary-title>
                          <b>{{ tm.date }}</b>
                        </v-card-title>
                        <v-card-text>
                          {{ tm.start }} - {{ tm.end }}
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-spacer></v-spacer>
                  </template>
                </v-layout>
              </v-flex>
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
                  @change="$v.project.$touch()"
                  :error-messages="projectErrors"
                  box
                  label="Project"
                ></v-autocomplete>
              </v-flex>
              <v-flex>
                <v-textarea
                  label="What are you working on"
                  v-model="task"
                  hint="Tasks"
                ></v-textarea>
              </v-flex>
            </v-layout>
          </v-form>
          <v-divider />
          <v-card-actions>
            <v-btn
              @click="addTime"
              :disabled="$v.$invalid || !accurateTime"
              class="white--text"
              color="deep-purple accent-4"
              depressed
            >
              <v-icon left>how_to_reg</v-icon>Add
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
import Timer from "@/components/Timer.vue";
import { eventBus } from "../main";
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
      time: [],
      alertFail: false,
      alertSuccess: false,
      alertMsg: "",
      timeInputs: [0]
    };
  },
  methods: {
    addRow: function() {
      this.timeInputs.push(
        parseInt(this.timeInputs[this.timeInputs.length - 1]) + 1
      );
    },
    removeRow: function() {
      this.timeInputs.splice(-1);
    },
    newTime(value) {
      document.title = value.worked;
      if (value.time.length > this.timeInputs.length) {
        this.addRow();
      }
      this.time = value.time;
    },
    addTime() {
      this.$store.state.dynamicProgress = true;
      this.$store.state.progressTitle = "Saving Time";
      let formData = new FormData();
      let workData = {
        project: this.project,
        time: this.time,
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
          let fields = Object.keys(this.$v.$params);
          eventBus.$emit("resetTimer");
          this.project = "";
          this.time = "";
          this.$store.state.dynamicProgress = false;
          this.alertSuccess = true;
          this.alertMsg = "Time added successfully";
          setTimeout(() => {
            this.alertSuccess = false;
          }, 3000);
        })
        .catch(err => {
          this.$store.state.dynamicProgress = false;
          this.alertFail = true;
          this.alertMsg = "This Time was not added, something went wrong";
          console.log(err.response.data.error);
        });
    }
  },
  computed: {
    accurateTime() {
      let accurate = true;
      if (this.time.length === 0) {
        return false;
      }
      for (let time of this.time) {
        if (!time.end) {
          accurate = false;
          break;
        }
      }
      return accurate;
    },
    dateFormatted() {
      if (!this.date) {
        return null;
      }
      const [year, month, day] = this.date.split("-");
      return `${day}/${month}/${year}`;
    },
    projectErrors() {
      const errors = [];
      if (!this.$v.project.$dirty) return errors;
      !this.$v.project.required && errors.push("Project is required");
      return errors;
    }
  },
  components: {
    Timer: Timer
  },
  created() {
    this.getProjects("active");
  }
};
</script>
