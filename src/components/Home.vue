<template>
  <Header />
  <div class="container1">
    <div
      id="carouselExampleControls"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="images">
          <div class="carousel-item active">
            <img
              src="../assets/image1.jpg"
              class="d-block w-100"
              alt="image1"
            />
            <div class="content">
              <h1>Welcome</h1>
              <p></p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="../assets/image2.jpg"
              class="d-block w-100"
              alt="image2"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/image3.jpg"
              class="d-block w-100"
              alt="image3"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/image4.jpg"
              class="d-block w-100"
              alt="image3"
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/image5.jpg"
              class="d-block w-100"
              alt="image3"
            />
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div class="content">
    <h1>Stay Connected:</h1>
    <a
      href="https://www.facebook.com/vijaykumar.mane.351"
      class="fa fa-facebook"
    ></a>
    <a href="#" class="fa fa-twitter"></a>
    <a
      href="https://www.linkedin.com/in/vijaykumar-mane-87b625229/"
      class="fa fa-linkedin"
    ></a>
    <a
      href="https://www.instagram.com/vijay111mane/"
      class="fa fa-instagram"
    ></a>
  </div>
<br>
<h2>Restaurants Near You</h2>
<div class="container-cards">
<div class="card" style="width: 18rem;">
  <img src="../assets/card1.jpg" class="card-img-top" alt="card1">
  <div class="card-body">
    <h2 class="card-title">Cafe G</h2>
    <p class="card-text">Race Course Road, West Bangalore</p>
    <a href="#" class="btn btn-primary">somewhere</a>
  </div>
</div>

<div class="card" style="width: 18rem;">
  <img src="../assets/card2.jpg" class="card-img-top" alt="card2">
  <div class="card-body">
    <h2 class="card-title">Badmaash</h2>
    <p class="card-text">Vittal Mallya Road, Central Bangalore</p>
    <a href="#" class="btn btn-primary">somewhere</a>
  </div>
</div>

<div class="card" style="width: 18rem;">
  <img src="../assets/card5.jpg" class="card-img-top" alt="card5">
  <div class="card-body">
    <h2 class="card-title">Any Time</h2>
    <p class="card-text">Shantinagar double road, Bangalore</p>
    <a href="#" class="btn btn-primary">somewhere</a>
  </div>
</div>
</div>
  <img class="add_resto" style="width: 400px" src="../assets/resto1.png" />
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
        <td><img :src="item.image" /></td>
        <td>
          <router-link :to="'/update/' + item.id">
            <img class="logo" src="../assets/upDate.png" />
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
import swal from "sweetalert";
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
      //  swal("Deleted Sucessfully!", "You clicked the button!", "success");

      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your Restaurant record file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
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
  height: 30px;
}
td img {
  width: 100px;
  height: 50px;
}

.container1 {
  position: relative;
}

.container1 .content {
  position: absolute;
  bottom: 0;
  color: #f1f1f1;
}
.container-cards{
  display: flex;
  position: relative;
  justify-content: center;
  margin: 10px;
  white-space: 10px;

}
</style>