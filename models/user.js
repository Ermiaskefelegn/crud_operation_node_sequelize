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
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    subcity: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    
  });

  return User;
};
