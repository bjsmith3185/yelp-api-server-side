// alert("yelp_search.js")

$.get("/all", function(data) {

  if (data.length !== 0) {
    console.log(data);

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      // row.addClass("chirp");

      row.append("<p>" + data[i].name + " chirped.. </p>");
      row.append("<p>" + data[i].image_url + "</p>");
     

      $("#results").prepend(row);

    }

  }

});

$("#submit").on("click", function () {

  var truck = $("#foodTruckName").val().trim()
  var data = {
    truck: $("#foodTruckName").val().trim()
  };



  $.ajax("/api/truck", {
    type: "post",
    data: data
  }).then(function() {
    location.reload();
  }
   
  );

  //   $.post("/api/truck", {data: truck}, function(result){
  //    console.log("complete")
  // });

  function getResult() {
    $.get("/all", function(data) {

      if (data.length !== 0) {
        console.log(data.length);
    
        for (var i = 0; i < data.length; i++) {
    
          var row = $("<div>");
          // row.addClass("chirp");
    
          row.append("<p>" + data[i].name + " chirped.. </p>");
          row.append("<p>" + data[i].image_url + "</p>");
         
    
          $("#results").prepend(row);
    
        }
    
      }
    
    });
  }

})


// $.get("/", function(data) {

//   if (data.length !== 0) {

//     for (var i = 0; i < data.length; i++) {

//       var row = $("<div>");
//       // row.addClass("chirp");

//       row.append("<p>" + data[i].name + " chirped.. </p>");
//       row.append("<p>" + data[i].image_url + "</p>");
     

//       $("#chirp-area").prepend(row);

//     }

//   }

// });


