<template>
  <div class="signupform">
     <navbar/>
     <b-card class="signupcard"> 
        <b-card-title class="text-center">Signup Now ...</b-card-title>

        <b-card-text class="my-2">
           <b-container fluid>
               <b-row>
                  <b-col sm="12">
                       <b-form-group label="Username :">
                          <b-form-input :state="usernamevalidation" v-model="username" type="text" ></b-form-input>
                           <b-form-valid-feedback :state="usernamevalidation">Username is available</b-form-valid-feedback>
                           <b-form-invalid-feedback :state="usernamevalidation">Username must be more than 6 characters</b-form-invalid-feedback>
                       </b-form-group>
                  </b-col>
                 
               </b-row>
               <b-row>
                  <b-col sm="12">
                       <b-form-group label="Email :">
                          <b-form-input :state="emailvalidation" v-model="email" type="email"></b-form-input>
                          <b-form-valid-feedback :state="emailvalidation">valid email</b-form-valid-feedback>
                         <b-form-invalid-feedback :state="emailvalidation">invalid email</b-form-invalid-feedback>
                       </b-form-group>
                  </b-col>
               </b-row>
               <b-row>
                  <b-col sm="12">
                       <b-form-group label="password :">
                          <b-form-input :state="passwordvalidation" v-model="password" type="password"></b-form-input>
                          <b-form-valid-feedback :state="passwordvalidation">Password is valid</b-form-valid-feedback>
                          <b-form-invalid-feedback :state="passwordvalidation">Password should be more than 6 characters</b-form-invalid-feedback>
                       </b-form-group>
                  </b-col>
               </b-row>
               <b-row>
                  <b-col sm="12">
                       <b-form-group label="Confirm Password :">
                          <b-form-input :state="confirmpasswordvalidation" v-model="confirmpassword" type="password"></b-form-input>
                          <b-form-valid-feedback :state="confirmpasswordvalidation">Password matched !</b-form-valid-feedback>
                          <b-form-invalid-feedback :state="confirmpasswordvalidation">Password does not match !</b-form-invalid-feedback>
                       </b-form-group>
                  </b-col>
               </b-row>
               <b-row class="my-2"> 
                  <b-col sm="12">
                       <b-form-checkbox v-model="terms">I Accept The Terms & Conditions.</b-form-checkbox>
                  </b-col>
               </b-row>
               <b-row> 
                  <b-col sm="12">
                       <b-button variant="primary" class="mt-2 float-right" @click="createUser()">Create Account</b-button>
                  </b-col>
               </b-row>

           </b-container>
        </b-card-text>
     </b-card>
  </div>
</template>

<script>
export default {
     name:'signupform',
     data(){
        return{
           username:null,
           email:null,
           password:null,
           confirmpassword:null,
           terms:false,
           state:null
        }
     },
     computed:{
       usernamevalidation()
       {
         if(this.username == null)
         {
            return null
         }

         if(this.username.length > 6)
         {
            return true
         }else{
            return false
         }
       },
       emailvalidation()
       {
          if(this.email == null)
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
       passwordvalidation()
       {
         if(this.password == null)
         {
            return null
         }

         if(this.password.length > 6)
         {
            return true
         }else{
            return false
         }
       },
       confirmpasswordvalidation()
       {
          if(this.confirmpassword == null)
          {
             return null
          }

          if(this.confirmpassword === this.password)
          {
             return true
          }else{
             return false
          }
       }
     },
     methods:{
        createUser(){
             if(this.terms == true)
             {
                
               firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
               .then(()=>{
                   this.username = null;
                   this.email = null;
                   this.password = null;
                   this.confirmpassword = null;
                   this.terms = false;  

                  Toast.fire({
                     icon: 'success',
                     title: 'Account Has Been Created'
                     }) 
               })
               .catch((err) => {
                   Toast.fire({
                     icon: 'danger',
                     title: err.message
                     }) 
               })  
               
               
             }else{
               Swal.fire(
                  'Error',
                  'You must accept terms and Conditions',
                  'warning'
                  )
             }
             
        }
     }
}
</script>

<style>
.signupcard{
   margin:0 auto;
   max-width:40%;
}

</style>