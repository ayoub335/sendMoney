<template>
  <div class="d-flex justify-content-between">
    <div class="fw-bold">Today, {{ currentDate() }}</div>
    <div class="d-flex">
      <button class="btn btn-danger m-2" @click="$emit('lap')" :disabled="state == 'stopped' || state == 'paused'">
        <span class="white--text font-weight-bold text-uppercase">🛑 Stop</span>
      </button>
      <button class="btn btn-success m-2" @click="$emit('start')" :disabled="state == 'running'">
        <span class="white--text font-weight-bold text-uppercase">⏱️ Start</span>
      </button>
      <div class="fw-bold d-flex align-items-center m-2 text-success">{{ totalTime() }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Timer',
  props: ['timer', 'timerState', 'laps','totalTime'],
  methods: {
    currentDate() {
      const current = new Date();
      const month = current.toLocaleString('en-us', { month: 'short' })
      const date = `${current.getDate()} ${month}`;
      return date;
    },
  }
}
</script>