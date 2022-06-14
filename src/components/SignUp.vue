<template>
  <section class="sig">
    <div id="app">
      <img class="logo" src="../assets/restor.png" />
      <h1>Sign Up</h1>
      <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name" required/>
        <input type="text" v-model="email" placeholder="Enter Email" required/>
        <input type="password" v-model="password" placeholder="Enter Password" required/>
        <button class="button1" v-on:click="signUp">Sign Up</button>
        <p>
          <br />
          <router-link to="/">Sign-In</router-link> <br />
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      console.log("signUp", this.name, this.email, this.password);
      let result = await axios.post("http://localhost:3000/users", {
        email: this.email,
        name: this.name,
        password: this.password,
      });
      console.log(result);
      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "Home" });
      }
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
  border: 20px ridge rgb(218, 194, 89);
  background: #4cacaf;
  margin-top: 60px;
  width: 500px;
  padding: 10px;
  border-radius: 50px;
}
.sig {
  justify-content: center;
  display: flex;
}
</style>