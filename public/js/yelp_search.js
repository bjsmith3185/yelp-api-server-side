// alert("yelp_search.js")

$("#submit").on("click", function() {
    alert("clickec")
  var truck = $("#foodTruckName").val().trim()
    var data = {
        truck : $("#foodTruckName").val().trim()
    };
  
  

    $.ajax("/api/truck", {
        type: "post",
        data: data
      }).then(
        function() {
          console.log("client side ajax")
          // location.reload();
          // window.location.href = "/result";

        }
      );
   
    //   $.post("/api/truck", {data: truck}, function(result){
    //    console.log("complete")
    // });

})















































    // var settings = {
    //   "async": true,
    //   "url": `https://api.yelp.com/v3/businesses/Two Chicks and a Truck`,
    //   "method": "GET",
    //   "headers": {
    //     "authorization": "Bearer o9xNuv18aSk-fu_WL-8YoXbq9oiB-E24VVSuR1Nw4T4WND_fd1teCzTbfzT42mOqLIny_F7eiWazQwJViIQau6liQDy2FxuabwEogcATxcpEI3Sf4wgSrjrSkVDCW3Yx",
    //   },
    //   "data": {
    //     "client_id": "OMarYiidvyICrCg3MvLgGA",
    //   }
    // };
    
    // console.log(settings)
    
    // $.ajax(settings).then(function(response){
    //   console.log(response);
    // })


// var yelp = require('yelp-fusion');
 
// var client = yelp.client("o9xNuv18aSk-fu_WL-8YoXbq9oiB-E24VVSuR1Nw4T4WND_fd1teCzTbfzT42mOqLIny_F7eiWazQwJViIQau6liQDy2FxuabwEogcATxcpEI3Sf4wgSrjrSkVDCW3Yx");
 

//     // client.search({
//     //     // term:'Four Barrel Coffee',
//     //     term: "Two Chicks and a Truck",
//     //     location: 'charlotte, nc'
//     //   }).then(response => {
//     //     const firstResult = response.jsonBody.businesses[0];
//     //     const prettyJson = JSON.stringify(firstResult, null, 4);
//     //     console.log(prettyJson);
//     //   }).catch(e => {
//     //     console.log(e);
//     //   });


// client.search({
//     // term:'Four Barrel Coffee',
//     term: "Two Chicks and a Truck",
//     location: 'charlotte, nc',
//     reviews: '3',
//   }).then(response => {
//     var firstResult = response.jsonBody.businesses[0];
//     var prettyJson = JSON.stringify(firstResult, null, 4);
//     // console.log(prettyJson);
//     console.log(firstResult.id)
//     console.log(firstResult.name)
//     console.log(firstResult.image_url)
//     console.log(firstResult.categories[0].title)
//     console.log(firstResult.rating)
//     console.log(firstResult.price)
//     console.log(firstResult.phone)

//   }).catch(e => {
//     console.log(e);
//   });

