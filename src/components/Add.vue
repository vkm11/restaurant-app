<template>
    <Header />
    <h1>Hello User, Welcome to Add Restaurant Page</h1>
    <form class="add">
        <input type="text" placeholder="Enter Name" v-model="restaurants.name" name="name"/>
        <input type="text" placeholder="Enter Address" v-model="restaurants.address" name="address"/>
        <input type="text" placeholder="Enter Contact" v-model="restaurants.contact" name="contact"/>
    
        <button type="button" class="button1" v-on:click="addRestaurant">
            Add New Restaurants
        </button>
    </form>
</template>

<script>
import axios from 'axios';
import Header from './Header.vue';
export default{
    name: "Add-Page ",
    components:{
        Header,
    },
    data(){
        return{
            restaurants:{
                name:'',
                address:'',
                contact:''
            }
        }
    },
    methods:{
        async addRestaurant(){
            console.log(this.restaurants)
            const result = await axios.post("http://localhost:3000/restaurants",{
                name:this.restaurants.name,
                address:this.restaurants.address,
                contact:this.restaurants.contact,
            });
            if(result.status==201)
            {
                this.$router.push({name:'Home'});
            }
            console.log("result",result);
        }
    },
    mounted()
    {
        let user = localStorage.getItem('user-info');
        if(!user)
        {
            this.$router.push({name:"SignUp"});
        }
    }
}
</script>
<style scoped>
</style>