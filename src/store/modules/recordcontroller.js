const record_controller = {
    state: () => {
      return {
        curRecordingState: "stop",
        videoStream: null,
      };
    },
    getters: {
      GET_VIDEO: (state) => state.videoSteam,
      GET_CUR_RECORDING_STATE: (state) => state.curRecordingState,
    },
    mutation: {
      SET_RECORDING: (state) => (state.isLoading = true),
      SET_LRECORDING_END: (state) => (state.isLoading = false),
    },
    action: {
      RECORD_START: (state) => {
        navigator.getUserMedia({video:true, audio:false}, function(stream){ 
          state.curVideo = stream; 
        }, function(error){ 
          alert("Error!!!", error);
        }); 
      }
    },
  };
  export default record_controller;