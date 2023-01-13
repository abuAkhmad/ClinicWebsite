<template>
  <v-app >
    <v-main>
      <side-bar/>
      <nav-bar/>
      <v-container>
        <v-row>
          <v-col cols="12" sm="9">
            <v-row>
              <v-col>
                <transition
                    name="fade"
                    mode="out-in"
                    >
                  <router-view/>
                </transition>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="3">
            <Doctor class="pt-10"/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app >
</template>

<script>
import SideBar from "@/components/SideBar";
import navBar from "@/components/navBar";
import Doctor from "@/components/Doctor";
export default {
  name: 'App',
  components: {
    SideBar,
    navBar,
    Doctor
  }
};
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css";

main {
  background: url('./assets/back3.jpg');
  background-size: cover;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>


<!--enter-active-class="animated fadeIn fast"-->
<!--leave-active-class="animated fadeOut fast"-->


