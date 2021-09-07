const page_controller = {
  namespaced: true,
  state: () => {
    return {
      curPage: "video",
      isLoading: false,
      controllBlock: false,
    };
  },
  mutations: {
    SET_CURPAGE_SETTING: (state) => (state.curPage = "setting"),
    SET_CURPAGE_VIDEO: (state) => (state.curPage = "video"),
    SET_CURPAGE_AUDIO: (state) => (state.curPage = "audio"),
    SET_LOADING: (state) => (state.isLoading = true),
    SET_LOADING_END: (state) => (state.isLoading = false),
    SET_CONTROLL_BLOCK: (state) => (state.controllBlock = true),
    SET_CONTROLL_UNLOCK: (state) => (state.controllBlock = false),
  },
};
export default page_controller;
