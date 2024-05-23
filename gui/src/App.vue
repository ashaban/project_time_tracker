<template>
  <v-app>
    <v-main>
      <v-toolbar color="secondary" dark>
        <v-toolbar-title v-text="title"></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn text to="TrackTime" v-if="!$store.state.denyAccess">
            <v-icon>mdi-plus</v-icon> Start Working
          </v-btn>
          <v-btn text to="AddTime" v-if="!$store.state.denyAccess">
            <v-icon>mdi-plus</v-icon> Add Time Manually
          </v-btn>
          <v-btn text to="TimeReport" v-if="!$store.state.denyAccess">
            <v-icon>mdi-format-list-bulleted</v-icon> Time Report
          </v-btn>
          <v-btn text to="AddProject" v-if="!$store.state.denyAccess">
            <v-icon>mdi-plus</v-icon> Add Project
          </v-btn>
          <v-btn text to="projectsReport" v-if="!$store.state.denyAccess">
            <v-icon>mdi-format-list-bulleted</v-icon> Projects
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-dialog v-model="$store.state.dynamicProgress" persistent width="300">
        <v-card color="primary" dark>
          <v-card-text>
            {{ $store.state.progressTitle }}
            <v-progress-linear
              indeterminate
              color="white"
              class="mb-0"
            ></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-dialog persistent v-model="$store.state.dialogError" max-width="500px">
        <v-card>
          <v-toolbar color="primary" dark>
            <v-toolbar-title>
              {{ $store.state.errorTitle }}
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            {{ $store.state.errorDescription }}
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="primary"
              @click.native="$store.state.dialogError = false"
              >Ok</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
      <br>
      <router-view />
    </v-main>
    <v-footer dark color="secondary" :fixed="fixed" app> </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      title: "PROJECT TIME TRACKER",
      fixed: false
    };
  },
  created() {
    this.$router.push({ name: "TrackTime" });
  }
};
</script>
