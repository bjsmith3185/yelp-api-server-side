module.exports = function(sequelize, DataTypes) {
    var businessNames = sequelize.define("businessNames", {
      // From Admin input
      name: {
        type: DataTypes.TEXT,
        allowNull: false
      },
  
  });
    return businessNames;
  };
  