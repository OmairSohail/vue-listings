<template>
  <div class="home">
    <navbar/>
    
    <section class="showcase d-flex flex-column justify-content-center align-items-center">
        <div class="content text-center">
             <h1>Best Bussiness Lisiting Website</h1>
             <p>Let The World Know About Your Bussiness</p>
             <button class="btn btn-info px-4 py-2 rounded-0">SignUp Now</button>   
        </div>
    </section>

    <section class="listingshowcase pt-3">
        <h2 class="text-center">Premium Listings</h2>
        <div class="p-listings px-5">
          <carousel :navigationEnabled="true" :per-page="3" >
             <slide v-for="listing in this.premiumlistings" :key="listing.id">
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
                       <!-- <b-form-rating inline value="5" v-model="listing.rating" readonly></b-form-rating> -->
                       
                     </div>   
                      <div class="p-2"><span class="tags" v-for="tag in listing.bussinessTags" :key="tag">{{tag}} </span></div>

                      <b-container>
                        <b-row>
                           <b-col class="mb-3">
                                <b-icon-heart-fill class="thumbs mt-4 mx-2" variant="danger" scale="2"></b-icon-heart-fill>
                                <span class="mx-2">{{listing.likes | number('0a')}}</span>
                           </b-col>  
                        </b-row>  
                      </b-container> 
                      
                       <b-container fluid>
                          <b-button block variant="secondary" @click="goToListing(listing.id)">Read More...</b-button>
                       </b-container>
                    
              </b-card>
            </slide>
          </carousel> 
        </div>
              
    </section> 

    <section class="benefits bg-info pt-5">
      <b-container>
        <b-row>
           <b-col>
              <b-card class="benefit-card">
                 <b-card-title class="text-center">
                    <b-icon icon="collection-fill" font-scale="5"></b-icon>
                 </b-card-title>
                 <b-card-text class="text-center">
                   <h2>Effient Access</h2>
                   <p>Access Bussinesses From All Over The World</p>
                 </b-card-text>
              </b-card>
           </b-col>
           <b-col>
             <b-card class="benefit-card">
                 <b-card-title class="text-center">
                   <b-icon icon="graph-up" font-scale="5"></b-icon>
                 </b-card-title>
                 <b-card-text class="text-center">
                   <h2>Grow You Bussiness</h2>
                   <p>Excellent Platform For Growing You Bussiness And Gain Audience</p>
                 </b-card-text>
              </b-card>
           </b-col>
           <b-col>
              <b-card class="benefit-card">
                 <b-card-title class="text-center">
                    <b-icon icon="shop" font-scale="5"></b-icon>
                 </b-card-title>
                 <b-card-text class="text-center">
                   <h2>Digital Marketing</h2>
                   <p>Marketing for your bussiness Digitally</p>
                 </b-card-text>
              </b-card>
           </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="pt-3">
      <h2 class="text-center">Featured Listings</h2>
        <div class="f-listings px-5">
          <carousel :navigationEnabled="true" :per-page="3" >
             <slide v-for="listing in this.featuredlistings" :key="listing.id">
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
                       <!-- <b-form-rating inline value="5" v-model="listing.rating" readonly></b-form-rating> -->
                       
                     </div>   
                      <div class="p-2"><span class="tags" v-for="tag in listing.bussinessTags" :key="tag">{{tag}} </span></div>

                      <b-container>
                        <b-row>
                           <b-col class="mb-3">
                                <b-icon-heart-fill class="thumbs mt-4 mx-2" variant="danger" scale="2"></b-icon-heart-fill>
                                <span class="mx-2">{{listing.likes | number('0a')}}</span>
                           </b-col>  
                        </b-row>  
                      </b-container> 
                      
                       <b-container fluid>
                          <b-button block variant="secondary" @click="goToListing(listing.id)">Read More...</b-button>
                       </b-container>
                    
              </b-card>
            </slide>
          </carousel> 
        </div> 
    </section>
  <main-footer/>
  </div>
</template>

<script>

import { Carousel, Slide } from 'vue-carousel';
export default {
  name: 'Home',
  firestore(){
    return{
          listings:firestore.collection('listings')
          }
  },
  data(){
    return{
       listings:this.listings,   
    }
  },
  computed:{
    premiumlistings()
    {
      const p = this.listings.filter(x => x.listingType === 'Premium')
      return p;
    },
    featuredlistings()
    {
      const p = this.listings.filter(x => x.listingType === 'Featured')
      return p;
    }
  },
  components: {
     Carousel,
     Slide
  }
}
</script>

<style scoped>
.showcase{
  width:100%;
  min-height:90vh;
  background-image:url('../assets/omair2.png');
  background-size:cover;
  background-position: center center;
}

.listingshowcase{
  width:100%;
  min-height:70vh;
}

.listings-card{
  max-width:400px;
}

.card-info
{
   display:grid;
   grid-template-columns: repeat(3,auto);
   place-items: center;
   justify-content: space-between;
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

.benefits{
   min-height:50vh;
}

.benefit-card{
height:320px;
}
</style>
