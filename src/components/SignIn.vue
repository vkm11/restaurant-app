<template>
<img class="logo" src="../assets/restor.png">
    <h1>Sign-In </h1>
      <div class="Sign-In">
        
        <input type="text" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="password" placeholder="Enter Password">
        <button>Sign-In</button>
        <p>
            <router-link to="/sign-up">Sign-Up Page</router-link> <br />
        </p>
    </div>
</template>
<script>
export default {
  name: 'SignIn-Page',
 
}
</script>
<style>
h1{
    color: orange
}
</style>