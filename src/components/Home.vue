<template>
    <Header />
    <br>
    <h1>Hello {{name}}, Welcome to Home Page</h1>
    <!-- <p v-for="item in restaurants" :key="item" >
        {{item.id}} --- {{item.name}}
    </p> -->
    <br>
    <table class="table">
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Address</th>
            <th>Contact</th>
            <th>Actions</th>
        </tr>
        <tr v-for="item in restaurants" :key="item.id" >
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.address}}</td>
            <td>{{item.contact}}</td>
            <td>
                <router-link :to="'/update/'+item.id">Update</router-link>
                <button v-on:click="deleteRestaurant(item.id)">Delete</button>    
            </td>

        </tr>
    </table>
    <Footer />
</template>

<script>
import axios from 'axios';
import Header from './Header.vue';
import Footer from './Footer';
export default{
    name: "Home-Page",
    data(){
        return{
            name:'',
            restaurants:[],
        };
    },
    components:{
        Header,
        Footer
    },
    methods:{
        async deleteRestaurant(id){
          let result = await axios.delete("http://localhost:3000/restaurants/"+id);
            if(result.status == 200){
                this.loadData()
            }
        },
        async loadData(){

            let user = localStorage.getItem('user-info');
            this.name= JSON.parse(user).name;
            if(!user)
            {
                this.$router.push({name:"SignUp"});
            }
            let results = await axios.get("http://localhost:3000/restaurants");
            // console.log(results);
            this.restaurants = results.data;
        }
    },
    mounted() 
    {
        this.loadData()
    }
}
</script>

<style scoped>
*{
    margin:0;
    border:0;  
}
</style>