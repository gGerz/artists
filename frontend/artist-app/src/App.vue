<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>