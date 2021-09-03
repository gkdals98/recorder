<template>
  <div id="record-controller">
    <button v-on:click="recButtonClicked">
      <img src="@/assets/svg/rec.svg" height="40px" />
    </button>
    <button v-on:click="stopButtonClicked">
      <img src="@/assets/svg/stop.svg" height="40px" />
    </button>
    <button v-on:click="playButtonClicked">
      <img src="@/assets/svg/play.svg" height="40px" />
    </button>
    <button v-on:click="pauseButtonClicked">
      <img src="@/assets/svg/pause.svg" height="40px" />
    </button>
  </div>
</template>
<script>
export default {
  name: "RecordController",
  computed: {
    curRecord: function () {
      return this.$store.state.page_controller.curPage;
    },
    getCurRecordingState: function () {
      return this.$store.state.record_controller.curRecordingState;
    },
  },
  methods: {
    recButtonClicked: function () {
      this.$store.commit("page_controller/SET_CURPAGE_VIDEO");
    },
    playButtonClicked: function () {
      this.$store.commit("page_controller/SET_CURPAGE_VIDEO");
    },
    pauseButtonClicked: function () {
      this.$store.commit("page_controller/SET_CURPAGE_VOICE");
    },
    stopButtonClicked: function () {
      this.$store.commit("page_controller/SET_CURPAGE_VOICE");
    },
  },
};
</script>
<style lang="scss" scoped>
#record-controller {
  height: 60px;
  padding: 5px;

  button {
    background-color: transparent;
    border-color: transparent;
    margin: 5px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    text-align: center;
    padding: 8px;
  }
}
</style>
