create database xmart;
use xmart;
Create table DimCustomer
(
CustomerID int primary key,
CustomerAltID varchar(10) not null,
CustomerName varchar(50),
Gender varchar(20)
);
Create table DimProduct
(
ProductKey int primary key,
ProductAltKey varchar(10)not null,
ProductName varchar(100),
ProductActualCost real,
ProductSalesCost real
);
Create table DimStores
(
StoreID int primary key,
StoreAltID varchar(10)not null,
StoreName varchar(100),
StoreLocation varchar(100),
City varchar(100),
State varchar(100),
Country varchar(100)
);

Create table DimSalesPerson
(
SalesPersonID int primary key,
SalesPersonAltID varchar(10)not null,
SalesPersonName varchar(100),
StoreID int,
City varchar(100),
State varchar(100),
Country varchar(100)
);


CREATE TABLE DimTime(
TimeKey int NOT NULL,
TimeAltKey int NOT NULL,
Time30 varchar(8) NOT NULL,
Hour30 int NOT NULL,
MinuteNumber int NOT NULL,
SecondNumber int NOT NULL,
TimeInSecond int NOT NULL,
HourlyBucket varchar(15)not null,
DayTimeBucketGroupKey int not null,
DayTimeBucket varchar(100) not null
);


Create Table FactProductSales
(
TransactionId int primary key,
SalesInvoiceNumber int,
SalesDateKey int,
SalesTimeKey int,
SalesTimeAltKey int,
Quantity int,
SalesTotalCost int,
ProductActualCost int,
Deviation int,
 StoreID int,
CustomerID int,
ProductID int,
SalesPersonID int,
FOREIGN KEY (StoreID)REFERENCES DimStores(StoreID),
FOREIGN KEY (CustomerID)REFERENCES Dimcustomer(CustomerID),
FOREIGN KEY (ProductID)REFERENCES Dimproduct(ProductKey),
FOREIGN KEY (SalesPersonID)REFERENCES Dimsalesperson(SalesPersonID)
);

Insert into DimCustomer(CustomerID,CustomerAltID,CustomerName,Gender)values(1,'IMI-001','Aniket Modak','M');
Insert into DimCustomer(CustomerID,CustomerAltID,CustomerName,Gender)values(2,'IMI-002','Harshraj Dhote','M');
Insert into DimCustomer(CustomerID,CustomerAltID,CustomerName,Gender)values(3,'IMI-003','Neha Jawanjal','F');
Insert into DimCustomer(CustomerID,CustomerAltID,CustomerName,Gender)values(4,'IMI-004','Shridhar Patil','M');
Insert into DimCustomer(CustomerID,CustomerAltID,CustomerName,Gender)values(6,'IMI-005','Saundarya Yerawar','M');
Insert into DimCustomer(CustomerID,CustomerAltID,CustomerName,Gender)values(5,'IMI-005','Vishal Khokad','M');
select * from DimCustomer;


Insert into DimProduct(ProductKey,ProductAltKey,ProductName, ProductActualCost, ProductSalesCost)values(101,'ITM-001','Idli Instant Mix 1kg',5.50,6.50);
Insert into DimProduct(ProductKey,ProductAltKey,ProductName, ProductActualCost, ProductSalesCost)values(102,'ITM-002','Gram 1kg',22.50,24);
Insert into DimProduct(ProductKey,ProductAltKey,ProductName, ProductActualCost, ProductSalesCost)values(103,'ITM-003','Redlabel Tea 1 kg',42,43.5);
Insert into DimProduct(ProductKey,ProductAltKey,ProductName, ProductActualCost, ProductSalesCost)values(104,'ITM-004','Cinthol Soap',18,20);
Insert into DimProduct(ProductKey,ProductAltKey,ProductName, ProductActualCost, ProductSalesCost)values(105,'ITM-005','SurfXL Washing Powder 1kg',135,139);
select * from DimProduct;

Insert into DimStores(StoreID,StoreAltID,StoreName,StoreLocation,City,State,Country )values(501,'LOC-A1','X-Mart','Hingana','Nagpur','Mah','India');
Insert into DimStores(StoreID,StoreAltID,StoreName,StoreLocation,City,State,Country )values(502,'LOC-A2','X-Mart','Shivaji Nagar','Pune','Mah','India');
Insert into DimStores(StoreID,StoreAltID,StoreName,StoreLocation,City,State,Country )values(503,'LOC-A3','X-Mart','Near Bus Stand','Sangli','Mah','India');
Insert into DimStores(StoreID,StoreAltID,StoreName,StoreLocation,City,State,Country )values(504,'LOC-A4','X-Mart','Nandura','Buldhana','Mah','India');
Insert into DimStores(StoreID,StoreAltID,StoreName,StoreLocation,City,State,Country )values(505,'LOC-A4','X-Mart','Malkapur','Buldhana','Mah','India');
select * from DimStores;

Insert into DimSalesPerson(SalesPersonID,SalesPersonAltID,SalesPersonName,StoreID,City,State,Country )values
(11,'SP-DMSPR1','dhananjay',1,'Nagpur','Mah','India');
Insert into DimSalesPerson(SalesPersonID,SalesPersonAltID,SalesPersonName,StoreID,City,State,Country )values
(12,'SP-DMSPR2','poonam',1,'Nagpur','Mah','India');
Insert into DimSalesPerson(SalesPersonID,SalesPersonAltID,SalesPersonName,StoreID,City,State,Country )values
(13,'SP-DMNGR1','Shreya',2,'Pune','Mah','India');
Insert into DimSalesPerson(SalesPersonID,SalesPersonAltID,SalesPersonName,StoreID,City,State,Country )values
(14,'SP-DMNGR2','bharambe',2,'Sangli','Mah','India');
Insert into DimSalesPerson(SalesPersonID,SalesPersonAltID,SalesPersonName,StoreID,City,State,Country )values
(15,'SP-DMSVR1','somnath',3,'Buldhana','Mah','India');
Insert into DimSalesPerson(SalesPersonID,SalesPersonAltID,SalesPersonName,StoreID,City,State,Country )values
(16,'SP-DMSVR2','pranay',3,'Buldhana','Mah','India');
select * from DimSalesPerson;



INSERT INTO DimTime (TimeKey,TimeAltKey, Time30,Hour30,MinuteNumber, SecondNumber, TimeInSecond,HourlyBucket, DayTimeBucketGroupKey,DayTimeBucket)
values(1,30000,'3:00:00',3,00,00,10800,'3:00-3:59',1,'Early Morning(03:00 AM To 6:59 AM)');
INSERT INTO DimTime (TimeKey,TimeAltKey, Time30,Hour30,MinuteNumber, SecondNumber, TimeInSecond,HourlyBucket, DayTimeBucketGroupKey,DayTimeBucket)
values(2,121000,'12:10:00',12,10,00,43800,'12:00-12:59',4,'Lunch (12:00 PM To 13:59 PM)');
Select * from DimTime;

INSERT INTO FactProductSales values(1,2,4,1,10000,1,1,1,1,501,1,101,11);
Select * from FactProductSales;



