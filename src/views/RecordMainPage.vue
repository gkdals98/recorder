<template>
  <div class="record-main">
    <SelectRecordType />
    <div id="record-container">
      <VideoComponent v-if="curPage == 'video'" />
      <AudioComponent v-if="curPage == 'audio'" />
    </div>
  </div>
</template>
<script>
import SelectRecordType from "@/components/SelectRecordType";
import VideoComponent from "@/components/VideoComponent";
import AudioComponent from "@/components/AudioComponent";

export default {
  name: "RecordMainPage",
  components: { VideoComponent, AudioComponent, SelectRecordType },
  computed: {
    curPage: function () {
      return this.$store.state.page_controller.curPage;
    },
  },
};
</script>
<style lang="scss" scoped>
.record-main {
  color: darkslategray;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
</style>
