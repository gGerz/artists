<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="page-title">Artists</h1>
      </div>
    </div>
    <div class="artist-list">
      <div class="row">
        <div class="col-4" v-for="artist in artistsList">
          <article class="artist-card">
            <router-link :to="`artist/${artist._id}`" class="card-img">
              <img v-if="artist.photo" :src="artist.photo" :alt="artist.name">
              <img v-else src="../assets/unkown-user.jpeg" :alt="artist.name">
            </router-link>
            <div class="card-description">
              <div class="card-description__data">
                <h4>{{artist.name}}</h4>
                <h5>{{artist.track}}</h5>
                <p>{{artist.genre}}</p>
              </div>
              <div class="card-description__like">
                <img src="../assets/like.png" alt="like" v-if="artist.like" @click="setLike(artist.like, artist._id)">
                <img src="../assets/not-like.jpg" alt="not-like" @click="setLike(artist.like, artist._id)" v-else>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import showToastr from "@/helpers/showToastr";
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
          url: `${this.$store.getters.getDomain}/artists`,
        })
          .then((response) => {
            this.artistsList = response.data
          })
          .catch((error) => {
            console.error(error)
          })
      },
      setLike (isLiked, id) {
        let formData = new FormData()
        formData.append('like', !isLiked)
        axios({
          method: 'put',
          url: `${this.$store.getters.getDomain}/artists/like/${id}`,
          data: formData,
          headers: {'Content-Type': 'application/json' }
        })
            .then((response) => {
              if (response.data.success) {
                let artistIndex = this.artistsList.findIndex(item => item._id === id)
                this.artistsList[artistIndex].like = response.data.newLikeState
              } else {
                showToastr('danger', 'Упс')
              }
            })
            .catch((response) => {
              console.log(response);
            });
      }
    },
    created () {
      this.getArtistsList()
    }
  }
</script>


<style lang="scss">
  .artist-list {
    padding: 15px 0;

    .artist-card {
      margin: 15px 0;
      box-shadow: 0 3px 10px rgba(32,79,117,.1);
      border-radius: 10px;
      color: #212165;
      background-color: #ffffff;

      .card-img {
        height: 250px;
        display: block;
        position: relative;
        overflow: hidden;
        border-radius: 10px 10px 0 0;

        img {
          height: 100%;
          -o-object-fit: cover;
          object-fit: cover;
          width: 100%;
          bottom: 0;
          display: block;
          left: 0;
          position: absolute;
          right: 0;
          top: 0;
          -webkit-transition: .5s;
          -o-transition: .5s;
          transition: .5s;
          -webkit-transform: scale(1.2);
          -ms-transform: scale(1.2);
          transform: scale(1.2);

          &:hover {
            transform: scale(1.4);
          }
        }
      }

      .card-description {
        padding: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .card-description__like {
          display: flex;
          align-items: center;
          justify-content: center;

          img {
            max-width: 30px;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>
