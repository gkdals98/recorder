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
      console.log("Is this ", state.curPage);
      return state.curPage;
    },
    GET_IS_LOADING: (state) => state.isLoading,
  },
  mutations: {
    SET_CURPAGE_SETTING: (state) => (state.curPage = "setting"),
    SET_CURPAGE_VIDEO: (state) => {
      state.curPage = "video";
    },
    SET_CURPAGE_AUDIO: (state) => {
      state.curPage = "audio";
    },
    SET_LOADING: (state) => (state.isLoading = true),
    SET_LOADING_END: (state) => (state.isLoading = false),
  },
  action: {},
};
export default page_controller;
