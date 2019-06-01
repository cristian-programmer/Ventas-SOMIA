const { db } = require('./db');

function createTables(){
   // createTableProducts();
    createTableProviders();
    createTableInventory();
    createTableDailyReports();
    createTableMonthlyReports();
    createTableAnnualReports();
    createTableUsers();
    createTableProducts();
    createTablePlate();
    createTableIngredients();
    createTableStock();
    createTableReportV();
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
     minProduct TINYINT(3), quantity TINYINT(5), primary key(id));`)
    .then(res =>{ console.log(res)})
    .catch(error =>{console.log(error)});
}

function createTableDailyReports(){
    db(`create table if not exists daily_reports
    (id int not null auto_increment, reportDay datetime, dailySale decimal(7,4),primary key(id));`)
    .then(res =>{ console.log(res)})
    .catch(error =>{console.log(error)});
}

function createTableMonthlyReports(){
    db(`create table if not exists monthly_reports 
    (id int not null auto_increment, reportDate datetime, monthlySale decimal(7,4), primary key(id));`)
    .then(res =>{ console.log(res)})
    .catch(error =>{console.log(error)});
}

function createTableAnnualReports(){
    db(`create table if not exists annual_reports 
    (id int not null auto_increment, reportDate datetime, annualSale decimal(7,4), primary key(id));`)
    .then(res =>{ console.log(res)})
    .catch(error =>{console.log(error)});
}

function createTableUsers(){
    db(`create table if not exists users (id int not null auto_increment, username varchar(20),
    password varchar(100), primary key(id));`)
    .then(res => console.log(res))
    .catch(error => console.log(error));
}

function createTablePlate(){
    db(`create table if not exists plate  (id int not null auto_increment, precie int, name varchar(50), idinv int, primary key(id));`)
    .then(res =>{console.log(res)})
    .catch(error =>{console.log(error)});
}

function createTableIngredients(){
    db(`create table if not exists ingredients (id int not null auto_increment, name varchar(50), 
    purcharse_price int, type_weight varchar(10), weight varchar(10), primary key(id));`)
    .then(res =>{console.log(res)})
    .catch(error =>{console.log(error)});
}

function createTableStock(){
    db(`create table if not exists stock
    (id int not null auto_increment, iding int,
     idplate int, quantity TINYINT(5), primary key(id));`)
    .then(res =>{ console.log(res)})
    .catch(error =>{console.log(error)});
}

function createTableReportV(){
    db(`create table if not exists report
    (id int not null auto_increment, idinv int, sale int, purcharse_price int, primary key(id));`)
    .then(res =>{ console.log('ok create all tables',res)})
    .catch(error =>{console.log(error)});
}

module.exports = { createTables: createTables};
