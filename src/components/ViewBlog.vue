<template>
    <div>
        <h1>{{title}}</h1>
        <hr>
        <h1>{{blog.title}}</h1>
        <br/>
        <div class="blogPanel">
            {{blog.body}}
        </div>
<hr>
    </div>
</template>

<script>/* eslint-disable indent */
    import axios from 'axios'
    export default {
        name: 'ViewBlog',

        data () {
            return {
                blogId: null,
                blog: ''
            }
        },

        computed: {
            title () {
                return this.$store.state.title
            }

        },
        mounted () {
            this.blogId = this.$route.params.id
            axios
                .get('https://jsonplaceholder.typicode.com/posts/' + this.blogId)
                .then(response => {
                    this.blog = response.data
                })
                // .catch(error => {
                //     console.log(error), this.errored = true
                // })
        }
    }
</script>

<style scoped>
.blogPanel{
    width: 500px;
    margin: 0 auto;
    text-align: justify;
}
</style>
