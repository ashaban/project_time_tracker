<template>
  <v-container grid-list-xs>
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
          color="primary"
          round
          @click="getReport"
        >
          <v-icon left>list</v-icon> Filter
        </v-btn>
      </v-flex>
    </v-layout>
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
const backendServer = process.env.VUE_APP_BACKEND_SERVER
export default {
  mixins: [generalMixin],
  data () {
    return {
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
      endDateMenu: false,
      startDate: new Date('2019-07-01').toISOString().substr(0, 10),
      endDate: new Date().toISOString().substr(0, 10),
    }
  },
  methods: {
    getReport () {
      axios.get(backendServer + '/getTime?startDate=' + this.startDate + '&endDate=' + this.endDate + '&project=' + this.project).then((response) => {
        this.reportRows = response.data.rows
        this.totalHours = response.data.totalHours
      })
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
    }
  },
  created () {
    this.getReport()
    this.getProjects()
  }
}
</script>
