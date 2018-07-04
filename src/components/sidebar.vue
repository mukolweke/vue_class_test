<template>

    <div class="sidebar">
        <!--<router-link to="/">Home</router-link>-->
        <router-link to="/">View Blogs</router-link>

    </div>
</template>

<script>/* eslint-disable indent */
    export default {
        name: 'sidebar'
    }
</script>

<style scoped>

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;

    }
    .sidebar{
        float: left;
        text-align: left;
    }

</style>
