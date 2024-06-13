const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequalize");

const Hostel = sequelize.define("hostels", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
});

module.exports = Hostel;
