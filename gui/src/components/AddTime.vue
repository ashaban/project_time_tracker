<template>
  <v-container>
    <v-layout
      row
      wrap
    >
      <v-spacer />
      <v-flex xs12>
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
        <v-card
          class="mx-auto"
          style="max-width: 1000px;"
        >
          <v-system-bar
            color="grey darken-2"
            dark
          />
          <v-toolbar
            color="grey darken-1"
            cards
            dark
            flat
          >
            <v-card-title class="title font-weight-regular">Add Time (24 Hours Format)</v-card-title>
          </v-toolbar>
          <v-form
            ref="form"
            class="pa-3 pt-4"
          >
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
                  @change="$v.project.$touch()"
                  :error-messages="projectErrors"
                  box
                  label="Project"
                ></v-autocomplete>
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
          </v-form>
          <v-divider />
          <v-card-actions>
            <v-btn
              @click="addTime"
              :disabled="$v.$invalid"
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
import axios from 'axios'
import { generalMixin } from '@/components/generalMixin'
import { required } from 'vuelidate/lib/validators'
const backendServer = process.env.VUE_APP_BACKEND_SERVER

export default {
  mixins: [generalMixin],
  validations: {
    date: { required },
    project: { required },
    time: { required }
  },
  data () {
    return {
      dateMenu: false,
      date: new Date().toISOString().substr(0, 10),
      project: '',
      time: '',
      alertFail: false,
      alertSuccess: false,
      alertMsg: ''
    }
  },
  methods: {
    addTime () {
      this.$store.state.dynamicProgress = true
      this.$store.state.progressTitle = 'Saving Time'
      let formData = new FormData()
      formData.append('project', this.project)
      formData.append('date', this.date)
      formData.append('time', this.time)
      axios.post(backendServer + '/addTime/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(() => {
        let fields = Object.keys(this.$v.$params)
        this.project = ''
        this.time = ''
        this.$store.state.dynamicProgress = false
        this.alertSuccess = true
        this.alertMsg = 'Time added successfully'
        setTimeout(() => {
          this.alertSuccess = false
        }, 3000)
      }).catch((err) => {
        this.$store.state.dynamicProgress = false
        this.alertFail = true
        this.alertMsg = 'This Time was not added, something went wrong'
        console.log(err.response.data.error)
      })
    }
  },
  computed: {
    dateFormatted () {
      if (!this.date) {
        return null
      }
      const [year, month, day] = this.date.split('-')
      return `${day}/${month}/${year}`
    },
    projectErrors () {
      const errors = []
      if (!this.$v.project.$dirty) return errors
      !this.$v.project.required && errors.push('Project is required')
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
    this.getProjects('active')
  }
}
</script>