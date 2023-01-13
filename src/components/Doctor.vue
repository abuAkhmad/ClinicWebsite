<template>

  <v-expansion-panels >
    <v-expansion-panel class="blue-grey lighten-5">
      <v-expansion-panel-header>
        <template v-slot:default="{ open }">
          <v-row no-gutters>
            <v-col cols="8" class="font-weight-bold">
              Doctors
            </v-col>

          </v-row>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
          <div class="doctors rounded-l" v-for="(doctor, i) in doctors" :key="i">

            <v-img :src="doctor.img" max-height="35" max-width="35" class="mb-3 mt-3 mr-3 ml-3 rounded-lg"/>
            <div>
              <h4>{{ doctor.title }}</h4>
              <h5 style="color: darkgray">{{ doctor.subtitle }}</h5>
            </div>
            <hr>
          </div>

      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>

</template>

<script>
export default {
  name: "Doctor",
  data: () => ({
    doctors: [
      {
        img: "p2.jpg",
        subtitle: "Therapist",
        title: "Dr.Clarence Hamilton",
      },
      {
        img: "p5.jpg",
        subtitle: "Surgeon ",
        title: "Dr.Daniel Cormier ",
      },
      {
        img: "p4.jpg",
        subtitle: "Hematologist ",
        title: "Dr.Dominick Cruz",
      },
      {
        img: "p2.jpg",
        subtitle: "Oncologists",
        title: "Dr.Dan Henderson",
      },
      {
        img: "p4.jpg",
        subtitle: "Dermatologists ",
        title: "Dr.Jose Aldo",
      },
      {
        img: "p4.jpg",
        subtitle: "Psychiatrists ",
        title: "Dr.Conor McGregor",
      },
    ],


  })
}
</script>

<style scoped>
.doctors {
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
  transition: ease-in-out .2s;
}
.doctors:hover {
  background-color: #e1e1e1;
}
</style>
