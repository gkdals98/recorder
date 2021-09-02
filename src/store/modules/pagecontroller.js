const page_controller = {
  namespaced: true,
  state: () => {
    return {
      curPage: "video",
      isLoading: false,
    };
  },
  getters: {
    GET_CURPAGE: (state) => {
      return state.curPage;
    },
    GET_IS_LOADING: (state) => state.isLoading,
  },
  mutation: {
    SET_CURPAGE_SETTING: (state) => (state.curPage = "setting"),
    SET_CURPAGE_VIDEO: (state) => {
      console.log("Call this");
      state.curPage = "video";
    },
    SET_CURPAGE_VOICE: (state) => (state.curPage = "voice"),
    SET_LOADING: (state) => (state.isLoading = true),
    SET_LOADING_END: (state) => (state.isLoading = false),
  },
  action: {},
};
export default page_controller;
