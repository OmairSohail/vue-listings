<template>
  <div class="userProfile pl-5">
       <b-card border-variant="light" header="Profile" class="profilecard text-center">
          <b-card-body>
             <b-form>
               <b-row>
                 <b-col>
                   <b-form-group>
                    <b-img src="../assets/profile-image-icon.png" width="150" height="150" rounded="circle" alt="Profile Image" center></b-img> 
                    <b-form-file plain></b-form-file>
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
                
             </b-form>
          </b-card-body>
       </b-card>
  </div>
</template>

<script>
export default {
    name:'userProfile'
}
</script>

<style>
.profilecard{
  margin:0 auto;
  max-width:50%;
}
</style>