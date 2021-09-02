<template>
  <v-container>
    <p>Dataset reader > DB(MY SQL)</p>
    <v-form class="dataset-reader-db" ref="form" v-if="pageType">
      <v-row>
        <v-col>
          <label>
            <p class="data-label">Server IP</p>
            <v-text-field
                v-model="form.serverIp"
                label="Enter the server IP"
                :rules="checkValid"
                solo
                required
            />
          </label>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <label>
            <p class="data-label">Server-port</p>
            <v-text-field
                v-model="form.serverPort"
                :rules="checkValid"
                label="Enter the server Port"
                placeholder="Server PORT"
                required
                solo
            />
          </label>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <label>
            <p class="data-label">User ID</p>
            <v-text-field
                v-model="form.userId"
                :rules="checkValid"
                label="Enter the User ID"
                placeholder="User ID"
                required
                solo
            />
          </label>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <label>
            <p class="data-label">PASSWORD</p>
            <v-text-field
                v-model="form.password"
                :rules="checkValid"
                label="Enter the Password"
                placeholder="PassWord"
                required
                solo
            />
          </label>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <label>
            <p class="data-label">DB(OPTIONAL)</p>
            <v-text-field
                v-model="form.db"
                label="Enter the DB(Optional)"
                placeholder="DB(Optional)"
                solo
            /></label>

        </v-col>
      </v-row>
      <v-row>
        <v-spacer />
        <v-col cols="auto">
          <v-btn>Cancel</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn @click="submit">Next</v-btn>
        </v-col>
        <v-spacer />
      </v-row>
    </v-form>
    <v-form class="dataset-reader-db" ref="form" v-else>
      <label>
        <p>Server DB</p>
        <v-select
            v-model="serverSelect"
            label="Select a DB"
            hide-details
            solo
        />
      </label>
      <br/>
      <label>
        <p>Server table</p>
        <v-select
            v-model="serverTable"
            label="Select a table"
            hide-selected
            solo/>
      </label>
      <br/>
      <v-row>
        <v-spacer/>
        <v-col cols="auto">
          <v-btn>Cancel</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn @click="submit">Next</v-btn>
        </v-col>
        <v-spacer/>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'DataReader',

  data: () => ({
    pageType:false,
    serverSelect:[],
    serverTable:[],
    form: {
      serverIp: '',
      serverPort: '',
      userId: '',
      password: '',
      db: ''
    },
    checkValid: [
      v => !!v || 'Requirement Information',
    ],
  }),
  computed: {
  },
  methods: {
    submit() {
      const validate = this.$refs.form.validate();
      if (!validate) {
        return;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.data-label {
  padding-bottom: 5px;
}
.dataset-reader-db {
  margin: 10px;
  padding: 10px;

  border: 1px solid #eeedee;
  border-radius: 4px;

  background-color: #f5f4f6;
}
</style>

