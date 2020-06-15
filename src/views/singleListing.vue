<template>
  <div class="singleListing">
      <navbar/>
     <section class="p-5">
         <div class="">
            <div class="d-flex justify-content-start">
                <div class="ad-img">
                    <b-img :src="this.listing.imageUrl" fluid alt="Bussiness Image"></b-img>
                </div>
                <div class="ad-details pl-4">
                    <h2 class="h1">{{this.listing.bussinessName}}</h2>
                    <h3 class="h3">{{this.listing.dateAdded}}</h3>
                    <h5>Type : {{this.listing.listingType}}</h5> 
                    <h5>Category : {{this.listing.bussinessCategory}}</h5> 
                    <h5>Address : {{this.listing.address1}} - {{this.listing.address2}}</h5>
                    <h5>Area Code : {{this.listing.areaCode}}</h5>
                    <h5>Location : {{this.listing.city}}</h5> 
                </div>      
            </div>

            <h2 class="my-4">Description</h2>
            <p v-html="this.listing.bussinessDescription"></p>
            
            <h2 class="my-4">Listing - by</h2>
            <!-- <div class="d-flex">
               <b-avatar :src="this.user.ProfileImage"></b-avatar>
               <h5>{{this.user.Username}}</h5>
            </div> -->
         </div>      
     </section>
  </div>
</template>

<script>
export default {
    name:'singleListing',
    data(){
        return{
          listingsID:this.$route.params.id,
          listings:this.listings,
          users:this.users
        }
    },
    firestore()
    {
        return{
             listings:firestore.collection('listings'),
             users:firestore.collection('Users')
        }
        
    },
    computed:{
        listing()
        {
            const singleListing = this.listings.filter(x => x.id == this.listingsID)
            return singleListing[0];
        },
        user()
        {
            const u = this.users.filter(x => x.Email == this.listing.userEmail)
            return u[0];
        }
    }
}
</script>

<style>

</style>