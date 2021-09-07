<template>
  <div id="record-controller">
    <button v-on:click="cameraButtonClicked">
      <img class="rec-type" src="@/assets/svg/video-camera.svg" />
    </button>
    <button v-on:click="micButtonClicked">
      <img class="rec-type" src="@/assets/svg/mic.svg" />
    </button>
  </div>
</template>
<script>
export default {
  name: "SelectRecordType",
  methods: {
    cameraButtonClicked: function () {
      this.$store.commit("page_controller/SET_CURPAGE_VIDEO");
    },
    micButtonClicked: function () {
      this.$store.commit("page_controller/SET_CURPAGE_AUDIO");
    },
  },
};
</script>
<style lang="scss" scoped>
#record-controller {
  width: 80px;
  padding: 5px;

  button {
    margin: 5px;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    text-align: center;
    padding: 8px;
    .rec-type {
      height: 30px;
    }
  }
}
</style>
