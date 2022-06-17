<template>

<router-view></router-view>

</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
.fa {
  padding: 10px;
  font-size: 40px;
  border-radius: 50px;
  width: 60px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
}

.fa:hover {
    opacity: 0.7;
}

.fa-facebook {
  background: #3B5998;
  color: white;
}

.fa-twitter {
  background: #55ACEE;
  color: white;
}
.fa-instagram {
  background: #d61d26;
  color: white;
}
.fa-linkedin {
  background: #007bb5;
  color: white;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 10px;
  padding: 10px;
  /* margin-top: 60px; */
}
h1{
  color: orange;
}
body{
  padding: 0;
  margin: 0;
}
.logo{ 
    width:160px;
}
.register input, .Sign-In input, .add input{ 
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
.register button, .Sign-In button, .add button  {
    /* width: 100px; */
    width: 300px;
    border-radius: 1rem;
    height:40px;
    border-style: outset;
    font-size: 20px;
    /* border:1px solid skyblue; */
    color: #fff;
    /* background: skyblue; */
    cursor:pointer;
}
.button1:hover,
.button1:focus {
  opacity: 0.9;
  outline: 0;
}
.button1:active {
  box-shadow: none;
  margin-top: 4px;
}
.register button.button1, .Sign-In button.button1{
  background-color: white; 
  color: black; 
  /* border: 2px solid #4CAF50; */
}
.register button.button1:hover, .Sign-In button.button1:hover {
  background-color: #4CAF50;
  color: white;
}
</style>