# Install JSON Server
 npm install -g json-server
 
 ### create one folder(folder name any) and save it (.json extension)
 - db.json
 {
  "users": [
    {
      "id": 1,
      "name": "Vijay",
      "email": "vijay@gmail.com",
      "password": "vijay@123"
    },
    {
      "id": 2,
      "name": "Kumar",
      "email": "kumar@gmail.com",
      "password": "kumar@123"
    },
    {
      "id": 3,
      "name": "Prajwal",
      "email": "prajwal@gmail.com",
      "password": "prajwal@123"
    },
    {
      "id": 4,
      "name": "Nithin",
      "email": "nithin@gmail.com",
      "password": "nithin@123"
    },
    {
      "id": 5,
      "name": "Gokul",
      "email": "gokul@gmail.com",
      "password": "gokul@123"
    },
    {
      "email": "",
      "name": "",
      "password": "",
      "id": 6
    }
  ],
  "restaurants": [
    {
      "name": "Utra Restaurant",
      "address": "Pune",
      "contact": "9875461351",
      "id": 1
    },
    {
      "name": "Gokul Restaurant",
      "address": "Tamil Nadu",
      "contact": "9898262457",
      "id": 2
    }
  ]
}
 
# Start JSON Server
 json-server --watch db.json
 
# Api Call:- ## axios Package
- first need to be install axios package

npm install axios

# Install Bootstarp
 npm install --save bootstrap
- After bootstrap install add two lines in you main.js file
#### main.js:-
- import 'bootstrap/dist/css/bootstrap.min.css'
- import 'bootstrap'

# Routing:
 npm install vue-router@next
 
1) routes.js

import {createRouter, createWebHistory} from 'vue-router'; 
import Home from './components/Home';
import SignUp from './components/SignUp.vue';

const routes=[
    {
        name: "Home",
        component: Home,
        path: '/'
    },
    {
        name: "SignUp",
        component: SignUp,
        path: '/sign-up'
    },
]
const router = createRouter ({
    history:createWebHistory(),
    routes
})
export default router;


2) main.js

import { createApp } from 'vue'
import App from './App.vue'

import router from './routes'
createApp(App).use(router).mount('#app')

3) app.vue

<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
 
</style>

