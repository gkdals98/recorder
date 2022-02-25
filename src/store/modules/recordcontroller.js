//import { uploadFile } from "@/api/files.js";
import axios from "axios";
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
      state.curFinishedFile = payload;
    },
  },
  actions: {
    RECORD_START: ({ commit, dispatch, state }, payload) => {
      commit("SET_RECORDING");
      commit("SET_CHUNKS_CLEAR");
      state.mediaStream = payload;
      state.curMediaRecorder = new MediaRecorder(state.mediaStream);

      state.curMediaRecorder.onstop = () => {
        dispatch("RECORD_STOP_PROCESS");
      };
      state.curMediaRecorder.addEventListener("dataavailable", function (ev) {
        state.chunks.push(ev.data);
      });
      state.curMediaRecorder.start();
    },
    RECORD_STOP: ({ state }) => {
      state.curMediaRecorder.stop();
    },
    RECORD_STOP_PROCESS: ({ commit, state }) => {
      let blob = new Blob(state.chunks, { mimeType: "video/mp4" });
      state.blob = blob;
      let videoURL = URL.createObjectURL(blob);
      commit("SET_CUR_FINISHED_FILE", videoURL);

      //파일 확인용 자동 다운로드 코드. Chrome에서 녹화 시, 산출물 재생에 Matroska 지원 필요.
      //let aElm = document.createElement("a");
      //aElm.href = videoURL;
      //aElm.download = "sample.mp4";
      //aElm.click();
      commit("SET_RECORDING_FIN");
    },
    UPLOAD_TO_SERVER: ({ state }) => {
      let result = "Error";
      const formData = new FormData();
      formData.append("file", state.blob);

      axios.post("/upload", formData).then((response) => {
        console.log("response ", response);
        result = response.data.message;
        console.log("result ", result);
      });
    },
  },
};
export default record_controller;
