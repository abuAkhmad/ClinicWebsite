<template>
  <v-app style="background-color: transparent" >
    <v-container>
      <v-row>
        <v-col cols="12" sm="12">
          <v-row>
            <v-col cols="12" sm="11">
              <Contact/>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Contact from "@/components/Contact";
export default {
  components: {
    Contact
  }
}

</script>
<style>

</style>
