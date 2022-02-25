<template>
  <div id="app">
    <div id="header">
      <h1>R</h1>
      <div id="nav">
        <router-link to="/">
          <img src="@/assets/svg/home.svg" class="select-icon" />
        </router-link>
        <router-link to="/setting">
          <img src="@/assets/svg/settings.svg" class="select-icon" />
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
              console.log(
                "Check Inputs - ",
                device.kind.toUpperCase(),
                device.label
              );
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
  flex-direction: row;
  align-items: stretch;
  height: 100%;
}

#header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 10px 0 10px;
  background-color: rgb(48, 47, 79);
  border-bottom: solid 3px #c6c2f1;
  #nav {
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: center;

    a {
      font-weight: bold;
      color: rgb(250, 240, 255);
      margin-right: 0;

      &.router-link-exact-active {
        color: #4a42b9;
        svg {
          fill: #4a42b9;
        }
      }
      .select-icon {
        height: 30px;
        padding: 10px 0 10px 0;
      }
    }
  }
}
</style>
