let Sequelize = require("sequelize");

let sequelize = new Sequelize("purchasedItems_db", "root", "Adeyemi2", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  define: {
    timestamps: false
  }
});



module.exports = sequelize;