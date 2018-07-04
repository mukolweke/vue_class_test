
<template>
    <div>
        <div v-bind:key="data.id" class="main_content" v-for='data in blog'>
            <div class='panel'>
                <div class='panel-heading'>
                    {{data.title}}
                </div>
                <div class="panel-body">
                    {{data.body}}
                </div>
                <router-link style="margin-bottom: 5px;" :to="{ name: 'all_blogs', params: { id: data.id }}">Read More
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>/* eslint-disable indent */
    import axios from 'axios'

    export default {
        name: 'all_blogs',
        data () {
            return {
                blog: null
            }
        },

        computed: {
            title () {
                return this.$store.state.title
            }
        },

        mounted () {
            axios
                .get('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    this.blog = response.data
                })
                // .catch(error => {
            //     // console.log(error), this.errored = true
            // })
        }
    }
</script>

<style scoped>

    .panel {
        height: 100px;
        width: 600px;
        margin: 20px auto;
        background: pink;
        text-align: justify;
    }

    .panel-heading {
        background: #ccc;
    }

    .panel-body {
        height: 100px;
    }

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

    .main_content {
        float: left;
        height: auto;
    }

</style>
