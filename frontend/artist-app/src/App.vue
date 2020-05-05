<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <ul>
      <li v-for="artist in artistsList">{{artist.name}}</li>
    </ul>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>



<script>
  import axios from 'axios'
  export default {
    name: 'App',
    data () {
      return {
        artistsList: []
      }
    },
    methods: {
      getArtistsList () {
        axios({
          method: 'get',
          url: `http://localhost:3013/artists`,
        })
          .then((response) => {
            this.artistsList = response.data
            console.log(response)
          })
          .catch((error) => {
            console.error(error)
          })
      }
    },
    mounted () {
      this.getArtistsList()
    }
  }
</script>
