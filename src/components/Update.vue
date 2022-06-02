<template>
    <Header />
    <h1>Hello User, Welcome to Update Restaurant Page</h1>
</template>

<script>
import Header from './Header.vue';
export default{
    name: "Update-Page ",

    components:{
        Header,
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