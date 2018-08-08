<template>
  <form @submit.prevent="onSignin">
    <v-layout row>
      <v-flex xs12>
        <v-text-field name="email" label="E-mail" id="email" v-model="email" type="email" required></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <v-text-field name="password" label="Password" id="password" v-model="password" type="password" required></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex><nuxt-link to="/account/signup">I don't have an account</nuxt-link></v-flex>
      <v-flex xs12>
        <v-btn type="submit" :disabled="loading" :loading="loading">
          Sign in
          <span slot="loader" class="custom-loader">
          <v-icon light>cached</v-icon>
        </span>
        </v-btn>
      </v-flex>
    </v-layout>
  </form>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    loading() {
      return this.$store.getters.loading
    }
  },
  methods: {
    onSignin () {
      this.$store.dispatch('signUserIn', {
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>
