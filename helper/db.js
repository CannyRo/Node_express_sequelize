const Sequelize = require('sequelize');

//   dialect: 'postgres',
//   database: 'corgi_db',
//   user: 'postgres',
//   password: '2Zero3nH3r0_il_a_ch4nG2p0',
//   host: 'localhost',
//   port: 5432,
//   ssl: true

const sequelize = new Sequelize('corgi_db', 'postgres', '2Zero3nH3r0_il_a_ch4nG2p0', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
});

module.exports = sequelize;
