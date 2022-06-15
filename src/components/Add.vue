<template>
  <Header />
  <!-- <h1>Hello User, Welcome to Add Restaurant Page</h1> -->
<!-- <section class="sig">
  <div id="app">
    <form class="add" validate>
      <img class="logo" src="../assets/restor.png" />
      <h1>Add-Restaurants</h1>
      <input type="text" placeholder="Enter Name" v-model="restaurants.name" name="name" required/>
      
      <input type="text" placeholder="Enter Address" v-model="restaurants.address" name="address" required/>
      <input type="text" placeholder="Enter Contact" v-model="restaurants.contact" name="contact" required/>

      <button type="button" class="button1" v-on:click="addRestaurant">
        Add New Restaurants
      </button>
    </form>
  </div>
</section> -->
<img class="add_resto" style="width:400px"  src="../assets/resto1.png" />
<h1>Hello User, Welcome to Add Restaurant</h1>
<form class="row g-3 mt-5 mb-5 need-validation" validate>
  <div class="col-md-4 position-relative">
    <label for="validationTooltip01" class="form-label">Restaurant Name</label>
    <input type="text" class="form-control" id="validationTooltip01" v-model="restaurants.name" name="name" required>
  </div>
  <div class="col-md-4 position-relative">
    <label for="validationTooltip02" class="form-label">Restaurant Address</label>
    <input type="text" class="form-control" id="validationTooltip02" v-model="restaurants.address" name="address" required>
  </div>
  <div class="col-md-4 position-relative">
    <label for="validationTooltip03" class="form-label">Contact No.</label>
    <input type="text" class="form-control" id="validationTooltip03" v-model="restaurants.contact" name="contact" required>
  </div>
  <div class="col-md-6 position-relative">
    <label for="validationTooltip03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationTooltip03" v-model="restaurants.city" name="city" required>
  </div>
  <div class="col-md-3 position-relative">
    <label for="validationTooltip04" class="form-label">State</label>
    <select class="form-select" id="validationTooltip04" v-model="restaurants.state" name="state" required>
      <option selected disabled value="">Please Select State</option>
      <option>Karnataka</option>
      <option>Maharashtra</option>
      <option>Tamil Nadu</option>
      <option>Andra Pradesh</option>
    </select>
  </div>
  <div class="col-md-3 position-relative">
    <label for="validationTooltip05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationTooltip05" v-model="restaurants.zip" name="zip" required>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" v-on:click="addRestaurant" validate>Submit</button>
  </div>
</form>
<Footer />

</template>

<script>
import swal from 'sweetalert';
import axios from "axios";
import Header from "./Header.vue";
import Footer from "./Footer"
export default {
  name: "Add-Page ",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      restaurants: {
        name: "",
        address: "",
        contact: "",
        city: "",
        state: "",
        zip:"",
      },
    };
  },
  methods: {
    async addRestaurant() {
      console.log(this.restaurants);
      const result = await axios.post("http://localhost:3000/restaurants", {
        name: this.restaurants.name,
        address: this.restaurants.address,
        contact: this.restaurants.contact,
        city: this.restaurants.city,
        state: this.restaurants.state,
        zip: this.restaurants.zip,
        
      });
      if (result.status == 201) {
        this.$router.push({ name: "Home" });
        
      }
      console.log("result", result);
       swal("Added Sucessfully!", "You clicked the button!", "success");
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignIn" });
    }
  },
};
</script>
<style scoped>
.imagePreviewWrapper {
    width: 50px;
}
h1 {
  color: orange;
}
#app {
  border: 20px  rgb(218, 194, 89);
  background: #4cacaf;
  /* margin-top: 60px;
  margin-bottom: 60px; */
  
  width: 800px;
  padding: 10px;
  border-radius: 10px;
}
.sig{
  justify-content: center;
  display: flex;
  background-color: #e7ac54;
}
.add_resto{
  padding: 0px;
  margin: 0px;
}
</style>
