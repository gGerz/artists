<template>
  <div class="crud-page">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="page-title">CRUD Page</h1>
        </div>
        <div class="col-12">
          <section class="section create">
            <Create @pushArtist="pushArtist"/>
          </section>
          <section class="section update">
            <Update/>
          </section>
          <section class="section delete">
            <Delete :artistsList="artistsList" @spliceArtist="spliceArtist"/>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Create from "../components/CRUD/Create";
  import Update from "../components/CRUD/Update";
  import Delete from "../components/CRUD/Delete";
  import axios from "axios";
  export default {
    name: 'CRUD',
    components: {
      Create,
      Update,
      Delete
    },
    data() {
      return {
        artistsList: []
      }
    },
    methods: {
      getArtistsList () {
        axios({
          method: 'get',
          url: `${this.$store.getters.getDomain}/artists`,
        })
          .then((response) => {
            this.artistsList = response.data
          })
          .catch((error) => {
            console.error(error)
          })
      },
      pushArtist (artist) {
        this.artistsList.push(artist)
      },
      spliceArtist (id) {
        let indexToDelete = this.artistsList.findIndex(item => item._id === id)
        this.artistsList.splice(indexToDelete, 1)
      }
    },
    created () {
      this.getArtistsList()
    }
  }
</script>

<style lang="scss">

</style>