<template>
  <div class="error-main">
    <h1>Error!!!</h1>
    <h2>{{ msg }}</h2>
  </div>
</template>
<script>
export default {
  name: "ErrorPage",
  computeds: {
    msg: function () {
      return this.$store.state.record_controller.curErrorMsg;
    },
  },
};
</script>
<style lang="scss" scoped>
.error-main {
  display: flex;
  flex-direction: column;
}
</style>
