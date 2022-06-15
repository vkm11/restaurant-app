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
        <label for="validationTooltip01" class="form-label">Restaurant Name</label>
        <input type="text" class="form-control" id="validationTooltip01" v-model="restaurants.name" name="name" required>
        <div class="valid-tooltip">
            Looks good!
        </div>
    </div>
    <div class="col-md-4 position-relative">
        <label for="validationTooltip02" class="form-label">Restaurant Address</label>
        <input type="text" class="form-control" id="validationTooltip02" v-model="restaurants.address" name="address" required>
        <div class="valid-tooltip">
        Looks good!
        </div>
    </div>
    <div class="col-md-4 position-relative">
        <label for="validationTooltip03" class="form-label">Contact No.</label>
        <input type="text" class="form-control" id="validationTooltip03" v-model="restaurants.contact" name="contact" required>
        <div class="valid-tooltip">
            Looks good!
        </div>
    </div>
    <div class="col-md-6 position-relative">
        <label for="validationTooltip03" class="form-label">City</label>
        <input type="text" class="form-control" id="validationTooltip03" v-model="restaurants.city" name="city" required>
        <div class="invalid-tooltip">
            Please provide a valid city.
        </div>
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
        <div class="invalid-tooltip">
            Please select a valid state.
        </div>
    </div>
    <div class="col-md-3 position-relative">
        <label for="validationTooltip05" class="form-label">Zip</label>
        <input type="text" class="form-control" id="validationTooltip05" v-model="restaurants.zip" name="zip" required>
        <div class="invalid-tooltip">
            Please provide a valid zip.
        </div>
    </div>

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
</style>