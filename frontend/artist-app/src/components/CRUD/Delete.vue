<template>
    <div class="delete">
        <h2>Delete</h2>
        <ul class="card list-group">
            <li class="list-group-item" v-for="artist in artistsList">
                <img src="../../../src/assets/delete.jpg" alt="delete" @click="deleteArtist(artist._id)">
                {{artist.name}} - {{artist.track}} {{artist._id}}
            </li>
        </ul>
    </div>

</template>

<script>
import axios from "axios";
import showToastr from '@/helpers/showToastr'
export default {
    name: "Delete",
    props: {
        artistsList: Array
    },
    methods: {
        deleteArtist (id) {
            axios({
                method: 'delete',
                url: `${this.$store.getters.getDomain}/artists/${id}`,
                headers: {'Content-Type': 'application/json'}
            })
                .then((response) => {
                    if (response.data.success) {
                        showToastr('success', response.data.text)
                        this.$emit('spliceArtist', id)
                    } else {
                        showToastr('danger', 'Упс')
                    }
                })
                .catch((response) => {
                    console.log(response);
                });

        }
    }
}
</script>

<style lang="scss" scoped>
    .delete {
        .list-group {
            img {
                max-width: 30px;
                cursor: pointer;
            }
        }
    }
</style>