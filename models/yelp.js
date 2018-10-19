module.exports = function(sequelize, DataTypes) {
  var YelpDB = sequelize.define("Yelps", {
    yelpID: DataTypes.STRING,
    name: DataTypes.STRING,
    image_url: DataTypes.TEXT,
    category: DataTypes.STRING,
    rating: DataTypes.STRING,
    reviewCount: DataTypes.STRING,  // added this line 
    price: DataTypes.STRING,
    phone: DataTypes.TEXT,

    review_1_text : DataTypes.TEXT,
    review_1_rating :  DataTypes.TEXT,
    review_1_time : DataTypes.TEXT,
    review_1_author : DataTypes.TEXT,

    review_2_text : DataTypes.TEXT,
    review_2_rating :  DataTypes.TEXT,
    review_2_time : DataTypes.TEXT,
    review_2_author : DataTypes.TEXT,

    review_3_text : DataTypes.TEXT,
    review_3_rating :  DataTypes.TEXT,
    review_3_time : DataTypes.TEXT,
    review_3_author : DataTypes.TEXT,
  });
  return YelpDB;
};