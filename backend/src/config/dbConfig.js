const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    process.env.DDBB,
    process.env.DDBB_USER_NAME,
    process.env.DDBB_PASS,
    {
      host: process.env.HOST,
      dialect: process.env.DIALECT,
    }
  );

const initializeDB = async () => {
    try {
        await sequelize.authenticate()
        console.log("Succesfuly connected to database")
        await sequelize.sync({ force: false })
    } catch (error) {
        console.error("Error trying to connect to database: ", error)
    }
}

module.exports = { sequelize, initializeDB }