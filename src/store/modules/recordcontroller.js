const record_controller = {
  namespaced: true,
  state: () => {
    return {
      isRecording: false,
      curMediaRecorder: null,
      mediaStream: null,
      chunks: [],
      curFinishedFile: null,
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
  mutations: {
    SET_RECORDING: (state) => (state.isRecording = true),
    SET_RECORDING_FIN: (state) => (state.isRecording = false),
    SET_STREAM_CLEAR: (state) => (state.mediaStream = null),
    SET_CHUNKS_CLEAR: (state) => (state.chunks = []),
    SET_ERROR_MSG: function (state, payload) {
      state.curErrorMsg = payload;
    },
    SET_CUR_FINISHED_FILE: function (state, payload) {
      console.log("payload is here finish", payload);
      state.curFinishedFile = payload;
    },
  },
  actions: {
    RECORD_START: ({ commit, state }, payload) => {
      commit("SET_RECORDING");
      console.log(payload);
      state.mediaStream = payload;
      state.curMediaRecorder = new MediaRecorder(payload);

      state.curMediaRecorder.onstop = () => {
        let blob = new Blob(state.chunks, { type: "video/mp4;" });
        commit("SET_CHUNKS_CLEAR");
        let videoURL = window.URL.createObjectURL(blob);
        commit("SET_CUR_FINISHED_FILE", videoURL);
      };
      state.curMediaRecorder.ondataavailable = function (ev) {
        state.chunks.push(ev.data);
      };

      state.curMediaRecorder.start();
      console.log(state.curMediaRecorder.state);
    },
    RECORD_STOP: ({ commit, state }) => {
      state.curMediaRecorder.stop();
      commit("SET_RECORDING_FIN");
      commit("SET_STREAM_CLEAR");
    },
  },
};
export default record_controller;
