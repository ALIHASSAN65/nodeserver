const app = require('express')();

const { Sequelize } = require('sequelize');


// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('BGentry', 'admin', 'z7*)7xCtAc', {
    host: 'black-gentry-staging.ct3y0kdbyqpy.us-east-2.rds.amazonaws.com',
    dialect: 'mysql' /*| 'mariadb' | 'postgres' | 'mssql' */
});
 name=async()=> {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

name()








app.listen(3000, () => console.log('server is running at 3000'))