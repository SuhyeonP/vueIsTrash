<template>
  <v-container>
    <p>Dataset reader > DB (MYSQL)</p>
    <v-form class="dataset-reader-db" ref="form">
      <label>
        <p>Server DB</p>
        <v-select
            class="make-preview"
            v-model="serverSelect"
            label="Select a DB"
            hide-details
            solo
        />
      </label>
      <br/>
      <div>
        <label class="make-preview in-preview">
          <p>Server table</p>
          <v-select
              :items="serverTable"
              v-model="selectTableValue"
              label="Select a table"
              hide-details
              solo
              @change="checkValid"
          />
        </label>
        <v-btn class="preview-btn">Preview</v-btn>
      </div>
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
name: "DatasetReader1",
  data:()=>({
    serverSelect:['why'],
    serverTable:['test1','test2'],
    selectTableValue:[]
  }),
  methods:{
    submit() {
      const validate = this.$refs.form.validate();
      if (!validate) {
        return;
      }
    },
    checkValid(e) {
      if (e) {
        console.log('make preview')
      }
    }
  }
}
</script>

<style scoped>
.dataset-reader-db {
  margin: 10px;
  padding: 10px;

  border: 1px solid #eeedee;
  border-radius: 4px;

  background-color: #f5f4f6;
}
.make-preview {
  width: 90%;
}

.in-preview {
  display: inline-block;
}
.preview-btn {
  display: inline-block;
  margin-left: 12px;
  width: 8%;
}
</style>
