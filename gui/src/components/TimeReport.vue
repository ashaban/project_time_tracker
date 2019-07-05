<template>
  <v-container grid-list-xs>
    <v-dialog
      v-if="editDialog"
      persistent
      v-model="editDialog"
      width="530px"
    >
      <v-card width='530px'>
        <v-toolbar
          color="secondary"
          dark
        >
          <v-spacer></v-spacer>
          <v-btn
            icon
            dark
            @click.native="editDialog = false"
          >
            <v-icon>close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-layout column>
            <v-flex xs1>
              <v-select
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
                box
                label="Project"
              ></v-select>
              <v-text-field
                required
                @blur="$v.time.$touch()"
                @change="$v.time.$touch()"
                :error-messages="timeErrors"
                v-model="time"
                box
                color="deep-purple"
                label="Time*"
              />
              <v-menu
                v-model="dateMenu"
                :close-on-content-click="false"
                :nudge-right="40"
                lazy
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="dateFormatted"
                    label="Date"
                    prepend-icon="event"
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
        <v-card-actions style='float: center'>
          <v-btn
            color="error"
            @click.native="editDialog = false"
            style="color: white"
          >
            <v-icon
              dark
              left
            >cancel</v-icon>Cancel
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="$v.$invalid"
            color="primary"
            dark
            @click.native="saveEdit()"
          >
            <v-icon left>save</v-icon>Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-layout
      row
      wrap
    >
      <v-spacer></v-spacer>
      <v-flex xs2>
        <v-menu
          v-model="startDateMenu"
          :close-on-content-click="false"
          :nudge-right="40"
          lazy
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="startDateFormatted"
              label="Start Date"
              prepend-icon="event"
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
          lazy
          transition="scale-transition"
          offset-y
          full-width
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="endDateFormatted"
              label="End Date"
              prepend-icon="event"
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
        <v-select
          required
          :items="projects"
          v-model="project"
          item-text="name"
          item-value="_id"
          single-line
          clearable
          label="Project"
        ></v-select>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex xs2>
        <v-btn
          color="secondary"
          round
          @click="getReport"
        >
          <v-icon left>list</v-icon> Filter
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
      {{alertMsg}}
    </v-alert>
    <v-alert
      style="width: 500px"
      v-model="alertFail"
      type="error"
      dismissible
      transition="scale-transition"
    >
      {{alertMsg}}
    </v-alert>
    <v-data-table
      :headers="reportHeader"
      :items="reportRows"
      pagination.sync="pagination"
      item-key="id"
    >
      <template v-slot:items="props">
        <td>{{ props.item.project }}</td>
        <td>{{ props.item.date }}</td>
        <td>{{ props.item.timeRange }}</td>
        <td>{{ props.item.hours }}</td>
        <td>
          <v-btn
            color="secondary"
            round
            icon
            @click="editTime(props.item)"
          >
            <v-icon>edit</v-icon>
          </v-btn>
        </td>
      </template>
    </v-data-table>
    <v-layout
      row
      wrap
    >
      <v-flex xs10>

      </v-flex>
      <v-flex
        xs2
        align-content-end
      >
        <b>Total {{totalHours}} Hours</b>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import axios from 'axios'
import { generalMixin } from '@/components/generalMixin'
import { required } from 'vuelidate/lib/validators'
const backendServer = process.env.VUE_APP_BACKEND_SERVER
export default {
  mixins: [generalMixin],
  validations: {
    date: { required },
    editProject: { required },
    time: { required }
  },
  data () {
    return {
      startDate: '',
      endDate: '',
      timeObject: {},
      alertFail: false,
      alertSuccess: false,
      alertMsg: '',
      editDialog: false,
      dateMenu: false,
      date: new Date().toISOString().substr(0, 10),
      editProject: '',
      project: '',
      time: '',
      project: '',
      totalHours: '0:00',
      reportRows: [],
      reportHeader: [
        { text: "Project", value: "project" },
        { text: "Date", value: "date" },
        { text: "Time Range", value: "time" },
        { text: "Hours", value: "hours" },
      ],
      startDateMenu: false,
      endDateMenu: false
    }
  },
  methods: {
    getReport () {
      axios.get(backendServer + '/getTime?startDate=' + this.startDate + '&endDate=' + this.endDate + '&project=' + this.project).then((response) => {
        this.reportRows = response.data.rows
        this.totalHours = response.data.totalHours
      })
    },
    editTime (time) {
      this.timeObject = time
      this.editDialog = true
      this.editProject = time.project_id
      this.time = time.timeRange
      let date = time.date.split('-')
      this.date = new Date(date[2] + '-' + date[1] + '-' + date[0]).toISOString().substr(0, 10)
    },
    saveEdit () {
      this.$store.state.dynamicProgress = true
      this.$store.state.progressTitle = 'Saving Time'
      let formData = new FormData()
      formData.append('project', this.editProject)
      formData.append('_id', this.timeObject._id)
      formData.append('date', this.date)
      formData.append('time', this.time)
      axios.post(backendServer + '/updateTime/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(() => {
        this.editProject = ''
        this.time = ''
        this.editDialog = false
        this.$store.state.dynamicProgress = false
        this.alertSuccess = true
        this.alertMsg = 'Time added successfully'
        this.getReport()
        setTimeout(() => {
          this.alertSuccess = false
        }, 3000)
      }).catch((err) => {
        this.$store.state.dynamicProgress = false
        this.alertFail = true
        this.alertMsg = 'This Time was not added, something went wrong'
        console.log(err.response.data.error)
      })
    },
    defaultEndDate () {
      let today = new Date()
      let month = today.getMonth() + 1
      if (month.toString().length === 1) {
        month = '0' + month
      }
      let year = today.getFullYear()
      let lastDay = new Date(year, month, 0).getDate();
      let date = year + '-' + month + '-' + lastDay
      return new Date(date).toISOString().substr(0, 10)
    },
    defaultStartDate () {
      let today = new Date()
      let month = today.getMonth() + 1
      if (month.toString().length === 1) {
        month = '0' + month
      }
      let year = today.getFullYear()
      let date = year + '-' + month + '-' + '01'
      return new Date(date).toISOString().substr(0, 10)
    }
  },
  computed: {
    startDateFormatted () {
      if (!this.startDate) {
        return null
      }
      const [year, month, day] = this.startDate.split('-')
      return `${day}/${month}/${year}`
    },
    endDateFormatted () {
      if (!this.endDate) {
        return null
      }
      const [year, month, day] = this.endDate.split('-')
      return `${day}/${month}/${year}`
    },
    dateFormatted () {
      if (!this.date) {
        return null
      }
      const [year, month, day] = this.date.split('-')
      return `${day}/${month}/${year}`
    },
    editProjectErrors () {
      const errors = []
      if (!this.$v.editProject.$dirty) return errors
      !this.$v.editProject.required && errors.push('Project is required')
      return errors
    },
    dateErrors () {
      const errors = []
      if (!this.$v.date.$dirty) return errors
      !this.$v.date.required && errors.push('Date is required')
      return errors
    },
    timeErrors () {
      const errors = []
      if (!this.$v.time.$dirty) return errors
      !this.$v.time.required && errors.push('Time is required')
      return errors
    }
  },
  created () {
    this.startDate = this.defaultStartDate()
    this.endDate = this.defaultEndDate()
    this.getReport()
    this.getProjects()
  }
}
</script>
