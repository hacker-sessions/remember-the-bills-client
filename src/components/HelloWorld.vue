<template>
  <v-app>
    <v-content>
      <v-container>Hello {{user.email}}</v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'HelloWorld',
  computed: {
    user () {
      return this.$store.getters.user
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
