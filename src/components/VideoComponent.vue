<template>
  <div id="video_main">
    <video></video>
    <RecordController />
  </div>
</template>
<script>
import RecordController from "@/components/RecordController";
export default {
  name: "VideoComponent",
  components: { RecordController },
};
</script>
<style lang="scss" scoped>
#video_main {
  color: darkslategray;
  padding: 10px;
  video {
    width: 80vw;
    max-width: 900px;
    background-color: turquoise;
  }
}
</style>
