<template>
  <div class="userProfile pl-5">
       <b-card border-variant="light" header="Profile" class="profilecard text-center">
          <b-card-body>
             <b-form @submit.prevent="updateProfile()">
               <b-row>
                 <b-col>
                   <b-form-group>
                     <!-- v-bind:src="profileImage" -->
                    <b-img  width="150" height="150" :src="profileImage()" rounded="circle" alt="Profile Image" center></b-img> 
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
             <h6>Reset Your Email .... </h6>
             <b-form class="">
               <b-form-group>
                 <b-form-input :state="emailValidation" type="text" v-model="email"></b-form-input>
                  <b-form-valid-feedback :state="emailValidation">Just Perfect !</b-form-valid-feedback>
                  <b-form-invalid-feedback :state="emailValidation">Invalid Email</b-form-invalid-feedback>
               </b-form-group>
              
               <b-form-group>
                   <b-button @click="resetEmail">Send Email Reset Request</b-button>
               </b-form-group>
             </b-form>
            

             <hr class="my-4 bg-dark">
             <h4 class="">Reset Your Password </h4>
             <div class="my-3"> 
              
             <b-button variant="warning" @click="resetPassword()">Reset Password</b-button>
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
        email:null,
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
      },
      emailValidation()
       {
          if(this.email == '')
          {
             return null
          }
          const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
          if(re.test(String(this.email).toLowerCase()))
          {
             return true
          }else{
             return false
          }
       },
     
    },
    methods:{
       profileImage()
      {
      
            const u = this.users.filter(x => x.Email == this.$store.state.user.email);
            return u[0].ProfileImage;
            
      },
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

          profileImage();
          // this.file = null
          this.pImage = null
      },
      resetEmail()
      {
        const user = firebase.auth().currentUser;
        user.updateEmail("user@example.com").then(function() {
           Toast.fire({
                  type: 'success',
                  title: 'Your email has been reset'
                })
        }).catch(function(error) {
          Toast.fire({
                  type: 'error',
                  title: error.message
                })
        });
      },
      resetPassword()
      {
        
          var auth = firebase.auth();
          var emailAddress = firebase.auth().currentUser.email;

          auth.sendPasswordResetEmail(emailAddress).then(() => {
            Toast.fire({
                  type: 'success',
                  title: 'Password Reset Email sent'
                })
          }).catch(function(error) {
            Toast.fire({
                  type: 'error',
                  title: error.message
                })
          }); 

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