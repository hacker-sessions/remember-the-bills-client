<template>
  <v-container>
    <v-layout row v-if="userIsAuthenticated">
      <v-flex xs12 sm6 offset-sm3>
        <v-card-text>
          <p>{{ account.email }}</p>
          <v-container>
            <v-layout v-if="editing">
              <p>Edit Your Profile</p>
              <EditAccountForm />
            </v-layout>
            <v-layout v-else>

            </v-layout>

            <v-btn color="success" @click="toggleEditorForm">
              <span v-if="editing">Done</span>
              <span v-else>Edit</span>
            </v-btn>
          </v-container>
        </v-card-text>
      </v-flex>
    </v-layout>
    <v-layout v-else>
      <v-flex xs12 sm6 offset-sm3>
        <v-card-text>
          <v-btn>
            <nuxt-link to="/account/signin">Log in</nuxt-link>
          </v-btn>
        </v-card-text>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import EditAccountForm from '@/components/account/EditAccountForm.vue'

export default {
  components: {
    EditAccountForm
  },
  data() {
    return {
      editing: false
    }
  },
  computed: {
    account() {
      return this.$store.state.auth.user
    },
    userIsAuthenticated () {
      return this.$store.state.auth.loggedIn
    }
  },
  methods: {
    toggleEditorForm() {
      this.editing = !this.editing
    }
  }
}
</script>
