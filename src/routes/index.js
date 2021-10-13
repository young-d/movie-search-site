import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home'
import Movies from './Movies'
import Detail from './Detail'

export default createRouter({
    history: createWebHistory(),
    scrollBehavior: () => ({ top: 0 }),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            name: 'movies',
            path: '/movies',
            component: Movies,
        },
        {
            name: 'detail',
            path: '/detail/:id',
            component: Detail
        }
    ]
})
