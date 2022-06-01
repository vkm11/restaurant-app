<template>
<img class="logo" src="../assets/restor.png">
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" placeholder="Enter Name">
        <input type="text" placeholder="Enter Email">
        <input type="password" placeholder="Enter Password">
    <button>Sign Up</button>
    </div>
</template>

<script>
export default {
    name:"SignUp"
}
</script>

<style>
.logo{ 
    width:160px;
}
.register input{ 
    width: 300px;
    height:40px;
    font-size: 18px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border:1px solid skyblue;
}
.register button{
    width: 320px;
    height:40px;
    font-size: 20px;
    border:1px solid skyblue;
    color: #fff;
    background-color: skyblue;
    cursor:pointer;

}
</style>