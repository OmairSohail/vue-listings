<template>
  <div class="dashboard">
      <navbar/>
     <b-button v-b-toggle.sidebar-1 variant="light"><b-icon-arrow-right-circle-fill variant="info"></b-icon-arrow-right-circle-fill> </b-button>
     <b-sidebar id="sidebar-1" title="Sidebar" bg-variant="dark" text-variant="light" shadow>
            <div class="px-3 py-2">
                <b-container>
                    <b-row>
                        <b-col sm="12"><b-img v-bind="mainProps" :src="currentUser.ProfileImage" rounded="circle" alt="Profile Image" center></b-img></b-col>
                    </b-row>
                    <p class="text-center mt-2">{{currentUser.Fullname}}</p>
                    <p class="text-center">{{currentUser.Email}}</p>
                </b-container>
                
                <b-container>
                    <b-nav vertical class="w-100 text-center">
                    <b-nav-item active><router-link class="sidebar-nav-link text-light" to="/dashboard/profile">Profile</router-link></b-nav-item>
                    <b-nav-item><router-link class="sidebar-nav-link text-light" to="/dashboard/Listings">Listings</router-link></b-nav-item>
                    <!-- <b-nav-item><router-link class="sidebar-nav-link text-light" to="/dashboard/profile">Profile</router-link></b-nav-item>
                    <b-nav-item><router-link class="sidebar-nav-link text-light" to="/dashboard/profile">Profile</router-link></b-nav-item> -->
                </b-nav>
                </b-container>
            </div>
    </b-sidebar>
    <transition name="slide" mode="out-in">
         <router-view></router-view>
    </transition>
   
     <!-- <b-jumbotron>
         <h1 class="text-secondary text-center">Welcome To The Dashboard</h1>
         <h3 class="text-secondary text-center">Manage Your Profile And Listings</h3>
         <div class="mt-3 h1 text-center">
             <b-icon-tools variant="secondary"></b-icon-tools>
         </div>
    </b-jumbotron> -->
    <!-- <section class="dashboard-render">

    </section> -->
  </div>
</template>

<script>
export default {
   firestore(){
       return{
           users:firestore.collection('Users')
       }
   },
   data(){
       return{
           mainProps: { width: 150, height: 150 },
           users:this.users
       }
   },
   computed:{
      currentUser()
      {
          const u = this.users.filter(x => x.Email == this.$store.state.user.email)
          return u[0];
      }
   }
}
</script>

<style>
.slide-enter-active,
.slide-leave-active{
  transition: opacity 1s , transform 1s;
}

.slide-enter,
.slide-leave-to{
    opacity: 0;
    transform:translateX(-30%);
}
</style>