<template>
    <Header />
    <h1>Hello User, Update Restaurant Page</h1>
    <form class="add">
        <input type="text" placeholder="Enter Name" v-model="restaurants.name" name="name"/>
        <input type="text" placeholder="Enter Address" v-model="restaurants.address" name="address"/>
        <input type="text" placeholder="Enter Contact" v-model="restaurants.contact" name="contact"/>
    
        <button type="button" class="button1" v-on:click="updateRestaurant">
            Update New Restaurants
        </button>
    </form>
</template>

<script>
import axios from 'axios';
import Header from './Header.vue';
export default{
    name: "Update-Page ",
    components:{
        Header,
    },
    data(){
        return{
            restaurants:{
                name:'',
                address:'',
                contact:'',
            }
        }
    },
    methods:{
         async updateRestaurant(){
            // console.log("function called",this.restaurants )

            // http://localhost:3000/restaurants/1/
            // put
            const result = await axios.put("http://localhost:3000/restaurants/"+this.$route.params.id,{
                name:this.restaurants.name,
                address:this.restaurants.address,
                contact:this.restaurants.contact,
            });
            if(result.status==200)
            {
                this.$router.push({name:'Home'});
            }
        }
    },
    async mounted()
    {
        let user = localStorage.getItem('user-info');
        if(!user)
        {
            this.$router.push({name:"SignUp"});
        }
        const result = await axios.get("http://localhost:3000/restaurants/"+this.$route.params.id);
        // console.log(this.$route.params.id)
        // console.log(result.data)
        this.restaurants=result.data;
    }
}
</script>
<style scoped>
</style>