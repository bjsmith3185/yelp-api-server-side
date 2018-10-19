module.exports = function(sequelize, DataTypes) {
  var FoodTruck = sequelize.define("FoodTruck", {
    // From Admin input
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },

});
  return FoodTruck;
};
