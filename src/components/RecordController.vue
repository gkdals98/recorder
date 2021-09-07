<template>
  <div id="record-controller">
    <button
      v-on:click="recButtonToggled"
      class="rec"
      v-bind:class="{ Rec: onRec, notRec: !onRec, justToggled: conrtollBlock }"
    ></button>
  </div>
</template>
<script>
import pageControll from "@/mixin/pageControll.js";
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
      if (this.checkControllEnable()) {
        this.onRec = !this.onRec;
        this.$store.commit("page_controller/SET_CURPAGE_VIDEO");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
#record-controller {
  height: 60px;
  padding: 5px;
  background-color: #292929;
  vertical-align: center;

  .rec {
    width: 30px;
    height: 30px;
    font-size: 0;
    background-color: rgb(255, 89, 103);
    border-width: 3px;
    border-radius: 35px;
    margin: 18px;
    outline: none;

    &.notRec {
      background-color: darkred;
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

    &.justToggled {
      pointer-events: none;
    }
  }
}
@keyframes pulse {
  0% {
    box-shadow: 0px 0px 5px 0px rgba(173, 0, 0, 0.3);
  }
  65% {
    box-shadow: 0px 0px 5px 13px rgba(173, 0, 0, 0.3);
  }
  90% {
    box-shadow: 0px 0px 8px 13px rgba(173, 0, 0, 0);
  }
}
</style>
