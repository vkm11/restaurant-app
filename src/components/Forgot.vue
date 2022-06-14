<template>
<section class="sig">
  <form id="appp" @submit.prevent="handleSubmit" class="row g-2 needs-validation" validate>
    <img class="logo" src="../assets/forgot.png" />
      <h3>Forgot Password</h3>
      <div class="col-md-10 position-relative">
         <input type="email" class="form-control" v-model="email" name="email" placeholder="Enter the email address" />
      </div>  
    <div class="col-12">
      <button class="btn btn-primary" type="submit">Submit</button>
    </div>
  </form>
  </section>
</template>

<script>
import axios from 'axios'
export default {
    name:"Forgot-Password",
    dat(){
        return{
            email:"",
        }
    },
    methods:{
        async handleSubmit(){
            const response = await axios.post('forgot',{
                email: this.email
            });
            console.log(response);
        }
    }
}
</script>

<style scoped>
h3 {
  color: orange;
}
#appp{
  border: 20px ridge rgb(218, 194, 89);
  background: #4cacaf;
  margin-top: 60px;
  width: 500px;
  padding:10px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;

}
.sig{
  justify-content: center;
  display: flex;
}


</style>