const video_controller = {
    state: () => {
      return {
        curVideo: null,
        isRecording: false,
      };
    },
    getters: {
      GET_VIDEO: (state) => state.curVideo,
      GET_IS_RECORDING: (state) => state.isRecording,
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
  export default video_controller;