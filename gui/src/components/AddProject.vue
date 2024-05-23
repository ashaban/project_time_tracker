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
              >Add New Project</v-card-title
            >
          </v-toolbar>
          <v-form ref="form" class="pa-3 pt-4">
            <v-layout column>
              <v-flex>
                <v-text-field
                  required
                  @blur="$v.name.$touch()"
                  @change="$v.name.$touch()"
                  :error-messages="nameErrors"
                  v-model="name"
                  filled
                  color="deep-purple"
                  label="Project Name*"
                />
                <v-text-field
                  required
                  @blur="$v.code.$touch()"
                  @change="$v.code.$touch()"
                  :error-messages="codeErrors"
                  v-model="code"
                  filled
                  color="deep-purple"
                  label="Tracking Code*"
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
          </v-form>
          <v-divider />
          <v-card-actions>
            <v-btn
              @click="addProject()"
              :disabled="$v.$invalid"
              class="white--text"
              color="deep-purple accent-4"
              depressed
            >
              <v-icon left>mdi-content-save-check</v-icon>Add
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
import { required } from "vuelidate/lib/validators";
const backendServer = process.env.VUE_APP_BACKEND_SERVER;

export default {
  validations: {
    name: { required },
    date: { required },
    code: { required }
  },
  data() {
    return {
      name: "",
      dateMenu: false,
      date: new Date().toISOString().substr(0, 10),
      code: "",
      alertFail: false,
      alertSuccess: false,
      alertMsg: ""
    };
  },
  methods: {
    addProject() {
      this.$store.state.dynamicProgress = true;
      this.$store.state.progressTitle = "Saving Project";
      let formData = new FormData();
      formData.append("name", this.name);
      formData.append("date", this.date);
      formData.append("code", this.code);
      axios
        .post(backendServer + "/addProject/", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(() => {
          this.name = "";
          this.code = "";
          this.$store.state.dynamicProgress = false;
          this.alertSuccess = true;
          this.alertMsg = "Project added successfully";
          setTimeout(() => {
            this.alertSuccess = false;
          }, 3000);
        })
        .catch(err => {
          this.$store.state.dynamicProgress = false;
          this.alertFail = true;
          this.alertMsg = "This Project was not added, something went wrong";
          console.log(err.response.data.error);
        });
    }
  },
  computed: {
    dateFormatted() {
      if (!this.date) {
        return null;
      }
      const [year, month, day] = this.date.split("-");
      return `${day}/${month}/${year}`;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.required && errors.push("Project name is required");
      return errors;
    },
    dateErrors() {
      const errors = [];
      if (!this.$v.date.$dirty) return errors;
      !this.$v.date.required && errors.push("Date is required");
      return errors;
    },
    codeErrors() {
      const errors = [];
      if (!this.$v.code.$dirty) return errors;
      !this.$v.code.required && errors.push("Tracking Code is required");
      return errors;
    }
  }
};
</script>
