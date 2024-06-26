<template>
  <v-container grid-list-xs>
    <v-dialog v-if="editDialog" persistent v-model="editDialog" width="530px">
      <v-card width="530px">
        <v-toolbar color="secondary" dark>
          <v-spacer></v-spacer>
          <v-btn icon dark @click.native="editDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-layout column>
            <v-flex xs1>
              <v-autocomplete
                required
                :items="projects"
                v-model="editProject"
                item-text="name"
                item-value="_id"
                single-line
                clearable
                @blur="$v.editProject.$touch()"
                @change="$v.editProject.$touch()"
                :error-messages="editProjectErrors"
                filled
                label="Project"
              ></v-autocomplete>
              <v-text-field
                required
                @blur="$v.time.$touch()"
                @change="$v.time.$touch()"
                :error-messages="timeErrors"
                v-model="time"
                filled
                color="deep-purple"
                label="Time*"
              />
              <v-menu
                v-model="dateMenu"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="dateFormatted"
                    label="Date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  @input="dateMenu = false"
                ></v-date-picker>
              </v-menu>
            </v-flex>
          </v-layout>
        </v-card-text>
        <v-card-actions style="float: center">
          <v-btn
            color="error"
            @click.native="editDialog = false"
            style="color: white"
          >
            <v-icon dark left>mdi-cancel</v-icon>Cancel
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="$v.$invalid"
            color="primary"
            dark
            @click.native="saveEdit()"
          >
            <v-icon left>mdi-content-save-check</v-icon>Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-layout row wrap>
      <v-spacer></v-spacer>
      <v-flex xs2>
        <v-menu
          v-model="startDateMenu"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="startDateFormatted"
              label="Start Date"
              prepend-icon="mdi-calendar"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="startDate"
            @input="startDateMenu = false"
          ></v-date-picker>
        </v-menu>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex xs2>
        <v-menu
          v-model="endDateMenu"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="endDateFormatted"
              label="End Date"
              prepend-icon="mdi-calendar"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="endDate"
            @input="endDateMenu = false"
          ></v-date-picker>
        </v-menu>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex>
        <v-autocomplete
          required
          :items="projects"
          v-model="project"
          item-text="name"
          item-value="_id"
          single-line
          clearable
          label="Project"
        ></v-autocomplete>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex xs2>
        <v-btn color="secondary" rounded @click="getReport">
          <v-icon left>mdi-format-list-bulleted</v-icon> Filter
        </v-btn>
      </v-flex>
    </v-layout>
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
    <v-data-table
      :headers="reportHeader"
      :items="reportRows"
      pagination.sync="pagination"
      item-key="id"
    >
      <template v-slot:item="props">
        <tr>
        <td>{{ props.item.project }}</td>
        <td>{{ props.item.date }}</td>
        <td>{{ props.item.timeRange }}</td>
        <td>{{ props.item.task }}</td>
        <td>{{ props.item.durationHours }}</td>
        <td>{{ props.item.durationMinutes }}</td>
        <td>{{ props.item.durationSeconds }}</td>
        <td>
          <v-btn color="secondary" rounded icon @click="editTime(props.item)">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </td>
      </tr>
      </template>
    </v-data-table>
    <v-layout row wrap>
      <v-flex xs2 align-content-end>
        <b>Total {{ totalDurationHours }} Hours</b>
      </v-flex>
      <v-flex xs2 align-content-end>
        <b>Total {{ totalDurationMinutes }} Minutes</b>
      </v-flex>
      <v-flex xs2 align-content-end>
        <b>Total {{ totalDurationSeconds }} Seconds</b>
      </v-flex>
      <v-flex xs2 align-content-end>
        <b>Total {{ totalHours }} Hours:Minutes</b>
      </v-flex>
      <v-flex xs2 align-content-end>
        <b>Total {{ (totalDurationHours / 8).toFixed(2) }} Days</b>
      </v-flex>
      <v-flex xs2 align-content-end>
        <b>Required {{ expectedWorkingDays }} Days</b>
      </v-flex>
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
    date: { required },
    editProject: { required },
    time: { required }
  },
  data() {
    return {
      startDate: "",
      endDate: "",
      timeObject: {},
      alertFail: false,
      alertSuccess: false,
      alertMsg: "",
      editDialog: false,
      dateMenu: false,
      date: new Date().toISOString().substr(0, 10),
      editProject: "",
      project: "",
      time: "",
      totalHours: "0:00",
      totalDurationHours: "",
      totalDurationMinutes: "",
      totalDurationSeconds: "",
      expectedWorkingDays: 0,
      reportRows: [],
      reportHeader: [
        { text: "Project", value: "project" },
        { text: "Date", value: "date" },
        { text: "Time Range", value: "timeRange" },
        { text: "Tasks", value: "task" },
        { text: "Hours", value: "durationHours" },
        { text: "Minutes", value: "durationMinutes" },
        { text: "Seconds", value: "durationSeconds" }
      ],
      startDateMenu: false,
      endDateMenu: false
    };
  },
  methods: {
    getReport() {
      axios
        .get(
          backendServer +
            "/getTime?startDate=" +
            this.startDate +
            "&endDate=" +
            this.endDate +
            "&project=" +
            this.project
        )
        .then(response => {
          this.reportRows = response.data.rows;
          this.totalHours = response.data.totalHours;
          this.totalDurationHours = response.data.totalDurationHours;
          this.totalDurationMinutes = response.data.totalDurationMinutes;
          this.totalDurationSeconds = response.data.totalDurationSeconds;
        });
      axios
        .get(
          backendServer +
            "/getWorkingDays/" +
            this.startDate +
            "/" +
            this.endDate
        )
        .then(response => {
          this.expectedWorkingDays = response.data.days;
        });
    },
    editTime(time) {
      this.timeObject = time;
      this.editDialog = true;
      this.editProject = time.project_id;
      this.time = time.timeRange;
      let date = time.date.split("-");
      this.date = new Date(date[2] + "-" + date[1] + "-" + date[0])
        .toISOString()
        .substr(0, 10);
    },
    saveEdit() {
      this.$store.state.dynamicProgress = true;
      this.$store.state.progressTitle = "Saving Time";
      let formData = new FormData();
      formData.append("project", this.editProject);
      formData.append("_id", this.timeObject._id);
      formData.append("date", this.date);
      formData.append("time", this.time);
      axios
        .post(backendServer + "/updateTime/", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(() => {
          this.editProject = "";
          this.time = "";
          this.editDialog = false;
          this.$store.state.dynamicProgress = false;
          this.alertSuccess = true;
          this.alertMsg = "Time added successfully";
          this.getReport();
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
    },
    defaultEndDate() {
      let today = new Date();
      let month = today.getMonth() + 1;
      if (month.toString().length === 1) {
        month = "0" + month;
      }
      let year = today.getFullYear();
      let lastDay = new Date(year, month, 0).getDate();
      let date = year + "-" + month + "-" + lastDay;
      return new Date(date).toISOString().substr(0, 10);
    },
    defaultStartDate() {
      let today = new Date();
      let month = today.getMonth() + 1;
      if (month.toString().length === 1) {
        month = "0" + month;
      }
      let year = today.getFullYear();
      let date = year + "-" + month + "-" + "01";
      return new Date(date).toISOString().substr(0, 10);
    }
  },
  computed: {
    startDateFormatted() {
      if (!this.startDate) {
        return null;
      }
      const [year, month, day] = this.startDate.split("-");
      return `${day}/${month}/${year}`;
    },
    endDateFormatted() {
      if (!this.endDate) {
        return null;
      }
      const [year, month, day] = this.endDate.split("-");
      return `${day}/${month}/${year}`;
    },
    dateFormatted() {
      if (!this.date) {
        return null;
      }
      const [year, month, day] = this.date.split("-");
      return `${day}/${month}/${year}`;
    },
    editProjectErrors() {
      const errors = [];
      if (!this.$v.editProject.$dirty) return errors;
      !this.$v.editProject.required && errors.push("Project is required");
      return errors;
    },
    dateErrors() {
      const errors = [];
      if (!this.$v.date.$dirty) return errors;
      !this.$v.date.required && errors.push("Date is required");
      return errors;
    },
    timeErrors() {
      const errors = [];
      if (!this.$v.time.$dirty) return errors;
      !this.$v.time.required && errors.push("Time is required");
      return errors;
    }
  },
  created() {
    this.startDate = this.defaultStartDate();
    this.endDate = this.defaultEndDate();
    this.getReport();
    this.getProjects();
  }
};
</script>
