<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <img src="@/assets/svg/home.svg" height="30px" />
      </router-link>
      <router-link to="/setting">
        <img src="@/assets/svg/settings.svg" height="30px" />
      </router-link>
    </div>
    <router-view />
  </div>
</template>
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
</style>
