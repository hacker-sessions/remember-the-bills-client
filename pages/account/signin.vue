<template>
  <v-container>
    <v-layout row v-if="error">
      <v-flex xs12 sm6 offset-sm3>
        <app-alert @dismissed="onDismissed" :text="error" :type="'error'"></app-alert>
      </v-flex>
    </v-layout>
    <v-layout row v-else-if="success">
      <v-flex xs12 sm6 offset-sm3>
        <app-alert @dismissed="onDismissed" :text="'Welcome! Proceed with signin'" :type="'success'"></app-alert>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <v-container>
              <SignInForm />
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AppAlert from '@/components/shared/Alert.vue'
import SignInForm from '@/components/account/SignInForm.vue'

export default {
  auth: false,
  components: {
    AppAlert,
    SignInForm
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    error () {
      return this.$store.getters.error
    },
    success () {
      return this.$store.getters.success
    }
  },
  methods: {
    onDismissed () {
      this.$store.dispatch('clearAlert')
    }
  },
  created () {
    if (this.$route.query.account_confirmation_success === 'true') {
      this.$store.dispatch('setSuccessMessage', 'welcome')
    }
  }
}
</script>
