let app = Vue.createApp({
    data(){
        return {
          appliedCoupon:null,
          couponCode:"",
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
        console.log(total);
        return total;
      },
      
    },

    methods: {
        handelClick(i){
           let s = this.seats[i];

           if(this.selectSeat.length >3){
            
            alert('one user can not select more than 4 seats');
            return s;

           }
           if(s.type === "available"){
            console.log(s.type);
            s.type='seleceted';
            
           }

           else if(s.type === "seleceted"){
            s.type='available';
                
           }

           else
           {
              alert('Please select another.this seat already exists');
            
              return s;
           }
         
          
        }
    },


    watch:{

    }

    }).mount('#app')