<template>
    <div>
        <h2>Create</h2>
        <form class="card p-3" @submit.prevent="createArtist">
            <div class="form-group">
                <label>name</label>
                <input type="text" v-model="createModel.name" class="form-control" placeholder="Enter name">
            </div>
            <div class="form-group">
                <label>photo link</label>
                <input type="text" v-model="createModel.photo" class="form-control" placeholder="Enter photo link">
            </div>
            <div class="form-group">
                <label>genre</label>
                <input type="text" v-model="createModel.genre" class="form-control" placeholder="Enter genre">
            </div>
            <div class="form-group">
                <label>track</label>
                <input type="text" v-model="createModel.track" class="form-control" placeholder="Enter track">
            </div>
            <button type="submit" class="btn btn-primary">Create</button>
        </form>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Create",
        data () {
            return {
                createModel: {
                    name: 'Новый артист',
                    photo: '',
                    genre: '456',
                    track: '456'
                }
            }
        },
        methods: {
            createArtist () {
                let formData = new FormData()
                formData.append('name', this.createModel.name)
                formData.append('photo', this.createModel.photo)
                formData.append('genre', this.createModel.genre)
                formData.append('track', this.createModel.track)
                axios({
                    method: 'post',
                    url: `${this.$store.getters.getDomain}/artists`,
                    data: formData,
                    headers: {'Content-Type': 'application/json' }
                })
                    .then((response) => {
                        console.log(response);
                    })
                    .catch((response) => {
                        console.log(response);
                    });
            }
        }
    }
</script>

<style scoped>

</style>