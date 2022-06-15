import SignIn from './components/SignIn.vue'
import Home from './components/Home';
import SignUp from './components/SignUp.vue';

import {createWebHistory, createRouter} from 'vue-router';
import Add from './components/Add.vue'
import Update from './components/Update.vue'
import Forgot from './components/Forgot.vue'

const routes=[
    {
        name:'SignIn',
        component: SignIn,
        path:'/',
        
    },
    {
        name: "Home",
        component: Home,
        path: '/home',
    },
    {
        name: "SignUp",
        component: SignUp,
        path: '/signup',
    },
   
    {
        name:'Add',
        component: Add,
        path:'/add',
       
    },
    {
        name:'Update',
        component: Update,
        path:'/update/:id',
        
    },
    {
        name:'Forgot',
        component: Forgot,
        path:'/forgot',
        
    },
];
const router = createRouter ({
    history:createWebHistory(),
    routes
});
export default router;