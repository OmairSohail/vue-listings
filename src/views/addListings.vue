<template>
  <div class="addlistings">
    <navbar/>
    <b-card>
      <b-card-title class="text-center">Listings</b-card-title>
    </b-card>

    <b-container>
        <b-row class="">
           <b-col sm="4">
             <b-card img-src="../assets/premium.png" img-alt="Premium Listings" img-top img-height="250" class="text-center">   
               <b-card-title>Premium Listings</b-card-title>
               <b-card-text>Premium Listings in an affordable Price</b-card-text>
               <b-card-footer>
                 <b-button size="md" variant="warning">Premium Listings</b-button>
               </b-card-footer>
             </b-card>
           </b-col>
           <b-col sm="4">
              <b-card>
               <b-card-title>Featured Listings</b-card-title>
             </b-card> 
           </b-col>
           <b-col sm="4">
             <b-card>
               <b-card-title>Standard Listings</b-card-title>
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