<template>
  <div id="record-main">
    <RecordController />
  </div>
</template>
<script>
import RecordController from "@/components/RecordController";
export default {
  name: "AudioComponent",
  components: { RecordController },
};
</script>
<style lang="scss" scoped>
#record-main {
  color: darkslategray;
}
</style>
