<template>
  <v-container>
    <p>Dataset reader > DB(MY SQL)</p>
    <v-form class="dataset-reader-db">
      <v-row>
        <v-col>
          <label for="server-ip">Server IP</label>
          <v-text-field
              v-model="serverIp"
              id="server-ip"
              label="Enter the server IP"
              solo
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <label for="server-port">Server-port</label>
          <v-text-field
              v-model="serverPort"
              id="server-port"
              label="Enter the server Port"
              placeholder="Server PORT"
              solo
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <label for="user-id">User ID</label>
          <v-text-field
              v-model="userId"
              id="user-id"
              label="Enter the User ID"
              placeholder="User ID"
              solo
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <label for="password">PASSWORD</label>
          <v-text-field
              v-model="password"
              id="password"
              label="Enter the Password"
              placeholder="PassWord"
              solo
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <label for="db-optional">DB(OPTIONAL)</label>
          <v-text-field
              v-model="db"
              id="db-optional"
              label="Enter the DB(Optional)"
              placeholder="DB(Optional)"
              solo

          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn>Cancel</v-btn>
        </v-col>
        <v-col>
          <v-btn>Next</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: 'TestCode',
  data: () => ({
    serverIp: '',
    serverPort: '',
    userId: '',
    password: '',
    db: '',
  }),
  computed: {

  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .dataset-reader-db {
   border: 1px solid black;
   border-radius: 4px;
   margin:10px;
   padding: 10px;
 }
</style>
