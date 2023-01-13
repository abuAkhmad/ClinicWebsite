<template>
  <v-app-bar color="#30538d" app dark flat elevation="3">
    <v-spacer></v-spacer>
    <Popup />
    <v-avatar rounded color="#e5f1ff">
      <v-img src="p.jpg"></v-img>
    </v-avatar>
  </v-app-bar>
</template>

<script>
import Popup from "@/components/Popup";
export default {
  name: "navBar",
  components: {Popup},

}
</script>

<style>
.v-btn.withoutupercase{
  text-decoration: none !important;
}
</style>
