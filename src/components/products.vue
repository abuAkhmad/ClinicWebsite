<template>
  <v-row>
    <v-col
        cols="12"
        sm="6"
        v-for="(clinic, i) in clinics" :key="i"
    >
      <v-hover
          v-slot:default="{ hover }"

      >
        <v-card
            :elevation="hover ? 8 : 3"
            class="mx-auto transition-swing"
            :color="hover ? 'grey lighten-5' : 'grey lighten-3'"


        >
          <v-img :src="clinic.image"
                 height="250"
                 aspect-ratio="2.75"
          ></v-img>
          <v-card-text class="font-weight-medium text-center subtitle-1">
            <h3>Adress: {{ clinic.adress }}</h3>
            <h4 >Working Time: {{ clinic.workTime }}</h4>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "products",
  computed: {
    ...mapGetters(['clinics'])
  }
}
</script>

<style scoped>
</style>
