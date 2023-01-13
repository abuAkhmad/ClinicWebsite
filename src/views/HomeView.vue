<template>
  <v-app style="background-color: transparent">
    <v-container>
      <v-row>
        <v-col cols="12" sm="12">
          <v-row>
            <v-col cols="12" sm="12">
              <Agenda class="mt-7" />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>

</template>

<script>
import sideBar from "@/components/SideBar";
import navBar from "@/components/navBar";
import Agenda from "@/components/Agenda";
import Doctor from "@/components/Doctor";
import Popup from "@/components/Popup";



  export default {
    name: 'Home',


    components: {
      sideBar,
      navBar,
      Agenda,
      Doctor,
      Popup
    },
  }
</script>
