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

            <b-container>
                <b-row>
                        <b-col cols="1">
                            <b-avatar :src="user.ProfileImage" size="70" class="m-0 "></b-avatar>
                        </b-col>
                        <b-col cols="9" class="">      
                                <b-form-input placeholder="Add a public comment" v-model="comment" ></b-form-input>               
                        </b-col>
                        <b-col cols="2">
                            <b-button class="" block @click.prevent="submitComment()">Submit</b-button> 
                        </b-col>
                </b-row>      
            </b-container>
            <b-container class="mt-3">
                <b-list-group>
                    <b-list-group-item variant="secondary" href="#" active class="flex-column align-items-start" v-for="comment in commented" :key="comment.id">
                        <div class="d-flex w-100 justify-content-between">
                        <h5 class="mb-1"> <b-avatar :src="comment.userImage" size="50" class="mr-2"></b-avatar>{{comment.username}}</h5>
                        <small>{{comment.commentedAt}}</small>
                        </div>

                        <p class="mb-1 ml-5">
                        {{comment.comment}}
                        </p>

                        
                    </b-list-group-item>
                </b-list-group>
            </b-container>

            <div class="d-flex flex-column justify-item-center align-items-center">
                <h2 class="my-4">Listing - by</h2> 
                <b-avatar :src="user.ProfileImage" size="100" class="my-4"></b-avatar>
                <h3>{{user.Username}}</h3>
                <h6 class="lead">{{user.Email}}</h6>
            </div>
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
          users:this.users,
          comment:null
        }
    },
    firestore()
    {
        return{
             comments:firestore.collection('Comments'),
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
        },
        commented()
        {
            const u = this.comments.filter(x => x.listingId == this.listingsID)
            return u;
        }
    },
    methods:{
        submitComment(){
            if(this.comment == null && this.comment == '')
            {
              Swal.fire({
                  title:'Comment Field is Empty',
                  icon:'error'
              })
            }else{
                this.$firestore.comments.add({
                listingId:this.listing.id,
                username:this.user.Username,
                email:this.user.Email,
                commentedAt:new Date().toDateString(),
                comment:this.comment,
                userImage:this.user.ProfileImage
                })
               
                this.comment = null

                  Toast.fire({
                  type: 'success',
                  title: 'Your Comment is submitted'
                })
            }
            
        }
    }
}
</script>

<style>

</style>