const controller = {
    state: () => {
        return {
            curPage: "video",
            isLoading: false
        }
    },
    getters: {
        getCurPage: state => state.curPage,
        getIsLoading: state => state.isLoading
    },
    setters: {
        setCurPage: (state, curPage) => {
            state.curPage = curPage
        },
        setIsLoading: (state, isLoading) => {
            state.isLoading = isLoading
        },
    },
    mutation: {

    },
    action: {

    }
}
export default controller;