<template>
  <div class="artist-page">
    <img v-if="artistInfo.photo" class="background" :src="artistInfo.photo" alt="photo">
    <img v-else class="background" src="../assets/unkown-user.jpeg" alt="photo">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="page-title">{{artistInfo.name}}</h1>
        </div>
        <div class="col-12">
          <div class="card">
            <div class="card-header">
              Об исполнителе
            </div>
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  import showToastr from "@/helpers/showToastr";
  export default {
    name: 'Artist',
    data () {
      return {
        artistInfo: {}
      }
    },
    methods: {
      getArtist () {
        axios({
          method: 'get',
          url: `${this.$store.getters.getDomain}/artists/${this.$route.params.id}`,
        })
          .then((response) => {
            console.log(response)
            this.artistInfo = response.data
          })
          .catch((error) => {
            console.error(error)
          })
      },
    },
    created () {
      this.getArtist()
    }
  }
</script>


<style lang="scss">
  .artist-page {
    padding: 15px 0;
    position: relative;

    .background {
      position: absolute;
      width: 100%;
      max-height: 450px;
      height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
      bottom: 0;
      display: block;
      left: 0;
      right: 0;
      top: 0;
    }
  }
</style>
