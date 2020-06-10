<template>
  <div class="standard">
      <navbar/>
      <b-card>
        <b-card-title class="text-center">Standard Listing</b-card-title>
      </b-card>
       
      <b-card no-body> 
           <b-container>
             <b-row>
                <b-col>
                  <b-form-group label="Bussiness Owner Name :"> 
                      <b-form-input  :state="ownerNameValidation" type="text" class="bg-light" v-model="bussinessOwnerName" placeholder="Owner Name"></b-form-input> 
                      <b-form-valid-feedback :state="ownerNameValidation">Ok !</b-form-valid-feedback>
                      <b-form-invalid-feedback :state="ownerNameValidation">Name Should be more than 8 characters</b-form-invalid-feedback>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group label="Bussiness Name :"  :invalid-feedback="bussinessNameinvalidFeedback" :valid-feedback="bussinessNamevalidFeedback" :state="bussinessNamestate"> 
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
                      <b-form-input  :state="phoneValidation" type="text" class="bg-light" v-model="bussinessPhone" placeholder="Bussiness Phone No"></b-form-input>
                      <b-form-valid-feedback :state="phoneValidation">Ok !</b-form-valid-feedback>
                      <b-form-invalid-feedback :state="phoneValidation">Name Should be more than 8 characters</b-form-invalid-feedback> 
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group label="Area Code:"> 
                      <b-form-input  type="number" class="bg-light" v-model="areaCode" placeholder="Area Code"></b-form-input> 
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group label="Bussiness Email :"> 
                      <b-form-input  type="text" class="bg-light" v-model="bussinessEmail" placeholder="Bussiness Email"></b-form-input> 
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group label="Bussiness Address :"> 
                      <b-form-input  type="text" class="bg-light " v-model="bussinessAddress.address1" placeholder="Address - 1"></b-form-input>
                      <b-form-input  type="text" class="bg-light " v-model="bussinessAddress.address2" placeholder="Address - 2"></b-form-input>
                      <b-form-select v-model="bussinessAddress.selectedCity" :options="bussinessAddress.city"></b-form-select>
                      
                  </b-form-group>
                </b-col>
              </b-row>
               <b-row>
                <b-col>
                  <b-form-group label="Bussiness Description :"> 
                      <b-form-textarea  placeholder="Your Bussiness Description" rows="10" max-rows="10" v-model="bussinessDescription"></b-form-textarea>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-form-group label="Upload Image :"> 
                       <b-form-file v-model="file" class="mt-3" plain></b-form-file>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row>
                <b-col sm="12">
                   <b-button variant="primary" @click.prevent="submitListings()">Submit Listing</b-button>
                </b-col>
              </b-row>

           </b-container>
      </b-card>
  </div>
</template>

<script>
export default {
   name:'standard',
   firestore(){
       return{
           listings:firestore.collection('listings')
       }
   },
   data(){
     return{
         listings:[],
         bussinessOwnerName:'',
         bussinessName:'',
         bussinessPhone:'',
         areaCode:'',
         file:'',
         bussinessEmail:'',
         bussinessAddress:{
             address1:'',
             address2:'',
             selectedCity:null,
             city:[
                { value: null, text: 'Please select an City' },
                { value:'Karachi', text:'Karachi'},
                { value:'Lahore', text:'Lahore'},
                { value:'Islamabad', text:'Islamabad'},     
             ],
            
         },
         bussinessDescription:'',
         bussinessCategory:null,
         categories:[
            { value: null, text: 'Please select an option' },
            {
            label: 'Bussiness',
            options: [
              { value: 'Advertising Agency', text: 'Advertising Agency' },
              { value: 'Agriculture', text: 'Agriculture' },
              { value: 'Animals & Pets', text: 'Animals & Pets' },
              { value: 'Business Services', text: 'Business Services' },
              { value: 'Catering', text: 'Catering' },
              { value: 'Conference and Events', text: 'Conference and Events' },
              { value: 'Consultants', text: 'Consultants' },
              { value: 'Office Services', text: 'Office Services' },
              { value: 'Printing', text: 'Printing' },
              { value: 'Public Relations', text: 'Public Relations' },
              { value: 'Security Firms', text: 'Security Firms' },
              { value: 'Stationery & Supplies', text: 'Stationery & Supplies' },
              { value: 'Telecommunications', text: 'Telecommunications' },
              { value: 'Transport', text: 'Transport' },
              { value: 'Wholesalers', text: 'Wholesalers' },
              
              
            ]
          },
          {
            label: 'Computing',
            options: [
              { value: 'Animation & 3D', text: 'Animation & 3D' },
              { value: 'Computer Services', text: 'Computer Services' },
              { value: 'Cybercafes', text: 'Cybercafes  ' },
              { value: 'Digital Video', text: 'Digital Video ' },
              { value: 'Game Developers', text: 'Game Developers' },
              { value: 'Hardware Manufacturers', text: 'Hardware Manufacturers' },
              { value: 'Internet', text: 'Internet' },
              { value: 'Maintenance, Recovery & Repairs', text: 'Maintenance, Recovery & Repairs' },
              { value: 'Networking', text: 'Networking ' },
              { value: 'Online Security', text: 'Online Security ' },
              { value: 'PC Manufacturers', text: 'PC Manufacturers' },
              { value: 'Software Companies', text: 'Software Companies' },
              { value: 'Web Hosting ', text: 'Web Hosting ' },
              { value: 'Web Site Design', text: 'Web Site Design' },
              
              
              
            ]
          },
          {
            label: 'Entertainment',
            options: [
              { value: 'Art Galleries', text: 'Art Galleries' },
              { value: 'Artists', text: 'Artists' },
              { value: 'Cinemas', text: 'Cinemas' },
              { value: 'Community Arts', text: 'Community Arts' },
              { value: 'Design Arts', text: 'Design Arts' },
              { value: 'Films/TV', text: 'Films/TV' },
              { value: 'Gambling & Lotteries', text: 'Gambling & Lotteries' },
              { value: 'Museums & Heritage', text: 'Museums & Heritage' },
              { value: 'Music', text: 'Music' },
              { value: 'Nightclubs', text: 'Nightclubs' },
              { value: 'Online Fun', text: 'Online Fun' },
              { value: 'Outdoor Games', text: 'Outdoor Games' },
              { value: 'Performing Arts', text: 'Performing Arts' },
              { value: 'Radio & TV Stations', text: 'Radio & TV Stations' },
              
              
              
            ]
          },
          {
            label: 'Finance',
            options: [
              { value: 'Accounting', text: 'Accounting ' },
              { value: 'Banking', text: 'Banking' },
              { value: 'Actuaries', text: 'Actuaries' },
              { value: 'Brokers', text: 'Brokers' },
              { value: 'Building Societies', text: 'Building Societies' },
              { value: 'Credit & Insolvency', text: 'Credit & Insolvency' },
              { value: 'Debt Management', text: 'Debt Management' },
              { value: 'Financial Services', text: 'Financial Services' },
              { value: 'IFAs', text: 'IFAs' },
              { value: 'Investment Companies', text: 'Investment Companies' },
              { value: 'Mortgage Brokers', text: 'Mortgage Brokers' },
              { value: 'Personal Loans', text: 'Personal Loans' },
              { value: 'Retirement & Pensions', text: 'Retirement & Pensions' },
              { value: 'Stockbrokers', text: 'Stockbrokers' },
              
              
              
            ]
          },
          {
            label: 'Food and Drink',
            options: [
              { value: 'Bakeries', text: 'Bakeries ' },
              { value: 'Beer & Brewing', text: 'Beer & Brewing ' },
              { value: 'Butchers', text: 'Butchers ' },
              { value: 'Cafes and Coffee Shops', text: 'Cafes and Coffee Shops' },
              { value: 'Cake Makers', text: 'Cake Makers' },
              { value: 'Catering Equipment', text: 'Catering Equipment ' },
              { value: 'Confectionery Suppliers', text: 'Confectionery Suppliers' },
              { value: 'Dairy Products', text: 'Dairy Products' },
              { value: 'Deli & Gourmet', text: 'Deli & Gourmet' },
              { value: 'Farm Shops', text: 'Farm Shops' },
              { value: 'Healthfood & Products', text: 'Healthfood & Products ' },
              { value: 'Pubs & Bars', text: 'Pubs & Bars' },
              { value: 'Restaurants', text: 'Restaurants ' },
              { value: 'Takeaway Food Shops', text: 'Takeaway Food Shops' },
              
              
              
            ]
          }
         ]
     }
   },
   computed:{
     bussinessNamestate(){
       return this.bussinessName.length < 30 ? true : false ; 
     },
     bussinessNameinvalidFeedback(){
       if(this.bussinessName.length < 30 )
       {
           return ''
       }else if(this.bussinessName.length > 0)
       {
         return 'You Can Enter Maximum of 30 Characters'
       }else{
         return 'Please Enter Something'
       }
     },
     bussinessNamevalidFeedback(){
       return this.state == true ? '' : ''
     },
     ownerNameValidation()
     {
       if(this.bussinessOwnerName.length == '')
       {
         return null
       }else if(this.bussinessOwnerName.length > 8)
       {
         return true
       }else{
         return false
       }
     }
   },
   methods:{
     submitListings(){
       this.$firestore.listings.add({
           ownerName:this.bussinessOwnerName,
           bussinessName:this.bussinessName,
           bussinessPhone:this.bussinessPhone,
           areaCode:this.areaCode,
           bussinessEmail:this.bussinessEmail,
           address1:this.bussinessAddress.address1,
           address2:this.bussinessAddress.address2,
           city:this.bussinessAddress.selectedCity,
           bussinessDescription:this.bussinessDescription,
           bussinessCategory:this.bussinessCategory,
           imageUrl:this.file
       })
     }
   }
}
</script>

<style>

</style>