<template>
  <v-app class="boje">
    <div>
      <router-view />
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({}),
};
</script>
<style>
.boje {
  background-image: linear-gradient(150deg, #785f5f 0%, #395071 74%) !important;
}
</style>
