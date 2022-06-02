<template>
    <Header />
    <h1>Hello {{name}}, Welcome to Home Page</h1>
    <!-- <p v-for="item in restaurants" :key="item" >
        {{item.id}} --- {{item.name}}
    </p> -->
    <table>
        <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Address</td>
            <td>Contact</td>
        </tr>
        <tr v-for="item in restaurants" :key="item.id" >
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.address}}</td>
            <td>{{item.contact}}</td>
        </tr>
    </table>
</template>

<script>
import axios from 'axios';
import Header from './Header.vue';
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
    },
    async mounted() 
    {
        let user = localStorage.getItem('user-info');
        this.name= JSON.parse(user);
        if(user)
        {
            this.$router.push({name:"SignUp"});
        }
        let result = await axios.get("http://localhost:3000/restaurant");
        console.log(result.data);
        this.restaurants = result.data;
    }
}
</script>
<style>

</style>