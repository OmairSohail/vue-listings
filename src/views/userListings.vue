<template>
  <div class="userListings pl-5">
        
          <h1 class="h1 text-center">User Listings </h1>
             
             <div class="grid-container my-4 mx-4">
              <b-card class="listing-card" no-body v-for="listing in userListings" :key="listing.id" :img-src="listing.imageUrl" img-width="50" img-height="250" top>
                   <b-card-title class="">{{listing.bussinessName}}</b-card-title>
                     
                    <!-- <b-card-body v-html="listing.bussinessDescription"></b-card-body>  -->
                    <b-card-footer>
                       <p class="m-0">Username : {{listing.ownerName}}</p>
                       <p class="m-0">DateAdded: {{listing.dateAdded}}</p>
                       <p class="m-0">Email: {{listing.bussinessEmail}}</p>
                       <p class="p-2"><span class="listing-tags" v-for="tag in listing.bussinessTags" :key="tag">{{tag}} </span></p>

                       <b-container fluid>
                         <b-button variant="danger" class="mr-3" @click="deleteListing(listing.id)">Delete Listing</b-button>
                         <b-button variant="info" @click="editListing(listing.id)">Edit Listing</b-button>
                       </b-container>
                    </b-card-footer>
              </b-card>
              </div>

          
      
  </div>
</template>

<script>
export default {
    name:'userListings',
    firestore(){
      return{
        listings:firestore.collection('listings')
      }
    },
    data()
    {
      return{
        listings:this.listings
      }
    },
    computed:{
       userListings()
       {
         const ul = this.listings.filter(x => x.userEmail == this.$store.state.user.email)
         return ul
       }
    },
    methods:{
      deleteListing(id)
      {
        Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
           this.$firestore.listings.doc(id).delete();
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
        }
      })
      }
    }
}
</script>

<style >
.grid-container{
  width:100%;
  display:grid;
  grid-template-columns: repeat(3,400px);
}

.listing-tags{
  display:inline-block;
  text-align: center;
  padding:5px 15px;
  background-color:cyan;
  color:white;
  border-radius: 15px;
  margin:0.5rem 0.3rem;
}

.listings-card{
  max-width:30%;
  
}

.listingcards{
  width:40%;
}
</style>