<template>
  <v-container>
    <p>Dataset reader > DB(MY SQL)</p>
    <v-form class="dataset-reader-db" ref="form" v-if="pageType === 'first'">
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
                type="password"
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
            />
          </label>

        </v-col>
      </v-row>
      <v-row>
        <v-spacer/>
        <v-col cols="auto">
          <v-btn @click="cancel">Cancel</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn @click="submit">Next</v-btn>
        </v-col>
        <v-spacer/>
      </v-row>
    </v-form>
    <v-form class="dataset-reader-db" ref="form" v-if="pageType === 'second'">
      <p>Server DB</p>
      <v-select
          class="server-second-width"
          :items="serverDb"
          v-model="selectedDb"
          label="Select a DB"
          hide-details
          solo/>
      <br/>
      <p>Server table</p>
      <div class="make-preview">
        <v-select
            class="server-second-width"
            :items="serverTable"
            v-model="selectedTable"
            label="Select a table"
            hide-selected
            hide-details
            solo/>
        <v-btn
            class="preview-btn"
            @click="check"
        >
          Preview
        </v-btn>
        <v-dialog v-model="previewOn" width="800px">
          <v-card>
            <v-card-title class="preview-card-title">Preview</v-card-title>
            <v-card-text class="preview-card-content">
              <div class="preview-sub">
                <h3 class="preview-sub-title">Columns</h3>
                <div
                    class="columns-chips"
                    v-for="(ele, ind) in previewChips"
                    :key="ind"
                >
                  <v-chip
                      class="columns-chip"
                  >
                    {{ '\'' + ele + '\'' }}
                  </v-chip>
                </div>
              </div>
              <div class="preview-sub">
                <h3 class="preview-sub-title">Shape</h3>
                <p class="preview-shape">{{previewShape}}</p>
              </div>
              <v-data-table
                  :headers="previewChartHeader"
                  :items="previewChartContent"
              />
            </v-card-text>
            <v-card-actions class="preview-action-btn">
              <v-btn class="preview-btn-close" @click="previewOn=false">
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      <br/>
      <v-row>
        <v-spacer/>
        <v-col cols="auto">
          <v-btn @click="cancel">Cancel</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn @click="submit">Next</v-btn>
        </v-col>
        <v-spacer/>
      </v-row>
    </v-form>
    <v-form ref="form" class="dataset-reader-db" v-if="pageType === 'third'">
      <label>
        <p>Output</p>
        <v-text-field
            v-model="outputVar"
            label="Enter Output"
            solo
            required
            dense
            single-line
        />
      </label>
      <v-row>
        <v-spacer/>
        <v-col cols="auto">
          <v-btn @click="cancel">Cancel</v-btn>
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
  name: 'DatasetReader',

  data: () => ({
    pageType: 'first',
    serverDb: ['test', 'test1'],
    selectedDb: '',
    serverTable: ['test', 'test1'],
    selectedTable: '',
    previewChips: ['sepal', 'sepal2'],
    previewShape: '(150,5)',
    previewChartHeader: [
      {
        text: 'Dessert (100g serving)',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'Calories', value: 'calories' },
      { text: 'Fat (g)', value: 'fat' },
      { text: 'Carbs (g)', value: 'carbs' },
      { text: 'Protein (g)', value: 'protein' },
      { text: 'Iron (%)', value: 'iron' },
    ],
    previewChartContent: [
      {
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        iron: '1%',
      },
      {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        iron: '1%',
      },
      {
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        iron: '7%',
      },
      {
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        iron: '8%',
      },
      {
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
        iron: '16%',
      },
      {
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
        iron: '0%',
      },
      {
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
        iron: '2%',
      },
      {
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
        iron: '45%',
      },
      {
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
        iron: '22%',
      },
      {
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
        iron: '6%',
      },
    ],
    previewOn: false,
    outputVar: '',
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
  computed: {},
  methods: {
    cancel() {
      switch (this.pageType) {
        case "first":
          break;
        case 'second':
          this.pageType = 'first';
          break;
        case 'third':
          this.pageType = 'second'
          break;
        default:
          break;
      }
    },
    submit() {
      const validate = this.$refs.form.validate();
      if (!validate) {
        return;
      } else {
        if (this.pageType === 'first') {
          this.pageType = 'second'
        } else if (this.pageType === 'second') {
          this.pageType = 'third'
        } else {
          // submit here
          alert('save')
          return;
        }
      }
    },
    check() {
      if (this.selectedDb !== '' && this.selectedTable !== '') {
        this.previewOn = true;
      } else {
        alert('select first');
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

.server-second-width {
  width: 90%;
}

.make-preview {
  display: flex;
  align-items: center;
}
.preview-btn {
  display: inline-block;
  width: 8%;
  margin-left: 12px;
}

.preview-btn-close {
  display: inline-block;
  margin: 0 12px 12px 0;
}

.preview-card-title {
  background-color: #eeeeee;
}

.preview-card-content {
  margin: 10px;
  padding: 0;
}

.preview-sub {
  display: flex;
  align-items: center;
  padding-bottom: 10px;
}

.preview-sub-title{
  margin: 0;
  padding-right: 15px;
}

.columns-chips {
  margin-right: 5px;
  position: relative;
}

.columns-chip {
  border-radius: 0!important;
  padding: 0 1px;
  display: inline-block;
}

.columns-chips::after {
  position: absolute;
  content: ',';
  right: -4px;
  bottom: 0;
}
.columns-chips:last-child::after {
  content: none;
}
.preview-shape {
  margin: 0;
}
.preview-action-btn {
  display: flex;
  justify-content: flex-end;
}
</style>
