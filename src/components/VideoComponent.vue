<template>
  <div id="video_main">
    <video id="player" v-if="curRecord == 'stop'"></video>
    <video
      id="record-preview"
      v-if="curRecord == 'onRec'"
      :src="curVideoFile"
    ></video>
    <RecordController />
  </div>
</template>
<script>
import RecordController from "@/components/RecordController";
export default {
  name: "VideoComponent",
  components: { RecordController },
  computed: {
    curRecord: function () {
      return this.$store.state.record_controller.curRecordingState;
    },
    curVideoFile: function () {
      return this.$store.state.record_controller.videoStream;
    },
  },
};
</script>
<style lang="scss" scoped>
#video_main {
  color: darkslategray;
  padding: 10px;
  #player {
    width: 80vw;
    max-width: 900px;
    background-color: #daa2a2;
  }
  #record-preview {
    width: 80vw;
    max-width: 900px;
    background-color: turquoise;
  }
}
</style>
