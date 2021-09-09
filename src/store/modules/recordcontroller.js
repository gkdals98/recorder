const record_controller = {
  namespaced: true,
  state: () => {
    return {
      chunks: [],
      videoStream: null,
      isRecording: false,
      curMedia: null,
      settingObj: {
        audio: true,
        video: {
          facingMode: "user",
          width: { min: 640, ideal: 1280, max: 1920 },
          height: { min: 480, ideal: 720, max: 1080 },
        },
      },
      curErrorMsg: "",
    };
  },
  setters: {
    SET_ERROR_MSG: function (state, payload) {
      state.curErrorMsg = payload;
    },
    SET_CUR_MEDIA: function (state, payload) {
      state.curMedia = payload;
    },
  },
  mutations: {
    SET_RECORDING: (state) => (state.isRecording = true),
    SET_RECORDING_FIN: (state) => (state.isRecording = false),
    SET_STREAM_CLEAR: (state) => (state.videoStream = null),
  },
  actions: {
    RECORD_START: ({ commit, state }, payload) => {
      commit("SET_RECORDING");
      console.log(payload);
      state.videoStream = payload;
      state.curMedia = new MediaRecorder(payload);
      state.curMedia.start();
      console.log(state.curMedia.state);
    },
    RECORD_STOP: ({ commit, state }) => {
      state.videoStream.stop();
      commit("SET_RECORDING_FIN");
      commit("SET_STREAM_CLEAR");
    },
  },
};
export default record_controller;
