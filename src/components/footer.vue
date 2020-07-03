<template>
<div class="main-footer mt-4">
    <section class="bg-light border-top border-info py-3">
           <b-container class=" footer-content">
             <b-img src="../assets/logo.png"></b-img>
             <p class="mt-5">All Rights Reserved 2020</p>
           </b-container>
         
           <b-nav class="footer-nav" >
            <b-nav-item active ><router-link to="/">Home</router-link></b-nav-item>
            <b-nav-item><router-link to="/listings">Listings</router-link></b-nav-item>
            <b-nav-item><router-link to="/addlistings">Add Listings</router-link></b-nav-item>
            <b-nav-item><router-link to="/about">About</router-link></b-nav-item>
            <b-nav-item ><router-link to="/contactus">Contact Us</router-link></b-nav-item>
          </b-nav>
    </section>
</div>
</template>

<script>
export default {
    name:'main-footer'
}
</script>

<style scoped>
section{
  width:100%;
  min-height:15vh;
  position:relative;
}
.footer-nav{
  position: absolute;
  bottom:0;
  left:50%;
  transform: translateX(-50%);
}

.footer-content{
  display:flex;
  justify-content: space-between;
  align-items: center;
}
</style>