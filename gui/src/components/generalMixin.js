import axios from 'axios'
const backendServer = process.env.VUE_APP_BACKEND_SERVER
export const generalMixin = {
  data () {
    return {
      projects: []
    }
  },
  methods: {
    getProjects (status) {
      if(!status) {
        status = ''
      }
      axios.get(backendServer + '/getProjects?status=' + status).then((response) => {
        this.projects = response.data
      })
    }
  }
}
