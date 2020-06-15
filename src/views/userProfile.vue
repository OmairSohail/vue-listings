<template>
  <div class="userProfile pl-5">
       <b-card border-variant="light" header="Profile" class="profilecard text-center">
          <b-card-body>
             <b-form @submit.prevent="updateProfile()">
               <b-row>
                 <b-col>
                   <b-form-group>
                    <b-img :src="pImage" width="150" height="150" rounded="circle" alt="Profile Image" center></b-img> 
                    <b-form-file @change="uploadImage($event)" v-model="file" plain></b-form-file>
                    <b-progress :value="value" max="100" show-progress animated class="mt-3"></b-progress>
                  </b-form-group>
                 </b-col>
               </b-row>
               <b-row>
                 <b-col>
                   <b-form-group>
                     <b-form-input type="text" placeholder="Username"></b-form-input>
                  </b-form-group>
                 </b-col>
               </b-row>
               <b-row>
                 <b-col>
                   <b-form-group>
                     <b-form-input type="text" placeholder="FullName"></b-form-input>
                  </b-form-group>
                 </b-col>
               </b-row> 
                  
               <b-row>
                 <b-col>
                   <b-form-group>
                     <b-button variant="info" type="submit">Update Profile</b-button>
                  </b-form-group>
                 </b-col>
               </b-row>        
             </b-form>
          </b-card-body>
       </b-card>
  </div>
</template>

<script>
export default {
    name:'userProfile',
    firestore(){
      return{
        users:firestore.collection('Users')
      }
    },
    data(){
      return{
        file:null, 
        imgUploadProgress:0,
        pImage:this.currentUser.ProfileImage,
        users:this.users
      }
    },
    computed:{
      value()
      {
        return this.imgUploadProgress
      },
      currentUser()
      {
        const cuser = this.users.filter(x => x.Email == this.$store.state.user.email)
        
        return cuser[0];
      },
      // profileImage()
      // {
      
      //       const u = this.users.filter(x => x.Email == this.$store.state.user.email);
      //       return u[0].ProfileImage;
            
      // },
    },
    methods:{
      uploadImage(e)
     {
        const imagesRef = storage.ref();
          if(e.target.files[0]){
        
          let file = e.target.files[0];
    
          var storageRef = firebase.storage().ref('ProfileImages/'+ this.$store.state.user.email + '_'  + file.name);
    
          let uploadTask  = storageRef.put(file);
    
          uploadTask.on('state_changed', (snapshot) => {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            this.imgUploadProgress = progress;
          }, (error) => {
             Toast.fire({
                     icon: 'danger',
                     title: error,   
                  })
          }, () => {
               Toast.fire({
                     icon: 'success',
                     title: 'Image Uploaded Successfully',   
                  })
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
              this.file = downloadURL;
              
            });
          });
      }
     },
     updateProfile()
     {
         this.$firestore.users.doc(this.currentUser.id).update({
              ProfileImage:this.file
          })
        
        Toast.fire({
                     icon: 'success',
                     title: 'Profile Updated Successfully',   
                  })

        this.file = null
        this.imgUploadProgress = 0
        this.pImage = null
                
        this.$store.commit('addProfileImage',this.file)
      
     }
    }
}
</script>

<style>
.profilecard{
  margin:0 auto;
  max-width:50%;
}
</style>