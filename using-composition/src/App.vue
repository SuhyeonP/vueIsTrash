<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/without/composition">Without - composition</router-link> |
    <router-link to="/with/composition">With - composition</router-link> |
    <router-link to="/withtoRefs/composition">With - composition</router-link> |
    <router-link to="/compositionApiProvider">Composition Inject Provider</router-link> |
    <router-link to="/api/mixins">Mix ins</router-link> |
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
