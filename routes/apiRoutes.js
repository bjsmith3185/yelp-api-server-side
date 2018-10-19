var db = require("../models");
var yelpApi = require("../helper/yelpAPIcall")

module.exports = function (app) {

  app.get("/all", function (req, res) {
    db.Yelps.findAll({
      order: [
        ['id', 'DESC'],

    ],
    }).then(function (data) {
      // var data = {
      //   data: results
      // }
      console.log("here")
      console.log(data)
      res.json(data);
    });
  })


  
  // app.get("/", function (req, res) {

  //   res.render("yelp_search", );
  // });

  app.post("/api/truck", function (req, res) {
    var truckName = req.body.truck;

    yelpApi(truckName).then(function (response) {

      db.Yelps.create({
        yelpID: response.yelpID,
        name: response.name,
        image_url: response.image_url,
        category: response.category,
        rating: response.rating,
        reviewCount: response.reviewCount,
        price: response.price,
        phone: response.phone,

        review_1_text: response.review_1_text,
        review_1_rating: response.review_1_rating,
        review_1_time: response.review_1_time,
        review_1_author: response.review_1_author,

        review_2_text: response.review_2_text,
        review_2_rating: response.review_2_rating,
        review_2_time: response.review_2_time,
        review_2_author: response.review_2_author,

        review_3_text: response.review_3_text,
        review_3_rating: response.review_3_rating,
        review_3_time: response.review_3_time,
        review_3_author: response.review_3_author,
      }).then(function (result) {
        console.log("saved to database")

        // console.log(result);

        // var data = {
        //   data: result
        // }
        // console.log(data)
      res.json(result)
      });
    })
  });



// it seems this is being called before the info is stored into the database

  // app.get("/api/results", function (req, res) {
  //   db.Yelps.findAll({}).then(function (results) {
  //     var data = {
  //       data: results
  //     }
  //     console.log(data)
  //     res.render("info_page", data);
  //   });
  // })

};








// app.post("/api/truck", function(req, res) {
//   console.log("server-side")
//   console.log(req.body)
//   var truckName = req.body.truck;
//   console.log(truckName)
//   db.businessNames.create({name: truckName}, function(result) {
//   //   // Send back the ID of the new quote

//   });



//   res.json(truckName);
// });
