<template>
  <v-app style="background-color: transparent">
    <v-container>
      <v-row>
        <v-col cols="12" sm="12">
          <v-row>
            <v-col cols="12" sm="12">
              <products class="pt-7"/>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import products from "@/components/products";
export default {
  name: "ProductPage",
  components: {products}
}
</script>
