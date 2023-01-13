<template>
  <div>
    <div v-for="(list, i) in patients" :key="i">
      <v-hover
          v-slot:default="{ hover }"

      >
        <v-card
            :elevation="hover ? 8 : 3"
            :color="hover ? 'blue-grey lighten-4' : 'blue-grey lighten-5'"
            class="rounded-lg mt-10 mb-5 transition-swing"
            flat>
          <v-row>
            <v-col cols="12" sm="5">

                <v-card
                    color="#30538d"
                    class="rounded-lg px-2 ml-2 mt-2"
                    height="150"
                    flat>
                  <v-row>
                    <v-col cols="12" sm="4">
                      <v-avatar color="blue-grey lighten-5" rounded>
                        <v-img src="p1.jpg"/>
                      </v-avatar>
                    </v-col>
                    <v-col cols="12" sm="8">
                      <h4 class="white--text">{{ list.id }}</h4>
                      <h6 class="white--text">{{ list.age }} years old</h6>
                    </v-col>
                    <v-col cols="12" sm="12" class="mt-3">
                      <v-row>
                        <v-col cols="12" sm="4">
                          <h6 class="grey--text text--lighten-4">Height</h6>
                          <h6 class="white--text">{{ list.height }}</h6>
                        </v-col>
                        <v-col cols="12" sm="4">
                          <h6 class="grey--text text--lighten-4">Blood type</h6>
                          <h6 class="white--text">{{ list.blood }}</h6>
                        </v-col>
                        <v-col cols="12" sm="4">
                          <h6 class="grey--text text--lighten-4">Weight</h6>
                          <h6 class="white--text">{{ list.weight }}</h6>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </v-card>

            </v-col>
          </v-row>
        </v-card>
      </v-hover>
    </div>
  </div>
</template>

<script>



import {mapGetters} from "vuex";

export default {
  name: "Contact",
  computed: {
    ...mapGetters(['patients'])
  }
}
</script>

<style scoped>
.v-card.on-hover.theme--dark {
  transform: translateZ(15px);
}
</style>
