<template>
<section class="sig">
  <form id="appp" @submit.prevent="handleSubmit" class="row g-2 needs-validation" validate>
    <img class="logo" src="../assets/forgot.png" />
      <h1>Forgot Password</h1>
    <div class="col-md-10">
      <div class="form-floating mb-3">
        <input type="email" class="form-control"  v-model="users.email" id="floatingInput" placeholder="name@example.com" required>
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating mb-3">
        <input type="password" class="form-control" v-model="users.password" id="floatingPassword" placeholder="New Password" required>
        <label for="floatingPassword">New Password</label>
      </div>
    </div>
    <div class="col-12">
      <button class="btn btn-primary btn-lg" v-on:click="updatePassword">Submit</button>
    </div>
  </form>
</section>
</template>

<script>
import axios from 'axios'
export default {
    name:"Forgot-Password",
    components:{},
    data(){
      return{
        users:{ 
          email:"",
          password:"",
        }
      }
    },
    methods:{
         async updatePassword(){
            // console.log("function called",this.restaurants )
            // http://localhost:3000/users/1/
            // put
            const result = await axios.put("http://localhost:3000/users/"+this.$route.params.id,{
                email:this.users.email,
                password:this.users.password,

            });
            if(result.status==200)
            {
                this.$router.push({name:'Home'});
            }
        }
    },
    async mounted()
    {
        let user = localStorage.getItem('user-info');
        if(!user)
        {
            this.$router.push({name:"/"});
        }
        const result = await axios.get("http://localhost:3000/users/"+this.$route.params.id);
        // console.log(this.$route.params.id)
        // console.log(result.data)
        this.users=result.data;
    }

};
</script>

<style scoped>
h1 {
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
.logo{
  width: 250px;
  height: 150px;
}
.sig{
  justify-content: center;
  display: flex;
}


</style>