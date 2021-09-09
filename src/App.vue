<template>
  <div id="app">
    <div id="header">
      <h1>Recorder</h1>
      <div id="nav">
        <router-link to="/">
          <img src="@/assets/svg/home.svg" height="30px" />
        </router-link>
        <router-link to="/setting">
          <img src="@/assets/svg/settings.svg" height="30px" />
        </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  created: function () {
    this.checkDeviceError();
  },
  methods: {
    checkDeviceError: () => {
      if (navigator.mediaDevices === undefined) {
        navigator.mediaDevices = {};
        navigator.mediaDevices.getUserMedia = function (constraintObj) {
          let getUserMedia =
            navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
          if (!getUserMedia) {
            return Promise.reject(
              new Error("getUserMedia is not implemented in this browser")
            );
          }
          return new Promise(function (resolve, reject) {
            getUserMedia.call(navigator, constraintObj, resolve, reject);
          });
        };
      } else {
        navigator.mediaDevices
          .enumerateDevices()
          .then((devices) => {
            devices.forEach((device) => {
              console.log(device.kind.toUpperCase(), device.label);
              //, device.deviceId
            });
          })
          .catch((err) => {
            this.$router.push("/error");
            console.log(err.name, err.message);
            this.$store.commit("record_controller/SET_ERROR_MSG", err.message);
          });
      }
    },
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: azure;
  display: flex;
  flex-direction: column;
}

#header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px 0 20px;
  background-color: darkslategray;
  #nav {
    padding: 25px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    text-align: center;

    a {
      font-weight: bold;
      color: azure;
      margin-right: 15px;

      &.router-link-exact-active {
        color: #42b983;
        svg {
          fill: #42b983;
        }
      }
    }
  }
}
</style>
