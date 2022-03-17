<template>
  <v-container style="margin-top: 10px; margin-bottom: 10px">
    <h1
      class="white--text mb-10 display-1 text-xs-center"
      style=" margin-bottom: 20px font-weight: 500; text-shadow: 3px 2px #000000"
    >
      ZADATAK 1 - Commit History
    </h1>
    <v-layout row wrap style>
      <kartica
        v-for="coms in coms"
        :key="coms.sha"
        :id="coms.sha"
        :abt="coms.commit.message"
      />
    </v-layout>
  </v-container>
</template>

<script>
import Kartica from "@/components/Kartica.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Kartica,
  },
  data() {
    return {
      coms: [],
    };
  },
  async mounted() {
    const temp = await axios.get(
      "https://api.github.com/repos/vuejs/vue/commits"
    );
    this.coms = temp.data;
  },
};
</script>
