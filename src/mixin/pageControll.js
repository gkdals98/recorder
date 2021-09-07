const pageControll = {
  methods: {
    checkControllEnable: function () {
      if (this.$store.state.page_controller.controllBlock === true)
        return false;
      this.$store.commit("page_controller/SET_CONTROLL_BLOCK");
      setTimeout(() => {
        this.$store.commit("page_controller/SET_CONTROLL_UNLOCK");
      }, 1000);
      return true;
    },
  },
};

export default pageControll;
