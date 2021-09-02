<template>
  <v-container>
    <p>Data loader</p>
    <v-form class="data-loader">
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
                label="Select target columns"
                v-model="targetColumns"
                hide-details
                solo
            />
          </label>
        </v-col>
        <v-col cols="2">
          <label>
            <p>Batch size</p>
            <v-text-field
                v-model="batchSize"
                hide-details="auto"
                :rules="checkValid"
                type="number"
                label="Enter the batch size"
                solo
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
    targetColumns:[],
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
    submit() {
      console.log('submit')
      return;
    }
  }
}
</script>

<style scoped>
.range-title {
  padding-bottom: 16px;
}
.data-loader {
  border: 1px solid #eeedee;
  border-radius: 4px;
  margin:10px;
  padding: 20px;
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
</style>
