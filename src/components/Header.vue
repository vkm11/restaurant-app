<template>
    <div class="navb">
        <router-link to="/">Home</router-link> 
        <router-link to="/add">Add Restaurant</router-link> 
        <!-- <router-link to="/update">Update Restaurant</router-link>  -->
        <a class="ak" v-on:click="logout">Logout</a>
    </div>
</template>

<script>
import swal from 'sweetalert';
export default{
    name:"Header-page",
    methods:{
        logout(){
            // console.log("Logout")
            localStorage.clear();
            this.$router.push({name:'SignIn'});
            swal("Logout Sucessfully!", "You clicked the button!", "success");
        }
    }
}
</script>

<style scoped>
.navb .ak{
    float: right;
}
.navb{
    background-color: #333;
    overflow: hidden;
}
.navb a{
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 16px 14px;
    text-decoration: none;
    font-size: 18px;
    margin-right: 5px;
}
.navb a:hover{
    background-color: rgb(230, 215, 215);
    color: #222;
}
</style>