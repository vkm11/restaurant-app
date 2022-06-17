<template>
    <Header />
    <img class="add_resto" style="width:400px"  src="../assets/resto1.png" />
    <h1>Hello User, Update Restaurant Page</h1>
    <!-- <form class="add">
        <input type="text" placeholder="Enter Name" v-model="restaurants.name" name="name"/>
        <input type="text" placeholder="Enter Address" v-model="restaurants.address" name="address"/>
        <input type="text" placeholder="Enter Contact" v-model="restaurants.contact" name="contact"/>
    
        <button type="button" class="button1" v-on:click="updateRestaurant">
            Update New Restaurants
        </button>
    </form> -->

<form class="row g-3 mt-5 mb-5 needs-validation" validate>
      <div class="col-md-4 position-relative">
    <!-- <div class="wrapper">  -->
      <label for="validationTooltip01">Restaurant Name</label>
      <input type="text" class="form-control" pattern="^([a-zA-Z]|\s)*$" placeholder="Accept only Capital Letters" id="validationTooltip01" v-model="restaurants.name" name="name"/>
    </div>
  <!-- </div> -->
  <div class="col-md-4 position-relative">
    <!-- <div class="wrapper">  -->
      <label for="validationTooltip02">Restaurant Address</label>
      <input type="text" class="form-control" pattern="^([a-zA-Z]|\s)*$" placeholder="Accept All" id="validationTooltip02" v-model="restaurants.address" name="address"/>
    </div>
  <!-- </div> -->
   <div class="col-md-4 position-relative">
    <!-- <div class="wrapper">  -->
      <label for="validationTooltip03">Contact Number</label>
      <input type="text" class="form-control" pattern="[0-9]{10}(\s*,*,\s*[0-9]{10})*" placeholder="Accept only 10 digit numbers" id="validationTooltip03" v-model="restaurants.contact" name="contact"/>
    </div>
  <!-- </div> -->
  <div class="col-md-4 position-relative">
    <!-- <div class="wrapper">  -->
      <label for="validationTooltip04">City</label>
      <input type="text" class="form-control" pattern="^([a-zA-Z]|\s)*$" placeholder="Accept Alphabets only" id="validationTooltip04" v-model="restaurants.city" name="city"/>
    </div>
  <!-- </div> -->
  <div class="col-md-4 position-relative">
    <!-- <div class="wrapper">  -->
    <label for="validationTooltip05" class="form-label">State</label>
    <select class="form-select" id="validationTooltip05" v-model="restaurants.state" name="state" required>
      <option selected disabled value="">Please Select State</option>
      <option>Karnataka</option>
      <option>Maharashtra</option>
      <option>Tamil Nadu</option>
      <option>Andra Pradesh</option>
    </select>
  </div>
  <!-- </div> -->
    <div class="col-md-4 position-relative">
    <!-- <div class="wrapper">  -->
      <label for="validationTooltip06">Zip</label>
      <input type="text" class="form-control" pattern="[0-9]{6}(\s*,*,\s*[0-9]{6})*" placeholder="Accept only 6 digit numbers ex:- 123456" id="validationTooltip06" v-model="restaurants.zip" name="zip"/>
    </div>
  <!-- </div> -->
    <div class="col-12">
        <button class="btn btn-primary" v-on:click="updateRestaurant">Update</button>
    </div>
</form>
<Footer />
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';
import Header from './Header.vue';
import Footer from './Footer.vue';
export default{
    name: "Update-Page ",
    components:{
        Header,
        Footer,
    },
    data(){
        return{
            restaurants:{
                name:'',
                address:'',
                contact:'',
                city: "",
                state: "",
                zip:"",
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
                city:this.restaurants.city,
                state:this.restaurants.state,
                zip:this.restaurants.zip,
                
            });
            if(result.status==200)
            {
                this.$router.push({name:'Home'});
                swal("Update Sucessfully!", "You clicked the button!", "success");
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
body{
  display:flex;
  height:100vh;
  justify-content:center;
  align-items:center;
  background-color:#eee
}
label{
    font-size: 20px;
}
input{
  height:50px;
  width:400px;
  /* padding: 5px; */
  margin: 10px;
  outline:none;
  border:2px solid #000;

  border-radius:6px;
  padding:0px 10px;
  font-size:18px;
}
input:invalid{
  border:2px solid red;
  animation:shake 300ms
}
@keyframes shake{
  25%{
    transform:translateX(4px)
  }
  50%{
    transform:translateX(-4px)
  }
  75%{
    transform:translateX(4px)
  }
}
</style>