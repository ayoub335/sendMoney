<template>
  <div class="container">
    <div class="row p-3">
      <Timer :timer="formattedTime" :laps="laps" :totalTime="totalTime" :state="timerState" @start="start" @lap="lap"
        @stop="stop" />
    </div>
    <div class="row">
      <List :laps="laps" :timer="formattedTime" :timerState="timerState" />
    </div>
    <div class="row">
      <div class="d-flex justify-content-end fw-bold">Total:
        <span class="text-success">{{ " " + totalTime() }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Timer from '@/components/Timer';
import List from './components/List.vue';
import axios from 'axios'
export default {
  name: 'App',
  components: {
    Timer,
    List
  },
  data() {
    return {
      timerState: 'stopped',
      currentTimer: 0,
      formattedTime: "00:00:00",
      ticker: undefined,
      laps: [],
      latestLap: "",
      snackbar: false
    }
  },
  methods: {
    totalTime() {
      let sec = 0
      for (let i = 0; i < this.laps.length; i++) {
        sec = sec + parseInt(this.laps[i].seconds, 10);
      }
      let hours = Math.floor(sec / 3600); // get hours
      let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
      let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
      if (hours < 10) { hours = "0" + hours; }
      if (minutes < 10) { minutes = "0" + minutes; }
      if (seconds < 10) { seconds = "0" + seconds; }
      return hours + ':' + minutes + ':' + seconds;
    },
    start() {
      if (this.timerState !== 'running') {
        this.tick();
        this.timerState = 'running';
      }
    },
    lap() {
      this.snackbar = true;
      this.laps.push({
        seconds: this.currentTimer,
        formattedTime: this.formatTime(this.currentTimer)
      });
      this.latestLap = this.formatTime(this.currentTimer);
      const period = { periode: this.latestLap };
      axios.post("http://localhost:3000/timer/createTimer", period)
      this.currentTimer = 0;
      this.stop()
    },
    stop() {
      window.clearInterval(this.ticker)
      this.currentTimer = 0;
      this.formattedTime = "00:00:00";
      this.timerState = "stopped";
    },
    tick() {
      this.ticker = setInterval(() => {
        this.currentTimer++;
        this.formattedTime = this.formatTime(this.currentTimer);
      }, 1000)
    },
    formatTime(seconds) {
      let measuredTime = new Date(null);
      measuredTime.setSeconds(seconds);
      let MHSTime = measuredTime.toISOString().substr(11, 8);
      return MHSTime;
    }
  }
}
</script>