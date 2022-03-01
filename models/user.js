module.exports = (sequelize, dataTypes) => {
  const User = sequelize.define("User", {
    Id: {
      type: dataTypes.UUID,
      defaultValue: dataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    firstname: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    middlename: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    city: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    subcity: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    
  });
  // RealEstateBranch.associate = (models) => {
  //   RealEstateBranch.belongsTo(models.RealEstate, {
  //     foreignKey: {
  //       name: "realestateId",
  //       allowNull: false,
  //     },
  //     onDelete: "cascade",
  //   });
  //   RealEstateBranch.hasMany(models.House, {
  //     foreignKey: {
  //       name: "realestatebranchId",
  //       allowNull: false,
  //     },
  //     onDelete: "cascade",
  //   });
  //   RealEstateBranch.hasMany(models.RealEstateBranchImage, {
  //     foreignKey: {
  //       name: "realestatebranchId",
  //       allowNull: false,
  //     },
  //     onDelete: "cascade",
  //   });
  //   RealEstateBranch.hasMany(models.OutDoorFeature, {
  //     foreignKey: {
  //       name: "realestatebranchId",
  //       allowNull: true,
  //     },
  //     onDelete: "cascade",
  //   });
  //   RealEstateBranch.hasMany(models.InDoorFeature, {
  //     foreignKey: {
  //       name: "realestatebranchId",
  //       allowNull: true,
  //     },
  //     onDelete: "cascade",
  //   });
  //   RealEstateBranch.hasMany(models.Advantage, {
  //     foreignKey: {
  //       name: "realestatebranchId",
  //       allowNull: true,
  //     },
  //     onDelete: "cascade",
  //   });
  //   RealEstateBranch.hasMany(models.House, {
  //     foreignKey: {
  //       name: "realestatebranchId",
  //       allowNull: true,
  //     },
  //     onDelete: "cascade",
  //   });
  // };

  return User;
};
