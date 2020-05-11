<template>
  <div class="crud-page">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="page-title">CRUD Page</h1>
        </div>
        <div class="col-12">
          <section class="section create">
            <Create/>
          </section>
          <section class="section update">
            <Update/>
          </section>
          <section class="section delete">
            <Delete/>
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
  export default {
    name: 'CRUD',
    components: {
      Create,
      Update,
      Delete
    },
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style lang="scss">

</style>