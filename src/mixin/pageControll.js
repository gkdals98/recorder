const pageControll = {
  methods: {
    setShotControllBlock: function () {
      if (this.$store.state.page_controller.controllBlock === true)
        return false;
      this.$store.commit("page_controller/SET_CONTROLL_BLOCK");
      setTimeout(() => {
        this.$store.commit("page_controller/SET_CONTROLL_UNLOCK");
      }, 1000);
      return true;
    },
    setControllBlockWithCallback: function (callback) {
      if (this.$store.state.page_controller.controllBlock === true) return;
      this.$store.commit("page_controller/SET_CONTROLL_BLOCK");
      callback().then(() =>
        this.$store.commit("page_controller/SET_CONTROLL_UNLOCK")
      );
    },
  },
};

export default pageControll;
