<template>
  <v-row class="flex-grow-0 ml-3 mr-3">
    <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="#313a7f"
            dark
            v-bind="attrs"
            v-on="on"
        >
          <v-icon left>fas fa-plus</v-icon> Add Patient
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">New Patient</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                    v-model="newPatient"
                    label="Name Surname"
                    required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                    v-model="newHeight"
                    label="Height"
                    required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                    v-model="newWeight"
                    label="Weight"
                    required
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
              >
                <v-select
                    :items="['0-17', '18-29', '30-54', '54+']"
                    v-model="newAge"
                    label="Age"
                    required
                ></v-select>
              </v-col>
              <v-col
                  cols="12"
                  sm="6"
              >
                <v-autocomplete
                    :items="['AB+', 'AB-', 'A+', 'A-', 'B+', 'B-']"
                    v-model="newBlood"
                    label="Blood type"
                    multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="#2465cc"
              text
              @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
              color="blue darken-1"
              text
              @click="addTask"
              :disabled="!newPatient && !newHeight && !newWeight && !newAge && !newBlood"
          >
            Add
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import {mapActions} from "vuex";

export default {
  data: () => ({
    dialog: false,
    newPatient: "",
    newHeight: "",
    newWeight: "",
    newAge: "",
    newBlood: "",
  }),
  methods: {
    ...mapActions(['addPatient']),

    addTask() {
      if(this.newPatient, this.newHeight, this.newWeight, this.newAge, this.newBlood) {
        this.addPatient({
          id: this.newPatient,
          height: this.newHeight,
          weight: this.newWeight,
          blood: this.newBlood,
          age: this.newAge
        })
        this.newPatient = ""
        this.newAge = ""
        this.newHeight = ""
        this.newWeight = ""
        this.newBlood = ""
        this.dialog = false
      }
    }
  },
}
</script>
