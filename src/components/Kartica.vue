<template>
  <v-layout row wrap style>
    <v-card
      class="text-xs-center ma-3"
      max-width="500"
      style="margin-top: 100px margin-left: 20px"
    >
      <v-card-title> COMMIT ID: {{ id }} </v-card-title>
      <v-card-text> ABOUT: {{ abt }} </v-card-text>
      <v-card-actions>
        <router-link :to="{ name: 'Detalji', params: { sha_id: id } }">
          <v-btn color="error"> DETALJI </v-btn>
        </router-link>
      </v-card-actions>
    </v-card>
  </v-layout>
</template>
<script>
export default {
  name: "Kartica",
  props: {
    id: String,
    abt: String,
  },
};
</script>

<style></style>
