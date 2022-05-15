<template>
  <ol class="list-group">
    <li v-if="timerState == 'running'" class="list-group-item d-flex justify-content-between">
      <div class="fw-bold">periode {{item_length()+1}}</div>
      <div class="fw-bold">{{ timer }}</div>
    </li>
    <li class="list-group-item d-flex justify-content-between" v-for="(lap, index) in laps.slice().reverse()" :key="index">
      <div class="fw-bold">periode {{item_length()-index}}</div>
      <div class="fw-bold">{{ lap.formattedTime }}</div>
    </li>
  </ol>
</template>

<script>
export default {
  name: 'List',
  props: ['laps', 'timer', 'timerState'],
  methods: {
        item_length() {
            return this.laps.length;
        }
    },
}
</script>