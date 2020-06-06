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
                          <b-form-input v-model="username" type="text"></b-form-input>
                       </b-form-group>
                  </b-col>
               </b-row>
               <b-row>
                  <b-col sm="12">
                       <b-form-group label="Email :">
                          <b-form-input v-model="email" type="email"></b-form-input>
                       </b-form-group>
                  </b-col>
               </b-row>
               <b-row>
                  <b-col sm="12">
                       <b-form-group label="password :">
                          <b-form-input v-model="password" type="password"></b-form-input>
                       </b-form-group>
                  </b-col>
               </b-row>
               <b-row>
                  <b-col sm="12">
                       <b-form-group label="Confirm Password :">
                          <b-form-input v-model="confirmpassword" type="password"></b-form-input>
                       </b-form-group>
                  </b-col>
               </b-row>
               <b-row class="my-2"> 
                  <b-col sm="12">
                       <b-form-checkbox v-model="terms" value="checked">I Accept The Terms & Conditions.</b-form-checkbox>
                  </b-col>
               </b-row>
               <b-row> 
                  <b-col sm="12">
                       <b-button variant="primary" class="mt-2 float-right">Create Account</b-button>
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
           terms:false
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