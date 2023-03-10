import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/about2',
        name: 'about2',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about2", webpackPrefetch:true */ '../views/AboutView2.vue')
        // webpackPrefetch:true 를 설정해주면 브라우저의 캐시에 리소스를 미리 담아둘 수 있다. 특정메뉴 진입시 로딩시간을 가불해서 사이트 진입시에 해줌(PreLoad, preConnect 옵션도 존재)
    },
    {
        path: '/about3',
        name: 'about3',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about3", webpackPreLoad:true */ '../views/AboutView3.vue')
        // webpackPrefetch:true 를 설정해주면 브라우저의 캐시에 리소스를 미리 담아둘 수 있다. 특정메뉴 진입시 로딩시간을 가불해서 사이트 진입시에 해줌(PreLoad, preConnect 옵션도 존재)
    },
    {
        path: '/about4',
        name: 'about4',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about4", webpackPreConnect:true */ '../views/AboutView4.vue')
        // webpackPrefetch:true 를 설정해주면 브라우저의 캐시에 리소스를 미리 담아둘 수 있다. 특정메뉴 진입시 로딩시간을 가불해서 사이트 진입시에 해줌(PreLoad, preConnect 옵션도 존재)
    },
    {
        path: '/databinding/string',
        name: 'DataBindingStringView',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "databinding", webpackPreFetch:true */ '../views/1_databinding/DataBindingStringView.vue')
    },
    {
        path: '/databinding/html',
        name: 'DataBindingHtmlView',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "databinding", webpackPreFetch:true */ '../views/1_databinding/DataBindingHtmlView.vue')
    },
    {
        path: '/databinding/input',
        name: 'DataBindingInputView',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "databinding", webpackPreFetch:true */ '../views/1_databinding/DataBindingInputView.vue')
    },
    {
        path: '/databinding/select',
        name: 'DataBindingSelectView',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "databinding", webpackPreFetch:true */ '../views/1_databinding/DataBindingSelectView.vue')
    },
    {
        path: '/databinding/checkbox',
        name: 'DataBindingCheckboxView',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "databinding", webpackPreFetch:true */ '../views/1_databinding/DataBindingCheckboxView.vue')
    },
    {
        path: '/databinding/radio',
        name: 'DataBindingRadioView',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "databinding", webpackPreFetch:true */ '../views/1_databinding/DataBindingRadioView.vue')
    },
    {
        path: '/databinding/attribute',
        name: 'DataBindingAttributeView',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "databinding", webpackPreFetch:true */ '../views/1_databinding/DataBindingAttributeView.vue')
    },
    {
        path: '/databinding/list',
        name: 'DataBindingListView',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "databinding", webpackPreFetch:true */ '../views/1_databinding/DataBindingListView.vue')
    },
    {
        path: '/databinding/class',
        name: 'DataBindingClassView',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "databinding", webpackPreFetch:true */ '../views/1_databinding/DataBindingClassView.vue')
    },
    {
        path: '/databinding/style',
        name: 'DataBindingStyleView',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "databinding", webpackPreFetch:true */ '../views/1_databinding/DataBindingStyleView.vue')
    },
    {
        path: '/event/click',
        name: 'EventClickView',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "event", webpackPreFetch:true */ '../views/2_event/EventClickView.vue')
    },
    {
        path: '/event/change',
        name: 'EventChangeView',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "event", webpackPreFetch:true */ '../views/2_event/EventChangeView.vue')
    },
    {
        path: '/event/key',
        name: 'EventKeyView',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "event", webpackPreFetch:true */ '../views/2_event/EventKeyView.vue')
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
