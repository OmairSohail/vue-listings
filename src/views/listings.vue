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
                       <b-avatar class="card-avatar" variant="info" size="70" :src="getImage(listing.userEmail)"></b-avatar>
                       <div>
                        
                        <span class="card-username">{{listing.ownerName}}</span>
                        <br>
                        <span class="card-date">{{listing.dateAdded}}</span>
                        <!-- <b-form-rating inline="true" value="5" v-model="standardrating" @click="rateListing(listing.id,listing.listingType)"></b-form-rating> -->
                       </div>  
                       <div class="m-0 card-email">{{listing.bussinessEmail}}</div>
                     </div>   
                     <b-row>
                         <b-col class="text-right">
                           Likes 
                           <span v-if="liked == true">:</span>
                           <b-icon icon="hand-thumbs-up" class="like-icon" variant="dark" @click="userLiked(listing.id)" v-if="liked == false"></b-icon>
                            {{listing.likes | number('0a')}} 
                         </b-col>
                         <b-col class="text-left">
                           Dislikes
                            <span v-if="disliked == true">:</span>
                           <b-icon icon="hand-thumbs-down" class="dislike-icon"  variant="dark" @click="userDisliked(listing.id)" v-if="disliked == false"></b-icon>
                           {{listing.dislikes | number('0a')}}
                         </b-col>
                       </b-row>
                      <div class="p-2"><span class="tags" v-for="tag in listing.bussinessTags" :key="tag">{{tag}} </span></div>
                      
                       <b-container fluid>
                          <b-button variant="secondary" block @click="goToListing(listing.id)">Read More...</b-button>
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
                       <b-avatar class="card-avatar" variant="info" size="70" :src="getImage(listing.userEmail)"></b-avatar>
                       <div>
                        
                        <span class="card-username">{{listing.ownerName}}</span>
                        <br>
                        <span class="card-date">{{listing.dateAdded}}</span>
                        <br>
                        <!-- <b-form-rating inline value="5" v-model="featuredrating" @click="rateListing(listing.id,listing.listingType)"></b-form-rating> -->
                       </div>  
                       <div class="m-0 card-email">{{listing.bussinessEmail}}</div>
                       
                     </div>  
                     <b-row>
                         <b-col class="text-right">
                           Likes 
                           <span v-if="liked == true">:</span>
                           <b-icon icon="hand-thumbs-up" class="like-icon" variant="dark" @click="userLiked(listing.id)" v-if="liked == false"></b-icon>
                            {{listing.likes | number('0a')}} 
                         </b-col>
                         <b-col class="text-left">
                           Dislikes
                            <span v-if="disliked == true">:</span>
                           <b-icon icon="hand-thumbs-down" class="dislike-icon"  variant="dark" @click="userDisliked(listing.id)" v-if="disliked == false"></b-icon>
                           {{listing.dislikes | number('0a')}}
                         </b-col>
                       </b-row> 
                      <div class="p-2"><span class="tags" v-for="tag in listing.bussinessTags" :key="tag">{{tag}} </span></div>
                     
                       <b-container fluid>
                          <b-button variant="secondary" block @click="goToListing(listing.id)">Read More...</b-button>
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
                       <b-avatar class="card-avatar" variant="info" size="70" :src="getImage(listing.userEmail)"></b-avatar>
                       <div>
                        <span class="card-username">{{listing.ownerName}}</span>
                        <br>
                        <span class="card-date">{{listing.dateAdded}}</span>
                       </div>  
                       <div class="m-0 card-email">{{listing.bussinessEmail}}</div>
                        <!-- <b-form-rating inline value="5" v-model="premiumrating" @change="rateListing(listing.id,listing.listingType)"></b-form-rating> -->
                       </div>  
                       <b-row>
                         <b-col class="text-right">
                           Likes 
                           <span v-if="liked == true">:</span>
                           <b-icon icon="hand-thumbs-up" class="like-icon" variant="dark" @click="userLiked(listing.id)" v-if="liked == false"></b-icon>
                            {{listing.likes | number('0a')}} 
                         </b-col>
                         <b-col class="text-left">
                           Dislikes
                            <span v-if="disliked == true">:</span>
                           <b-icon icon="hand-thumbs-down" class="dislike-icon"  variant="dark" @click="userDisliked(listing.id)" v-if="disliked == false"></b-icon>
                           {{listing.dislikes | number('0a')}}
                         </b-col>
                       </b-row> 
                       <div class="p-2"><span class="tags" v-for="tag in listing.bussinessTags" :key="tag">{{tag}}</span></div>
                       <b-container fluid>
                          <b-button block variant="secondary" @click="goToListing(listing.id)">Read More...</b-button>
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
        users:firestore.collection('Users')   
      }
    },
    components:{
      Carousel,
      Slide
    },
    data()
    {
      return{
        listings:this.listings,
        liked:false,
        disliked:false,
        users:this.users
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
        return fl;
      },
      PremiumListings()
      {
        const pl = this.listings.filter(x => x.listingType == 'Premium')
        return pl;
      },
      
    },
    methods:{
      goToListing(id)
      { 
        this.$router.replace(`/listings/${id}`)
      },
      userLiked(id)
      {
          this.liked = true;
          const selectedListing = this.listings.filter(x => x.id == id)
          let ls = selectedListing[0].likes;
          console.log(ls)
          this.$firestore.listings.doc(id).update({
              likes: ls+1      
          }) 
      },
      userDisliked(id)
      {
        
          this.disliked = true;
          const selectedListing = this.listings.filter(x => x.id == id)
          let ls = selectedListing[0].dislikes;
          console.log(ls)
         
          this.$firestore.listings.doc(id).update({
              dislikes: ls+1      
          }) 
      },
      getImage(email)
      {
         const get = this.users.filter(x => x.Email == email)
         return get[0].ProfileImage
      }  
    },
    directives:{
      
    }
}
</script>

<style scoped>
.card-info
{
   display:grid;
   grid-template-columns: repeat(3,auto);
   place-items: center;
   justify-content: space-between;
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
.dislike-icon
{
  transition:all 0.2s ease;
}

.dislike-icon:hover
{
  font-size:1.5rem;
  cursor: pointer;
  
}

.like-icon
{
  transition:all 0.2s ease;
}

.like-icon:hover
{
  font-size:1.5rem;
  cursor: pointer;
}
</style>