import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import VuexTest from '@/components/VuexTest'
import ViewBlog from '../components/ViewBlog'
import HelloUnitTesting from '@/components/HelloUnitTesting'

Vue.use(Router)
/* eslint-disable indent */
export default new Router({
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage

        },
        {

            path: '/VuexTest',
            name: 'VuexTest',
            component: VuexTest

        },
        {

            path: '/HomePage/blog/:id',
            name: 'all_blogs',
            component: ViewBlog

        },
        {

            path: '/unit-testing',
            name: 'hello',
            component: HelloUnitTesting

        }
    ]
})
