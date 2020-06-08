<template>
  <div class="loginform">
     <navbar/>
     <b-card class="logincard">
        <b-card-title class="text-center">Login Now</b-card-title>
          <b-card-text class="mt-3">
             <b-container fluid>
                <b-row>
                   <b-col sm="12">
                      <b-form-group         
                     label="Email :"
                     label-for="email"   
                  >
                     <b-form-input :state="emailvalidation" id="email" v-model="email" trim></b-form-input>
                     <b-form-valid-feedback :state="emailvalidation">Perfect !</b-form-valid-feedback>
                     <b-form-invalid-feedback :state="emailvalidation">Invalid Email</b-form-invalid-feedback>
                  </b-form-group>
                   </b-col>
                    
                </b-row>
                 
                 <b-row>
                    <b-col sm="12">
                        <b-form-group         
                        label="Password :"
                        label-for="password"   
                     >
                     <b-form-input :state="passwordvalidation" id="password" v-model="password" type="password"></b-form-input>
                     <b-form-valid-feedback :state="passwordvalidation">Perfect !</b-form-valid-feedback>
                     <b-form-invalid-feedback :state="passwordvalidation">Password should be more than 6 characters</b-form-invalid-feedback>
                  </b-form-group>
                    </b-col>          
                 </b-row>

                 <b-row class="my-2">
                    <b-col sm="12">
                       <b-button variant="info" block="block" @click="login()">Login</b-button>
                    </b-col>
                    
                 </b-row>
            </b-container>
          </b-card-text>
     </b-card>
  </div>
</template>

<script>
export default {
   name:'loginform',
   data(){
      return{
         email:null,
         password:null
      }
   },
   methods:{
      login(){
         firebase.auth().signInWithEmailAndPassword(this.email,this.password)
         .then(()=>{
              this.$router.replace('/listings') 
         })
         .catch((err)=>{
            Toast.fire({
                     icon: 'danger',
                     title: err.message,
                     text: err.code
                     })
         })
      }
   },
   computed:{
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
      }
   }
}
</script>

<style>
.logincard{
   margin:0 auto;
   max-width: 20%;
}
</style>