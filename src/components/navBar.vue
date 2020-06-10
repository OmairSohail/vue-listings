<template>
  <div class="navbar">
  <nav>  
   <div>     
    <b-navbar toggleable="md" type="dark" variant="info">
        <b-navbar-brand href="#">Omair Listings</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item><router-link to="/" class="text-light">Home</router-link></b-nav-item>
            <b-nav-item><router-link to="/listings" class="text-light">Listings</router-link></b-nav-item>
            <b-nav-item><router-link to="/addlistings" class="text-light">Add Listings</router-link></b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-form class="pl-3">
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown right v-if="isLoggedin">
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
                <em>{{email}}</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item @click="signout()">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item v-if="!isLoggedin">
               <router-link to="/login"><b-button size="sm">Login</b-button></router-link> 
               <router-link to="/signup"><b-button size="sm">signup</b-button></router-link>         
            </b-nav-item>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
   </div>
  </nav>
  </div>
</template>

<script>
export default {
    name:'navbar',
    data()
    {
        return{
            isLoggedin:false,
            username:null,
            email:null
        }
    },
    mounted(){
       firebase.auth().onAuthStateChanged((user)=>{
           if(user)
           {
             // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;

            this.isLoggedin = true;
            this.username = displayName;
            this.email = email;
           }else{
            this.isLoggedin = false;
            this.username = null;
            this.email = null;
           }
       })
    },
    methods:{
        signout(){
            firebase.auth().signOut().then(()=>{
                 Toast.fire({
                     icon: 'success',
                     title: 'User has been signout'
                     })
            }).catch((err)=>{
                 Toast.fire({
                     icon: 'danger',
                     title: err.message,
                     text: err.code
                     })
            })

            this.$store.commit('removeUser')
        }
    }


}
</script>

<style>
.navbar{
  width:100%;
}

nav
{
    min-width:100%;
}
</style>