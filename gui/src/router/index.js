import Vue from 'vue'
import VueRouter from 'vue-router'
import AddProject from "@/components/AddProject.vue";
import TrackTime from "@/components/TrackTime.vue";
import AddTime from "@/components/AddTime.vue";
import TimeReport from "@/components/TimeReport.vue";
import ProjectsReport from "@/components/ProjectsReport.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/AddProject",
    name: "AddProject",
    component: AddProject
  },
  {
    path: "/TrackTime",
    name: "TrackTime",
    component: TrackTime
  },
  {
    path: "/AddTime",
    name: "AddTime",
    component: AddTime
  },
  {
    path: "/TimeReport",
    name: "TimeReport",
    component: TimeReport
  },
  {
    path: "/ProjectsReport",
    name: "ProjectsReport",
    component: ProjectsReport
  }
]

const router = new VueRouter({
  routes
})

export default router
