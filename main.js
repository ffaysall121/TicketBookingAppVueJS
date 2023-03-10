let app = Vue.createApp({
    data(){
        return {
          name:'',
          mobile:"",
          confirmed:false,
          appliedCoupon:null,
          couponCode:"",
          sit:false,
          coupons:[
            {
              code:"1234567890",
              discount:100
            },
            {
              code:"1234567891",
              discount:200
            },
            {
              code:"1234567892",
              discount:300
            },
          ],
            wish:"good news",
           seatStates:{
            sold:{
                
                    text:'Sold',
                    color:"red",
                
                },
            available:{
                
                text:'Available',
                color:"white",
            
                },
        booked:{
                
            text:'Booked',
            color:"gray",
        
                },
        selected:{
                
            text:'Selected',
            color:"orange",
                
            }
        },
        seats: [
            {
              name: "A1",
              type: "available",
              price: 500
            },
            {
              name: "A2",
              type: "available",
              price: 500
            },
            {
              name: "A3",
              type: "available",
              price: 500
            },
            {
              name: "A4",
              type: "available",
              price: 500
            },
            {
              name: "B1",
              type: "available",
              price: 450
            },
            {
              name: "B2",
              type: "available",
              price: 450
            },
            {
              name: "B3",
              type: "available",
              price: 450
            },
            {
              name: "B4",
              type: "available",
              price: 450
            },
            {
              name: "C1",
              type: "sold",
              price: 500
            },
            {
              name: "C2",
              type: "sold",
              price: 500
            },
            {
              name: "C3",
              type: "sold",
              price: 500
            },
            {
              name: "C4",
              type: "sold",
              price: 500
            },
            {
              name: "D1",
              type: "available",
              price: 400
            },
            {
              name: "D2",
              type: "available",
              price: 400
            },
            {
              name: "D3",
              type: "available",
              price: 400
            },
            {
              name: "D4",
              type: "available",
              price: 400
            },
            {
              name: "E1",
              type: "available",
              price: 300
            },
            {
              name: "E2",
              type: "available",
              price: 300
            },
            {
              name: "E3",
              type: "booked",
              price: 300
            },
            {
              name: "E4",
              type: "booked",
              price: 300
            },
            {
              name: "F1",
              type: "available",
              price: 300
            },
            {
              name: "F2",
              type: "available",
              price: 300
            },
            {
              name: "F3",
              type: "available",
              price: 300
            },
            {
              name: "F4",
              type: "available",
              price: 300
            }
          ]
             
        };

    },

        
    computed:{
      selectSeat(){
        let s = this.seats.filter(item=>item.type === 'seleceted');
        return s;

      },
      totalCost(){
        let total = 0;
        this.selectSeat.forEach(seat => {
          total+=seat.price;
        });
        if (this.appliedCoupon != null) {
          let r = this.appliedCoupon.discount;
          total=total-r;
          console.log(this.appliedCoupon);
          
        
        }
        console.log(total);
        return total;
      },

      
      
    },

    methods: {
        handelClick(i){
           let s = this.seats[i];
          console.log(s);
           if(this.selectSeat.length >3){
            
            if(s.type === "seleceted"){
              s.type='available';
              this.sit=false;  
             }
             else{

            alert('one user can not select more than 4 seats');
            return s;
             }

           }

           else{

           if(s.type === "available"){
            console.log(s.type);
            s.type='seleceted';
            this.sit=true;
            
           }

           else if(s.type === "seleceted"){
            s.type='available';
            this.sit=false;  
           }

         

           else
           {
              alert('Please select another.this seat already exists');
            
              return s;
           }
          }
         
          
        },

        confirm(){
          if(!this.name||!this.mobile)
          {
            alert('Please enter name and mobile');
            return ;
          }
          this.confirmed = true; 
        },


        resetData(){
          this.confirmed = false;
          this.name = '';
          this.mobile = '';
          this.appliedCoupon=null;

          this.seats.forEach((seat)=>{
            if(seat.type =='seleceted'){
              seat.type='sold';
            }
          })
        },
        
    },


    watch:{
      couponCode(newValue){
        if(newValue.length==10)
        {
          let searchedCoupon= this.coupons.filter(item =>item.code==newValue);

          if(searchedCoupon.length == 1){
            this.appliedCoupon = searchedCoupon[0];
            this.couponCode = '';
          }
          else{
            alert("couponCode not valid");
          }
        }
      }

    }

    }).mount('#app')