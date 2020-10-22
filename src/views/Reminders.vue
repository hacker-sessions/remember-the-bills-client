<template>
  <div class="reminders">
    <h1>Reminders</h1>
    <reminders-list
      :headers="headers"
      :items="items"
      
    ></reminders-list>
  </div>
</template>

<script>
import axios from '@/axios-auth'
import RemindersList from '@/components/reminders/RemindersList.vue'

export default {
  name: 'reminders',
  components: {
    RemindersList
  },
  data() {
    return {
      data: {}
    }
  },
  async mounted() {
    axios.get('/reminders')
      .then(data => this.data = data)
  }
}
</script>
