<template>
    <div class="unitTesting">
        {{message}}
        <br><br>
        <todo-form @todo-created="addToDo"></todo-form>
        <todo-list :todos="todos"></todo-list>
    </div>

</template>

<script>/* eslint-disable indent */
    import Vue from 'vue'

    Vue.component('todo-form', {

        template: '<form @submit.prevent="todoEvent"><input type="text" v-model="newTodo" required>' +
        '<input type="submit" value="Add"></form>',

        data: () => {
            return {
                newTodo: ''
            }
        },

        methods: {

            todoEvent: function () {
                this.$emit('todo-created', this.newTodo)
                this.newTodo = ''
            }
        }

    })

    Vue.component('todo-list', {

        template: '<ul><li v-for="todo in todos">{{todo}}</li></ul>',

        props: ['todos']

    })

    export default {

        name: 'HelloUnitTesting',

        data () {
            return {

                message: 'I love Coding',

                title: 'Unit Testing',

                todos: []
            }
        },

        created () {
            this.message = 'This is a ToDo Application'
        },
        methods: {

            addToDo: function (todo) {
                this.todos.push(todo)
            }
        }
    }
</script>

<style scoped>
    .unitTesting{padding-top: 50px; }
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
