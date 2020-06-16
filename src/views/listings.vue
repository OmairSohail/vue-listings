<template>
  <div class="listings pl-5">
         <navbar/>
          <h1 class="h1 text-center">Standard listings</h1>  
          <carousel :navigationEnabled="true">
             <slide v-for="listing in this.StandardListings" :key="listing.id">
                <b-card class="listings-card" no-body  :img-src="listing.imageUrl" img-width="150" img-height="250" top>
                   <b-card-title class="">{{listing.bussinessName}}</b-card-title>
                     
                    <!-- <b-card-body v-html="listing.bussinessDescription"></b-card-body>  -->
                     <div class="card-info">
                       <b-avatar class="card-avatar" variant="info" size="70" src="https://placekitten.com/300/300"></b-avatar>
                       <div>
                        <span class="card-username">{{listing.ownerName}}</span>
                        <br>
                        <span class="card-date">{{listing.dateAdded}}</span>
                       </div>  
                       <div class="m-0 card-email">{{listing.bussinessEmail}}</div>
                     </div>   
                      <div class="p-2"><span class="tags" v-for="tag in listing.bussinessTags" :key="tag">{{tag}} </span></div>
                       <b-container fluid>
                          <b-button variant="secondary" @click="goToListing(listing.id)">Read More...</b-button>
                       </b-container>
                    
              </b-card>
            </slide>
          </carousel>

          <h1 class="h1 text-center">Featured listings</h1>  
          <carousel :navigationEnabled="true">
             <slide v-for="listing in this.FeaturedListings" :key="listing.id">
                <b-card class="listings-card" no-body  :img-src="listing.imageUrl" img-width="150" img-height="250" top>
                   <b-card-title class="">{{listing.bussinessName}}</b-card-title>
                     
                    <!-- <b-card-body v-html="listing.bussinessDescription"></b-card-body>  -->
                     <div class="card-info">
                       <b-avatar class="card-avatar" variant="info" size="70" src="https://placekitten.com/300/300"></b-avatar>
                       <div>
                        <span class="card-username">{{listing.ownerName}}</span>
                        <br>
                        <span class="card-date">{{listing.dateAdded}}</span>
                       </div>  
                       <div class="m-0 card-email">{{listing.bussinessEmail}}</div>
                     </div>   
                      <div class="p-2"><span class="tags" v-for="tag in listing.bussinessTags" :key="tag">{{tag}} </span></div>
                       <b-container fluid>
                          <b-button variant="secondary" @click="goToListing(listing.id)">Read More...</b-button>
                       </b-container>
                    
              </b-card>
            </slide>
          </carousel>
           
          <h1 class="h1 text-center">Premium listings</h1>  
          <carousel :navigationEnabled="true">
             <slide v-for="listing in this.PremiumListings" :key="listing.id">
                <b-card class="listings-card" no-body  :img-src="listing.imageUrl" img-width="150" img-height="250" top>
                   <b-card-title class="">{{listing.bussinessName}}</b-card-title>
                     
                    <!-- <b-card-body v-html="listing.bussinessDescription"></b-card-body>  -->
                     <div class="card-info">
                       <b-avatar class="card-avatar" variant="info" size="70" src="https://placekitten.com/300/300"></b-avatar>
                       <div>
                        <span class="card-username">{{listing.ownerName}}</span>
                        <br>
                        <span class="card-date">{{listing.dateAdded}}</span>
                       </div>  
                       <div class="m-0 card-email">{{listing.bussinessEmail}}</div>
                     </div>   
                      <div class="p-2"><span class="tags" v-for="tag in listing.bussinessTags" :key="tag">{{tag}} </span></div>
                       <b-container fluid>
                          <b-button variant="secondary" @click="goToListing(listing.id)">Read More...</b-button>
                       </b-container>
                    
              </b-card>
            </slide>
          </carousel> 

  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    name:'listings',
    firestore(){
      return{
        listings:firestore.collection('listings'),    
      }
    },
    components:{
      Carousel,
      Slide
    },
    data()
    {
      return{
        listings:this.listings
      }
    },
    computed:{
      StandardListings()
      {
        const sL = this.listings.filter(x => x.listingType == 'Standard')
        return sL;
      },
      FeaturedListings()
      {
        const fl = this.listings.filter(x => x.listingType == 'Featured')
        return fl
      },
      PremiumListings()
      {
        const pl = this.listings.filter(x => x.listingType == 'Premium')
        return pl;
      }
    },
    methods:{
      goToListing(id)
      { 
        this.$router.replace(`/listings/${id}`)
      }
    }
}
</script>

<style scoped>
.card-info
{
   display:grid;
   grid-template-columns: repeat(3,auto);
   place-items: center;
}

.grid-container-listings{
  width:100%;
  display:grid;
  grid-template-columns: repeat(3,400px);
}

.tags{
  display:inline-block;
  text-align: center;
  padding:5px 15px;
  background-color:cyan;
  color:white;
  border-radius: 15px;
  margin:0.5rem 0.3rem;
}

.listings-card{
  max-width:400px;
  
}
</style>