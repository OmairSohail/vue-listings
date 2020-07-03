export const listingData = {
  
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
              selectedCountry:null,
              city:null,
              countries:null
          },
          bussinessDescription:'',
          bussinessTags:[],
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
          ],
          imgUploadProgress:null
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
      },
      emailValidation()
       {
          if(this.bussinessEmail == '')
          {
             return null
          }
          const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
          if(re.test(String(this.bussinessEmail).toLowerCase()))
          {
             return true
          }else{
             return false
          }
       },
       areaCodeValidation()
       {
          if(this.areaCode == '') 
          {
             return null;
          }else if(this.areaCode.length < 6 || this.areaCode.length > 6)
          {
            return false;
          }else{
            return true;
          }
       },
       tagsValidation(){
          if(this.bussinessTags.length == 0)
          {
            return null
          }else if(this.bussinessTags.length > 2)
          {
             return true
          }else{
            return false
          }
       },
       value(){
          return this.imgUploadProgress
       }
 
       },
    methods:{
        uploadImage(e)
        {
           const imagesRef = storage.ref();
             if(e.target.files[0]){
           
             let file = e.target.files[0];
       
             var storageRef = firebase.storage().ref('Images/'+ Math.random() + '_'  + file.name);
       
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
               // Handle successful uploads on complete
               // For instance, get the download URL: https://firebasestorage.googleapis.com/...
               
               uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                 this.file = downloadURL;
               });
             });
         }
        }
       },
       created()
       { 
          // GET /someUrl
          this.$http.get('https://restcountries.eu/rest/v2/all?fields=name;capital;').then( (response) => {
        
            // get body data
            this.bussinessAddress.countries = response.body;
          }, ( response ) => {
            // error callback
            console.log(response)
          });
       }
       
}