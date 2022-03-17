<template>
  <div>
    <v-card
      class="text-xs-center ma-3"
      max-width="500"
      style="margin-top: 100px"
      v-if="var2.commit"
    >
      <v-card-title>SHA: {{ var2.sha }}</v-card-title>
      <v-card-text>MSG: {{ var2.commit.message }}</v-card-text>
      <v-card-text>AUTHOR: {{ var2.commit.author.name }}</v-card-text>
      <v-card-text>DATE: {{ var2.commit.author.date }}</v-card-text>
      <v-card-text>EMAIL: {{ var2.commit.author.email }}</v-card-text>

      <v-spacer></v-spacer>
      <v-btn
        onclick="history.back()"
        color="error"
        style="margin-left: 20px; margin-bottom: 20px"
        >Go back</v-btn
      >
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      var: 0,
      lin: [],
      var2: [],
    };
  },

  async mounted() {
    const const1 = await axios.get(
      "https://api.github.com/repos/vuejs/vue/commits"
    );
    this.lin = const1.data;
    for (let a = 0; a < this.lin.length; a++) {
      if (this.lin[a].sha == this.$route.params.sha_id) this.var = a;
    }
    this.var2 = this.lin[this.var];
  },
};
</script>
