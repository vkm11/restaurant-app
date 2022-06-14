<template>
  <Header />
  <img class="add_resto" style="width:400px"  src="../assets/resto1.png" />
  <h1>Hello {{ name }}, Welcome to Home Page</h1>
  <!-- <p v-for="item in restaurants" :key="item" >
        {{item.id}} --- {{item.name}}
    </p> -->
  <br />

  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">Address</th>
        <th scope="col">Contact</th>
        <th scope="col">City</th>
        <th scope="col">State</th>
        <th scope="col">Zip</th>
        <th scope="col">Image</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in restaurants" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.address }}</td>
        <td>{{ item.contact }}</td>
        <td>{{ item.city }}</td>
        <td>{{ item.state }}</td>
        <td>{{ item.zip }}</td>
        <td>{{item.image}}</td>
        <td>
          <router-link :to="'/update/' + item.id">
            <img class="logo" src="../assets/upDate.png"/>
            </router-link>
          <button v-on:click="deleteRestaurant(item.id)">
            <img class="logo" src="../assets/trash.png" />
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <Footer />
</template>

<script>
import axios from "axios";
import Header from "./Header.vue";
import Footer from "./Footer";
export default {
  name: "Home-Page",
  data() {
    return {
      name: "",
      restaurants: [],
    };
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    async deleteRestaurant(id) {
      let result = await axios.delete(
        "http://localhost:3000/restaurants/" + id
      );
      if (result.status == 200) {
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem("user-info");
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.push({ name: "SignUp" });
      }
      let results = await axios.get("http://localhost:3000/restaurants");
      // console.log(results);
      this.restaurants = results.data;
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style scoped>
* {
  margin: 0;
  border: 0;
}
.logo {
  width: 30px;
}
</style>