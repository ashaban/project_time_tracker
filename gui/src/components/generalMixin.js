import axios from 'axios'
const backendServer = process.env.VUE_APP_BACKEND_SERVER
export const generalMixin = {
  data () {
    return {
      projects: []
    }
  },
  methods: {
    getProjects () {
      axios.get(backendServer + '/getProjects').then((response) => {
        this.projects = response.data
      })
    }
  }
}
