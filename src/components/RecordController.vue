<template>
  <div id="record-controller">
    <button
      v-on:click="recButtonToggled"
      class="rec"
      v-bind:class="{ Rec: onRec, notRec: !onRec, conBlock: conrtollBlock }"
    ></button>
    <button v-on:click="sendButtonClicked" class="send-button">
      <img class="send-icon" src="@/assets/svg/upload.svg" />
    </button>
  </div>
</template>
<script>
import pageControll from "@/mixin/pageControll.js";
//import axios from "axios";
export default {
  name: "RecordController",
  mixins: [pageControll],
  data: function () {
    return {
      onRec: false,
    };
  },
  computed: {
    curRecord: function () {
      return this.$store.state.page_controller.curPage;
    },
    getCurRecordingState: function () {
      return this.$store.state.record_controller.curRecordingState;
    },
    conrtollBlock: function () {
      return this.$store.state.page_controller.controllBlock;
    },
  },
  methods: {
    recButtonToggled: function () {
      if (this.setShotControllBlock()) {
        this.onRec = !this.onRec;
        if (!this.$store.state.record_controller.isRecording) {
          const self = this;
          navigator.mediaDevices
            .getUserMedia(this.$store.state.record_controller.settingObj)
            .then(function (mediaStreamObj) {
              self.$store.dispatch(
                "record_controller/RECORD_START",
                mediaStreamObj
              );
            });
        } else {
          this.$store.dispatch("record_controller/RECORD_STOP");
        }
      }
    },
    sendButtonClicked: function () {
      // axios.get("/sample").then((response) => {
      //   console.log(response.data);
      // });
      if (
        this.setShotControllBlock() &&
        !this.onRec &&
        this.$store.state.record_controller.blob
      ) {
        this.$store.dispatch("record_controller/UPLOAD_TO_SERVER");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
#record-controller {
  height: 60px;
  padding: 5px;
  background-color: #47464b;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;

  .rec {
    width: 30px;
    height: 30px;
    font-size: 0;
    background-color: rgb(221, 83, 255);
    border-width: 3px;
    border-radius: 35px;
    margin: 18px;
    outline: none;

    &.notRec {
      background-color: darked;
      &:hover {
        filter: brightness(1.3);
        transition-duration: 0.7s;
      }
    }

    &.Rec {
      animation-name: pulse;
      animation-duration: 1.2s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }

    &.conBlock {
      pointer-events: none;
    }
  }

  .send-button {
    height: 30px;
    border-radius: 50%;
    background-color: #4a42b9;
    .send-icon {
      height: 15px;
    }
  }
}
@keyframes pulse {
  0% {
    box-shadow: 0px 0px 5px 0px rgba(173, 0, 164, 0.3);
  }
  65% {
    box-shadow: 0px 0px 5px 13px rgba(173, 0, 164, 0.3);
  }
  90% {
    box-shadow: 0px 0px 8px 13px rgba(173, 0, 164, 0);
  }
}
@media (max-width: 767px) {
  #record-controller {
    height: 40px;
  }
}
</style>
