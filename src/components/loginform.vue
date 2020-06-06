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
                     <b-form-input id="email" v-model="email" trim></b-form-input>
                  </b-form-group>
                   </b-col>
                    
                </b-row>
                 
                 <b-row>
                    <b-col sm="12">
                        <b-form-group         
                        label="Password :"
                        label-for="password"   
                     >
                     <b-form-input id="password" v-model="password" trim></b-form-input>
                  </b-form-group>
                    </b-col>          
                 </b-row>

                 <b-row class="my-2">
                    <b-col sm="12">
                       <b-button variant="info" block="block">Login</b-button>
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
   }
}
</script>

<style>
.logincard{
   margin:0 auto;
   max-width: 20%;
}
</style>