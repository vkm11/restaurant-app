import Home from './components/Home';
import SignUp from './components/SignUp.vue';

import {createWebHistory, createRouter} from 'vue-router';
import SignIn from './components/SignIn.vue'

const routes=[
    {
        name: "Home",
        component: Home,
        path: '/',
    },
    {
        name: "SignUp",
        component: SignUp,
        path: '/sign-up',
    },
    {
        name:'SignIn',
        path:'/sign-in',
        component: SignIn,
    },
];
const router = createRouter ({
    history:createWebHistory(),
    routes
});
export default router;