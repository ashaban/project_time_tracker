<template>
  <v-container grid-list-xs>
    <v-data-table
      :headers="reportHeader"
      :items="reportRows"
      pagination.sync="pagination"
      item-key="id"
    >
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td>{{ props.item.code }}</td>
        <td>{{ props.item.status }}</td>
        <td>
          <v-btn
            color="secondary"
            round
            small
            @click="changeStatus(props.item._id, 'inactive')"
            v-if="props.item.status === 'active'"
          >
            <v-icon>edit</v-icon>
            Deactivate
          </v-btn>
          <v-btn
            color="secondary"
            round
            small
            @click="changeStatus(props.item._id, 'active')"
            v-else
          >
            <v-icon>edit</v-icon>
            Activate
          </v-btn>
        </td>
      </template>
    </v-data-table>
  </v-container>
</template>
<script>
import axios from 'axios'
const backendServer = process.env.VUE_APP_BACKEND_SERVER
export default {
  data () {
    return {
      reportRows: [],
      reportHeader: [
        { text: "Name", value: "name" },
        { text: "Code", value: "code" },
        { text: "Status", value: "status" }
      ]
    }
  },
  methods: {
    getReport () {
      axios.get(backendServer + '/getProjects').then((response) => {
        this.reportRows = response.data
      })
    },
    changeStatus (id, status) {
      this.$store.state.dynamicProgress = true
      this.$store.state.progressTitle = 'Changing Status'
      let formData = new FormData()
      formData.append('id', id)
      formData.append('status', status)
      axios.post(backendServer + '/changeProjectStatus/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(() => {
        this.$store.state.dynamicProgress = false
        this.getReport()
      }).catch((err) => {
        this.$store.state.dynamicProgress = false
        console.log(err.response.data.error)
      })
    }
  },
  created () {
    this.getReport()
  }
}
</script>
