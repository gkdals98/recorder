const record_controller = {
  state: () => {
    return {
      videoStream: null,
      curRecordingState: "stop",
    };
  },
  mutation: {
    SET_RECORDING: (state) => (state.isLoading = true),
    SET_RECORDING_FIN: (state) => (state.isLoading = false),
    SET_STREAM_CLEAR: (state) => (state.videoStream = null),
  },
  action: {
    RECORD_START: (state) => {
      this.commit("SET_RECORDING");
      navigator.getUserMedia(
        { video: true, audio: false },
        function (stream) {
          state.curVideo = stream;
        },
        function (error) {
          alert("Error!!!", error);
        }
      );
    },
    RECORD_STOP: (state) => {
      state.curVideo = null;
    },
  },
};
export default record_controller;
