<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/about2">About2</router-link> |
    <router-link to="/about3">About3</router-link> |
    <router-link to="/about4">About4</router-link> |
  </nav>
  <h1>DataBinding</h1>
  <nav>
    <router-link to="/databinding/string">String</router-link> |
    <router-link to="/databinding/html">Html</router-link> |
    <router-link to="/databinding/input">Input</router-link> |
  </nav>
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

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
