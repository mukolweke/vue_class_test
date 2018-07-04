<script>/* eslint-disable indent */
    import allBlogs from './blogs'
    import sidebar from './sidebar'

    export default {
        data () {
            return {
                blog: null,
                msg: 'Vuex Class'

            }
        },
        components: {allBlogs, sidebar},
        computed: {
            title () {
                return this.$store.state.title
            }
        }
    }

</script>

<template>
    <div class="hello">
        <h1>{{ title }}</h1>

        <section style="margin-left: 10px;border-left: 1px solid black;">
            <allBlogs>
                <slot></slot>
            </allBlogs>

        </section>
    </div>
</template>

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

</style>
