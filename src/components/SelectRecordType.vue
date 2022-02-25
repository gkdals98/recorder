<template>
  <div id="record-controller">
    <button v-on:click="cameraButtonClicked" v-bind:class="videoSelected">
      <img class="rec-type" src="@/assets/svg/video-camera.svg" />
    </button>
    <button v-on:click="micButtonClicked" v-bind:class="recSelected">
      <img class="rec-type" src="@/assets/svg/mic.svg" />
    </button>
  </div>
</template>
<script>
export default {
  name: "SelectRecordType",
  data() {
    return {
      videoSelected: "selected",
      recSelected: "",
    };
  },
  methods: {
    cameraButtonClicked: function () {
      this.$store.commit("page_controller/SET_CURPAGE_VIDEO");
      this.videoSelected = "selected";
      this.recSelected = "";
    },
    micButtonClicked: function () {
      this.$store.commit("page_controller/SET_CURPAGE_AUDIO");
      this.videoSelected = "";
      this.recSelected = "selected";
    },
  },
};
</script>
<style lang="scss" scoped>
#record-controller {
  width: 50px;
  padding-top: 20px;
  background-color: rgb(82, 56, 97);
  border-bottom: solid 3px #c6c2f1;
  button {
    border-radius: 10% 0 0 10%;
    background-color: rgb(82, 56, 97);
    color: white;
    border-style: none;
    width: 50px;
    height: 50px;
    text-align: center;
    padding: 10px 5px 5px 5px;
    .rec-type {
      height: 20px;
    }

    &:hover {
      filter: brightness(1.3);
      box-shadow: 0px 0px 5px 0px rgb(249, 236, 255);
      transform: scale(1.05, 0, 1.05, 0);
      transition-duration: 0.7s;
    }
    &.selected {
      background-color: rgb(249, 236, 255);
      color: rgb(82, 56, 97);
    }
  }
}

@media (max-width: 767px) {
  #record-controller {
    width: 60px;
    padding: 5px;

    button {
      margin: 2px;
      width: 40px;
      height: 40px;
      text-align: center;
      padding: 10px 5px 5px 5px;
      .rec-type {
        height: 22px;
      }
    }
  }
}
</style>
