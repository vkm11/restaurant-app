<template>
    <div class="nav">
        <router-link to="/">Home</router-link> 
        <router-link to="/add">Add Restaurant</router-link> 
        <!-- <router-link to="/update">Update Restaurant</router-link>  -->
        <a v-on:click="logout" href="#">Logout</a>
    </div>
</template>

<script>
export default{
    name:"Header-page",
    methods:{
        logout(){
            // console.log("Logout")
            localStorage.clear();
            this.$router.push({name:'SignIn'});
        }
    }
}
</script>

<style>
.nav{
    background-color: #333;
    overflow: hidden;
}
.nav a{
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 16px 14px;
    text-decoration: none;
    font-size: 18px;
    margin-right: 5px;
}
.nav a:hover{
    background-color: rgb(230, 215, 215);
    color: #222;
}
</style>