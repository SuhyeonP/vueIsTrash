<template>
  <v-container>
    <p>Data loader</p>
    <v-form class="data-loader" ref="form">
      <v-row>
        <v-col cols="6">
          <v-range-slider
              v-model="range"
              :max="max"
              :min="min"
              hide-details
              class="range-slider"
              color="#697bd6"
              track-color="#fff"
              track-fill-color="#697bd6"
          >
            <template v-slot:prepend>
              <label>
                <p class="range-title">Trains</p>
                <v-text-field
                    :value="range[0]"
                    hide-details
                    single-line
                    style="width: 60px"
                    type="number"
                    @change="$set(range, 0, $event)"
                    outlined
                    dense
                />
              </label>
            </template>
            <template v-slot:append>
              <label>
                <p class="range-title">Valid</p>
                <v-text-field
                    :value="range[1]"
                    hide-details
                    single-line
                    style="width: 60px"
                    type="number"
                    @change="$set(range, 1, $event)"
                    outlined
                    dense
                />
              </label>
            </template>
          </v-range-slider>
        </v-col>
        <v-col cols="4">
          <label>
            <p>Target columns</p>
            <v-select
                v-model="selectColumns"
                :items="targetColumns"
                label="Select target columns"
                multiple
                solo
            >
              <template v-slot:selection>
                <p  class="hidden-times">Select target columns</p>
              </template>
            </v-select>
          </label>
          <ul class="columns-chips">
            <li v-for="(ele, ind) in selectColumns" :key="ind" class="column-chip">
              <v-chip
                  close
                  @click:close="removeChips(ind)"
              >{{ele}}</v-chip>
            </li>
          </ul>
        </v-col>
        <v-col cols="2">
          <label>
            <p>Batch size</p>
            <v-text-field
                v-model="batchSize"
                :rules="checkValid"
                type="number"
                label="Enter the batch size"
                solo
                required
            />
          </label>
          <div class="batch-check-list">
            <p class="batch-check" @click="batchSizeEvent">Batch drop last</p>
            <v-checkbox
                v-model="batchDrop"
                color="green"
                class="batch-check-list"
            />
          </div>
          <div class="batch-check-list">
            <p class="batch-check" @click="batchShuffleEvent">Batch shuffle</p>
            <v-checkbox
                v-model="batchShuffle"
                color="green"
                class="batch-check-list"
            />
          </div>
          <div class="batch-check-list">
            <p class="batch-check" @click="splitShuffleEvent">Split shuffle</p>
            <v-checkbox
                v-model="splitShuffle"
                color="green"
                class="batch-check-list"
            />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="auto">
          <v-btn>Back</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn @click="submit">Next</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "DataLoader",
  data: () =>({
    batchSize: '',
    batchDrop: false,
    batchShuffle: false,
    splitShuffle: false,
    min: 0,
    max: 10,
    range: [2,3],
    checkValid: [
      v => !!v || 'Requirement Information',
    ],
    targetColumns:['test1','test2','test3'],
    selectColumns:['test1','test3']
  }),
  methods: {
    batchSizeEvent() {
      this.batchDrop = !this.batchDrop
    },
    batchShuffleEvent() {
      this.batchShuffle = !this.splitShuffle
    },
    splitShuffleEvent() {
      this.splitShuffle = !this.splitShuffle
    },
    removeChips(e) {
      if(e === 0){
        this.selectColumns.splice(e,1)
      } else{
        this.selectColumns.splice(e,e)
      }
    },
    submit() {
      const validate = this.$refs.form.validate();
      if (!validate) {
        return;
      }
      console.log('submit')
    }
  }
}
</script>

<style scoped>
.range-title {
  padding-bottom: 16px;
}
.data-loader {
  margin: 10px;
  padding: 20px;
  border: 1px solid #eeedee;
  border-radius: 4px;

  background-color: #f5f4f6;
}

.range-slider {
  align-items: center;
}

.range-slider label p {
  margin-bottom: 7px;
}

.batch-check {
  margin: 0;

  cursor: default;
}

.batch-check-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.columns-chips {
  display: flex;
  padding: 0;

  list-style: none;
}

.column-chip {
  margin: 4px;
}
.hidden-times {
  display: none;
}

.hidden-times:first-child {
  display: block;
  max-width: 90%;
  margin: 1px 0 0 0;
  overflow: hidden;

  color: rgba(0, 0, 0, 0.6);
  white-space: nowrap;
  text-overflow: ellipsis;

  pointer-events: none;
}
</style>
