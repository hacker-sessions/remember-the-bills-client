<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="label"
            label="Reminder name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-menu
            v-model="datepickerMenu"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="dueDate"
                label="Due Date"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="dueDate"
              @input="datepickerMenu = false"
            ></v-date-picker>
          </v-menu>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="amount"
            label="Amount"
            prefix="R$"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-switch
            v-model="recurrent"
            :label="`Is Recurrent? ${recurrent ? 'Yes' : 'No'}`"
          ></v-switch>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>


<script>
  export default {
    data: () => ({
      label: '',
      amount: '',
      dueDate: new Date().toISOString().substr(0, 10),
      datepickerMenu: false,
      recurrent: true
    }),

  }
</script>

