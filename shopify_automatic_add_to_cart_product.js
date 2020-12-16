$( document ).ready(function() {

        setInterval(function(){
          var cartItems = {{ cart.items | json }};
          var cartprice = {{cart.total_price}};

          if(cartprice >= 15000){
            //           console.log("CARTPrice Greater");

            var JsonData = JSON.parse(JSON.stringify(cartItems));

            if(JsonData.length > 0){
              var allId = [];

              for(var i = 0; i < JsonData.length; i++){
                allId.push(JsonData[i]["id"]);
              }

              if(allId.includes(32623569633342) == false){

                var data = {
                  "id": "32623569633342",
                  "quantity": 1
                };
                jQuery.ajax({
                  type: 'POST',
                  url: '/cart/add.js',
                  data: data,
                  dataType: 'json',
                  success: function(response) {
                    console.log(response);
                    window.location.reload();
                  }
                });	
              };
            }
          }
        }, 3000)
      });