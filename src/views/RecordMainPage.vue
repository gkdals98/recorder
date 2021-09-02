<template>
  <div class="record-main">
    <RecordController />
    <div id="record-container">
      <VideoComponent v-if="curPage == 'video'" />
      <AudioComponent v-if="curPage == 'audio'" />
    </div>
  </div>
</template>
<script>
import RecordController from "@/components/RecordController";
import VideoComponent from "@/components/VideoComponent";
import AudioComponent from "@/components/AudioComponent";

export default {
  name: "RecordMainPage",
  components: { VideoComponent, AudioComponent, RecordController },
  computed: {
    curPage: function () {
      console.log("this.$store.GET_CURPAGE", this.$store.getters.GET_CURPAGE);
      return this.$store.getters.GET_CURPAGE;
    },
  },
};
</script>
<style lang="scss" scoped>
.record-main {
  background-color: azure;
  color: darkslategray;
  display: flex;
  flex-direction: row;
}
</style>
