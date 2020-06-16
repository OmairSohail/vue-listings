<template>
  <div class="featured">
      <navbar/>
      <b-card>
        <b-card-title class="text-center">Featured Listing</b-card-title>
      </b-card>
       
      <b-card no-body> 
           <b-container>
             <b-form @submit.prevent="submitListings()">

            
             <b-row>
                <b-col>
                  <b-form-group label="Bussiness Owner Name :"> 
                      <b-form-input  :state="ownerNameValidation" type="text" class="bg-light" v-model="bussinessOwnerName" placeholder="Owner Name"></b-form-input> 
                      <b-form-valid-feedback :state="ownerNameValidation">just Perfect !</b-form-valid-feedback>
                      <b-form-invalid-feedback :state="ownerNameValidation">Name Should be more than 8 characters</b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group label="Bussiness Title :"  :invalid-feedback="bussinessNameinvalidFeedback" :valid-feedback="bussinessNamevalidFeedback" :state="bussinessNamestate"> 
                      <b-form-input  type="text" class="bg-light " :state="bussinessNamestate" v-model="bussinessName" placeholder="Bussiness Name"></b-form-input> 
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group label="Bussiness Category :"> 
                       <b-form-select v-model="bussinessCategory" :options="categories" required></b-form-select>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group label="Bussiness Phone:"> 
                      <!-- <b-form-input  :state="phoneValidation" type="text" class="bg-light" v-model="bussinessPhone" placeholder="Bussiness Phone No"></b-form-input>
                      <b-form-valid-feedback :state="phoneValidation">Ok !</b-form-valid-feedback>
                      <b-form-invalid-feedback :state="phoneValidation">Name Should be more than 8 characters</b-form-invalid-feedback>  -->
                      <VuePhoneNumberInput v-model="bussinessPhone" error-color="red"/>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group label="Area Code:"> 
                      <b-form-input  :state="areaCodeValidation" type="number" class="bg-light" v-model="areaCode" placeholder="Area Code"></b-form-input> 
                      <b-form-valid-feedback :state="areaCodeValidation">just Perfect !</b-form-valid-feedback>
                      <b-form-invalid-feedback :state="areaCodeValidation">
                          Area code must be 6 digits 
                      </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group label="Bussiness Email :"> 
                      <b-form-input  :state="emailValidation" type="text" class="bg-light" v-model="bussinessEmail" placeholder="Bussiness Email"></b-form-input> 
                      <b-form-valid-feedback :state="emailValidation">just Perfect !</b-form-valid-feedback>
                      <b-form-invalid-feedback :state="emailValidation">
                          Invalid email 
                      </b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group label="Bussiness Address :"> 
                      <b-form-input  type="text" class="bg-light " v-model="bussinessAddress.address1" placeholder="Address - 1"></b-form-input>
                      <b-form-input  type="text" class="bg-light " v-model="bussinessAddress.address2" placeholder="Address - 2"></b-form-input>
                      <b-form-select v-model="bussinessAddress.selectedCity" :options="bussinessAddress.city" required></b-form-select>          
                  </b-form-group>
                </b-col>
              </b-row>
               <b-row>
                <b-col>
                  <b-form-group label="Bussiness Description :"> 
                      <vue-editor v-model="bussinessDescription"/>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                 <b-col>
                   <b-form-group label="Add Related Tags :">
                     <b-form-tags
                        :state="tagsValidation"
                        v-model="bussinessTags"
                        separator=" ,;"
                        placeholder="Enter tags separated by space, comma or semicolon"
                        no-add-on-enter
                        class="mb-2"
                      ></b-form-tags>
                      <b-form-valid-feedback :state="tagsValidation">just Perfect !</b-form-valid-feedback>
                      <b-form-invalid-feedback :state="tagsValidation">
                          You Must Enter atleast 3 tags 
                      </b-form-invalid-feedback>
                   </b-form-group>
                 </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group label="Upload Image :"> 
                       <b-form-file @change="uploadImage($event)" v-model="file" class="mt-3" plain required></b-form-file>
                       <b-progress :value="value" max="100" show-progress animated class="mt-3"></b-progress>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row class="">
                <b-col sm="12">
                   <b-button variant="primary" type="submit">Submit Listing</b-button>
                </b-col>
              </b-row>
              </b-form> 
           </b-container>
      </b-card>

      <main-footer/>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import VuePhoneNumberInput from 'vue-phone-number-input';
import {listingData} from '../listingData';
export default {
   name:'featured',
   mixins:[listingData],
   components:{
     VueEditor,
     VuePhoneNumberInput
   },
   methods:{
     submitListings(){
      const useremail = firebase.auth().currentUser.email;
   
       this.$firestore.listings.add({
           ownerName:this.bussinessOwnerName,
           bussinessName:this.bussinessName,
           bussinessPhone:this.bussinessPhone,
           bussinessTags:this.bussinessTags,
           areaCode:this.areaCode,
           bussinessEmail:this.bussinessEmail,
           address1:this.bussinessAddress.address1,
           address2:this.bussinessAddress.address2,
           city:this.bussinessAddress.selectedCity,
           bussinessDescription:this.bussinessDescription,
           bussinessCategory:this.bussinessCategory,
           imageUrl:this.file,
           listingType:'Featured',
           userEmail:useremail,
           dateAdded:new Date().toDateString()
       })

       this.bussinessOwnerName = '';
       this.bussinessName = '';
       this.bussinessPhone = '';
       this.bussinessEmail = '';
       this.bussinessAddress.address1 ='';
       this.bussinessAddress.address2 = '';
       this.bussinessAddress.selectedCity = null;
       this.bussinessDescription = '';
       this.bussinessTags = [];
       this.bussinessCategory = null;
       this.file = '';
       this.imgUploadProgress = 0;
       Toast.fire({
                     icon: 'success',
                     title: 'The Form Has Been Submitted',
                     text: 'Your listing will be processed in sometime'
                  })
       
     },
   }
}
</script>

<style>

</style>