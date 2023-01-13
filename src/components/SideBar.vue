<template>
  <v-navigation-drawer v-model="drawer" app color="#30538d" mini-variant mini-variant-width="80" >
    <v-avatar height="60" width="60" tile class="ml-3 mt-3 "  >
      <v-img src="logo.png"/>
    </v-avatar>
    <v-list flat class="mt-16">
      <v-list-item-group v-model="selectedItem">
        <v-list-item v-for="(item, i) in items" :key="i" active-class="border" :ripple="false">
          <router-link :to="{name: item.link}">
            <v-icon v-text="item.icon" color="white"/>
          </router-link>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <div style="position: absolute;bottom: 20px; margin-left: auto; margin-right: auto;left: 0;right: 0; text-align: center;">
      <v-icon class="mb-5" color="white">fas fa-cog</v-icon>
      <br/>
      <v-icon color="white">fas fa-info-circle</v-icon>
    </div>


  </v-navigation-drawer>
</template>

<script>
export default {
  name: "SideBar",
  data: () => ({
    selectedItem: 3,
    drawer: null,
    items: [
      { icon: "fas fa-user-injured", link: 'home'},
      { icon: "fas fa-file-medical-alt", link: 'about'},
      { icon: "fas fa-house-chimney-medical", link: 'products'},
    ]
  })
}

</script>

<style>
.border {
  margin-left: 12px;
  margin-right: 12px;
  background: #375fa2;
  border-radius: 50%;
  text-decoration: none;
}
.v-list-item-group .v-list-item--active {
  color: white !important;
}
</style>
