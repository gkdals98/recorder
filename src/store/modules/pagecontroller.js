const page_controller = {
  state: () => {
    return {
      curPage: "video",
      sLoading: false,
    };
  },
  getters: {
    GET_CURPAGE: (state) => state.curPage,
    GET_IS_LOADING: (state) => state.isLoading,
  },
  setters: {
    SET_CURPAGE: (state, curPage) => {
      state.curPage = curPage;
    },
    SET_ISLOADING: (state, isLoading) => {
      state.isLoading = isLoading;
    },
  },
  mutation: {
    SET_CURPAGE_VIDEO: (state) => (state.curPage = "video"),
    SET_CURPAGE_VOICE: (state) => (state.curPage = "voice"),
    SET_LOADING: (state) => (state.isLoading = true),
    SET_LOADING_END: (state) => (state.isLoading = false),
  },
  action: {},
};
export default page_controller;
