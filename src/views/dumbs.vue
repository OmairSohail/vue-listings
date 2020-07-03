
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