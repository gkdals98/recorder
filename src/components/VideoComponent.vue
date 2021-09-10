<template>
  <div id="video_main">
    <video
      id="recorded-player"
      v-if="!curRecord"
      :src="curFinishedFile"
    ></video>
    {{ curFinishedFile }}
    <video
      id="record-preview"
      v-if="curRecord"
      :srcObject.prop="curMediaStream"
      autoplay
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
      return this.$store.state.record_controller.isRecording;
    },
    curMediaStream: function () {
      return this.$store.state.record_controller.mediaStream;
    },
    curFinishedFile: function () {
      return this.$store.state.record_controller.curFinishedFile;
    },
  },
};
</script>
<style lang="scss" scoped>
#video_main {
  color: darkslategray;
  padding: 10px;
  #recorded-player {
    width: 80vw;
    max-width: 900px;
  }
  #record-preview {
    width: 80vw;
    max-width: 900px;
  }
}
</style>
