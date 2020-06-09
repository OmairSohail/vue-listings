<template>
  <div class="addlistings">
    <navbar/>
    <b-card>
      <b-card-title class="text-center">Listings</b-card-title>
    </b-card>

    <b-container>
        <b-row class="">
           <b-col sm="4">
             <b-card img-src="../assets/premium.png" img-alt="Premium Listings" img-top class="text-center">   
               <b-card-title>Premium Listings</b-card-title>
               <b-card-text>Premium Listings in an affordable Price</b-card-text>
               <b-card-footer>
                 <router-link to="/addlistings/premium" class=""><b-button size="md" variant="warning">Premium Listings</b-button></router-link>
               </b-card-footer>
             </b-card>
           </b-col>
           <b-col sm="4">
              <b-card img-src="../assets/featured.png" img-top img-alt="Featured Listings" class="text-center">
               <b-card-title>Featured Listings</b-card-title>
               <b-card-text>Feautred Listings in an affordable Price</b-card-text>
               <b-card-footer>
                 <router-link to="/addlistings/featured"><b-button size="md" variant="info">Featured Listings</b-button></router-link>
               </b-card-footer>
             </b-card> 
           </b-col>
           <b-col sm="4">
             <b-card img-src="../assets/standard.png" img-top img-alt="standard Listings" class="text-center">
               <b-card-title>Standard Listings</b-card-title>
               <b-card-text>Standard Listings Free Of Cost</b-card-text>
               <b-card-footer>
                 <router-link to="/addlistings/standard"><b-button size="md" variant="primary">Standard Listings</b-button></router-link>
               </b-card-footer>
             </b-card>
           </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
   name:'addlistings'
}
</script>

<style>

</style>