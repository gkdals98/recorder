<template>
  <div id="video_main">
    <!--v-if로 컴포넌트 전환을 할 경우, 컴포넌트 삭제 시에 Blob에 대한 처리 에러 발생-->
    <video
      id="recorded-player"
      :src="curFinishedFile"
      v-bind:style="{ display: playerDisplay }"
      controls
    ></video>
    <video
      id="record-preview"
      :srcObject.prop="curMediaStream"
      v-bind:style="{ display: recorderDisplay }"
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
    playerDisplay: function () {
      return this.curRecord ? "none" : "block";
    },
    recorderDisplay: function () {
      return this.curRecord ? "block" : "none";
    },
  },
};
</script>
<style lang="scss" scoped>
#video_main {
  color: rgb(69, 47, 79);
  padding: 10px;
  video {
    padding-bottom: 2px;
  }
  #recorded-player {
    width: 70vw;
    max-width: 900px;
    max-height: 450px;
  }
  #record-preview {
    width: 70vw;
    max-width: 900px;
    max-height: 450px;
  }
}
</style>
