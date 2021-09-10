const record_controller = {
  namespaced: true,
  state: () => {
    return {
      isRecording: false,
      curMediaRecorder: null,
      mediaStream: null,
      chunks: [],
      curFinishedFile: null,
      blob: null,
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
    SET_CUR_BLOB: function (state, payload) {
      console.log("payload is here blob", payload);
      state.blob = payload;
    },
  },
  actions: {
    RECORD_START: ({ commit, state }, payload) => {
      commit("SET_RECORDING");
      console.log("Record start", payload);
      state.mediaStream = payload;
      state.curMediaRecorder = new MediaRecorder(state.mediaStream);

      state.curMediaRecorder.onstop = () => {
        console.log("Who makes error 2");
        let blob = new Blob(state.chunks, { type: "video/mp4" });
        commit("SET_CUR_BLOB", blob);
        commit("SET_CHUNKS_CLEAR");
        let videoURL = window.URL.createObjectURL(state.blob);
        commit("SET_RECORDING_FIN");
        commit("SET_CUR_FINISHED_FILE", videoURL);
      };
      state.curMediaRecorder.ondataavailable = function (ev) {
        state.chunks.push(ev.data);
      };

      state.curMediaRecorder.start();
      console.log(state.curMediaRecorder.state);
    },
    RECORD_STOP: ({ state }) => {
      state.curMediaRecorder.stop();
    },
  },
};
export default record_controller;
