<template>
  <div class="userProfile pl-5">
       <b-card border-variant="light" header="Profile" class="profilecard text-center">
          <b-card-body>
             <b-form @submit.prevent="updateProfile()">
               <b-row>
                 <b-col>
                   <b-form-group>
                     <!-- v-bind:src="profileImage" -->
                    <b-img  width="150" height="150" rounded="circle" alt="Profile Image" center></b-img> 
                    <b-form-file @change="uploadImage($event)" v-model="file" plain></b-form-file>
                    <b-progress :value="value" max="100" show-progress animated class="mt-3"></b-progress>
                  </b-form-group>
                 </b-col>
               </b-row>
               <b-row>
                 <b-col>
                   <b-form-group>
                     <b-form-input :state="usernameValidation" type="text" placeholder="Username" v-model="username"></b-form-input>
                     <b-form-invalid-feedback :state="usernameValidation">Username must be more than 6 Characters</b-form-invalid-feedback>
                     <b-form-valid-feedback :state="usernameValidation">just Perfect !</b-form-valid-feedback>
                  </b-form-group>
                 </b-col>
               </b-row>
               <b-row>
                 <b-col>
                   <b-form-group>
                     <b-form-input :state="fullnameValidation" type="text" placeholder="FullName" v-model="fullname"></b-form-input>
                     <b-form-invalid-feedback :state="fullnameValidation">Fullname must be more than 10 Characters</b-form-invalid-feedback>
                     <b-form-valid-feedback :state="fullnameValidation">just Perfect !</b-form-valid-feedback>
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

             <hr class="my-4 bg-dark">
             <h6>Change Your Email .... </h6>
             <b-button @click="resetEmail">Send Email Reset Request</b-button>

             <hr class="my-4 bg-dark">
             <h4 class="">Reset Your Password </h4>
             <div class="my-3"> 
              <b-form class="" @submit.prevent="resetPassword()">
               <b-form-group label="Password:">
                 <b-form-input type="password" v-model="password"></b-form-input>
               </b-form-group>
               <b-form-group label="Confirm Password:">
                 <b-form-input type="password" v-model="confirmpassword"></b-form-input>
               </b-form-group>
               <b-form-group>
                 <b-button type="submit" variant="warning">Reset Password</b-button>
               </b-form-group>
             </b-form>
             </div>
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
        pImage:null,
        users:this.users,
        username:null,
        fullname:null,
        password:null,
        confirmpassword:null,
        emailSent:false
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
      profileImage()
      {
      
            const u = this.users.filter(x => x.Email == this.$store.state.user.email);
            return u[0].ProfileImage;
            
      },
      usernameValidation()
      {
        if(this.username == null)
        {
          return null
        }else if(this.username.length < 6)
        {
          return false
        }else{
          return true
        }
      },
      fullnameValidation()
      {
        if(this.fullname == null)
        {
          return null
        }else if(this.fullname.length < 10)
        {
          return false
        }else{
          return true
        }
      }
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
              Username:this.username,
              ProfileImage:this.file,
              Fullname:this.fullname
          })
        
        Toast.fire({
                     icon: 'success',
                     title: 'Profile Updated Successfully',   
                  })

        this.$store.commit('addProfileImage',this.currentUser.ProfileImage)


        // this.file = null
        this.pImage = null
                
       
      
     }
    },
    resetEmail()
    {
       var auth = firebase.auth();
       var emailAddress = auth.currentUser.email;

       auth.sendPasswordResetEmail(emailAddress).then(function() {
           Toast.fire({
                     icon: 'success',
                     title: 'Email Sent Successfully',   
                  })
        }).catch(function(error) {
          Toast.fire({
                     icon: 'error',
                     title: error.message,   
                  })
        });
    },
    resetPassword()
    {
        const ue = firebase.auth().currentUser.email;        
          firebase.auth().sendPasswordResetEmail(ue).then(() =>  {
            this.emailSent = true;
               Toast.fire({
                type: 'success',
                title: 'Email sent'
              })
          }).catch((error) =>  {
              console.log(error);
          });
    }
}
</script>

<style>
.profilecard{
  margin:0 auto;
  max-width:50%;
}
</style>