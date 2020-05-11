<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Menu</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Artists</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/crud">CRUD</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
  #app {
    background: url('assets/background.jpeg') no-repeat;
    background-size: cover;
    position: relative;
    height: 100%;
    min-height: 100vh;
    font-family: sans-serif;

    .page-title {
      color: #ffffff;
      margin: 15px 0 30px 0;
      font-weight: bold;
    }
  }
</style>