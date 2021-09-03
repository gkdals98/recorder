<template>
  <div id="record-controller">
    <button v-on:click="cameraButtonClicked">
      <img src="@/assets/svg/video-camera.svg" height="30px" />
    </button>
    <button v-on:click="micButtonClicked">
      <img src="@/assets/svg/mic.svg" height="30px" />
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
  }
}
</style>
