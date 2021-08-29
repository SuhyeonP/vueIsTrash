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
          >
            <template v-slot:prepend>
              <label>
                <p>Trains</p>
                <v-text-field
                    :value="range[0]"
                    hide-details
                    single-line
                    style="width: 60px"
                    type="number"
                    @change="$set(range, 0, $event)"
                    outlined
                />
              </label>
            </template>
            <template v-slot:append>
              <label>
                <p>Valid</p>
                <v-text-field
                    :value="range[1]"
                    hide-details
                    single-line
                    style="width: 60px"
                    type="number"
                    @change="$set(range, 1, $event)"
                    outlined
                />
              </label>
            </template>
          </v-range-slider>
        </v-col>
        <v-col cols="4">
          <label>
            <p>Target columns</p>
            <v-select
              outlined
            />
          </label>
        </v-col>
        <v-col cols="2">
          <label>
            <p>Batch size</p>
            <v-text-field />
          </label>
          <v-checkbox />
          <v-checkbox />
          <v-checkbox />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="auto">
          <v-btn>Back</v-btn>
        </v-col>
        <v-col cols="auto">
          <v-btn>Next</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  name: "DataLoader",
  data: () =>({
    min: 0,
    max: 10,
    range: [2,3],
  })
}
</script>

<style scoped>

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

</style>
