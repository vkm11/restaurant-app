<template >
 <div id="app">
  
  <img class="logo" src="../assets/restor.png" />
  <h1>Sign-In</h1>
  <div class="Sign-In">
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button class="button1" v-on:click="login">Sign-In</button>
   
    <p>
      <br>
      create an account <router-link to="/sign-up">Sign-Up </router-link>
     </p>
  </div>

  </div>  
</template>

<script>
import axios from "axios";
export default {
  name: "SignIn-Page",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    
    // login(){
    //   console.log(this.email, this.password)
    // }


    async login() {
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      // console.log(result);
      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ name: "Home" });
      }
      // console.log(this.email, this.password);
      // http://localhost:3000/users?email=vijay@gmail.com&password=vijay@123
      
    },


  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>
<style scoped>
h1 {
  color: orange;
}
#app {
  background: rgb(201, 117, 21);
  height: 500px;
  width: 500px;
  margin-left: 30rem;
  padding: 2rem;
  border-radius: 2rem;
}

</style>

