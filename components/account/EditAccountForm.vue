<template>
  <form @submit.prevent="updateAccountData">
    <v-layout row>
      <v-flex xs12>
        <v-text-field name="displayName" label="Display Name" id="displayName" v-model="newData.displayName" type="text" required></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <v-text-field name="username" label="Username" id="username" v-model="newData.username" type="text" required></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <v-btn type="submit" :disabled="loading" :loading="loading">
        Update
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
  computed: {
    account() {
      return this.$store.state.auth.user
    }
  },
  data () {
    return {
      newData: {
        displayName: '',
        username: ''
      }
    }
  },
  mounted () {
    this.newData.displayName = this.account.email
    this.newData.username = this.account.email
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    },
  },
  methods: {
    updateAccountData() {
      this.$store.dispatch('updateAccount', this.newData)
    }
  }
}
</script>
