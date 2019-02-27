const { db } = require('./db');

function createTables(){
    createTableProducts();
    createTableProviders();
    createTableInventory();
    createTableDailyReports();
    createTableMonthlyReports();
    createTableAnnualReports();
}

function createTableProducts(){
    db(`create table if not exists products
     (id int not null auto_increment, nameProduct varchar(50), provider varchar(30), total decimal(19,4),
      percentageProduct decimal(19,4), acquisitionPrice decimal(19,4), 
      unitPrice decimal(19,4), primary key(id));`)
      .then(res =>{ console.log(res)})
      .catch(error =>{console.log(error)});
}

function createTableProviders(){
    db(`create table if not exists providers
    (id int not null auto_increment, nameProvider varchar(50), nameEnterprise varchar(50),
     cellphone int, email varchar(120), primary key(id));`)
    .then(res =>{ console.log(res)})
    .catch(error =>{console.log(error)});
}

function createTableInventory(){
    db(`create table if not exists inventory
    (id int not null auto_increment, idProduct int, idProvider int,
     minProduct TINYINT(3), quantity TINYINT(5), primary key(id);)`)
    .then(res =>{ console.log(res)})
    .catch(error =>{console.log(error)});
}

function createTableDailyReports(){
    db(`create table if not exists daily_reports`)
    .then(res =>{ console.log(res)})
    .catch(error =>{console.log(error)});
}

function createTableMonthlyReports(){
    db(`create table if not exists monthly_reports`)
    .then(res =>{ console.log(res)})
    .catch(error =>{console.log(error)});
}

function createTableAnnualReports(){
    db(`create table if not exists annual_reports`)
    .then(res =>{ console.log(res)})
    .catch(error =>{console.log(error)});
}

module.exports = { createTables: createTables};
