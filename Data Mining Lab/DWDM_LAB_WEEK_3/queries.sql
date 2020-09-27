create database week3;
use week3;
 
 /*Headquarter tables*/ 
 
create table customer(customer_id integer primary key, customer_name char(30), city_id integer, first_order_date date);
create table walk_in_customers(customer_id integer,tourism_guide char(30), _Time datetime ,foreign key (customer_id) references customer(customer_id));
create table Mail_order_customers (customer_id integer, post_address char(100), foreign key (customer_id) references customer(customer_id)) ;

 /*Sales tables*/ 

create table Headquarters(City_id integer primary key, City_name char(35),  Headquarter_addr char(100), State char(50), _Time datetime);
create table  Stores (Store_id integer primary key,City_id integer, Phone int(10), _Time datetime,foreign key (city_id) references headquarters(city_id)) ;
create table  Items (Item_id integer primary key , Description char(100), Size integer, Weight double, Unit_price double, _Time datetime); 
create table  Stored_items (Store_id integer, Item_id integer , Qantity_held integer , _Time datetime,foreign key (store_id) references stores(store_id), foreign key (item_id) references items(item_id));
create table  _Order (Order_no integer primary key, Order_date date, Customer_id integer) ;
create table  Ordered_item (Order_no integer, Item_id integer, Quantity_ordered integer, Ordered_price double, _Time datetime,foreign key (item_id) references items(item_id),foreign key (order_no) references _Order(order_no)) ;

INSERT INTO `_order` VALUES (1,'2020-05-21',1),(2,'2020-07-18',1),(3,'2020-06-21',2),(4,'2020-02-02',3),(5,'2020-03-04',4),(6,'2020-08-08',5),(7,'2020-10-08',3),(8,'2020-08-08',2),(9,'2020-01-01',3),(10,'2020-04-05',2),(11,'2020-05-04',1),(12,'2020-03-02',5),(13,'2020-03-15',4),(14,'2020-04-20',8),(15,'2020-05-06',9);
INSERT INTO `customer` VALUES (1,'Aniket',1,'2020-01-11'),(2,'Harshraj',2,'2020-02-01'),(3,'Neha',3,'2020-02-11'),(4,'Shyam',1,'2020-02-21'),(5,'Shridhar',2,'2020-03-01'),(6,'Sagar',4,'2020-03-11'),(7,'Ajinkya',1,'2020-03-21'),(8,'Shreyash',2,'2020-03-31'),(9,'Saurabh',3,'2020-04-01'),(10,'Rahul',4,'2020-04-01');
INSERT INTO `headquarters` VALUES (1,'Pune','Shivaji Nagar','Maharastra','2020-01-01 00:00:00'),(2,'Mumbai','Coast','Mahaarastra','2020-01-01 00:00:00'),(3,'Sangli','Walchand College','Maharastra','2020-01-01 00:00:00'),(4,'Bangalore','IT park','Karnataka','2020-01-01 00:00:00'),(5,'Delhi','Metro station','Delhi','2020-01-01 00:00:00');
INSERT INTO `items` VALUES (1,'Vaccume Cleaner',10,12.5,100,'2020-01-21 00:00:00'),(2,'Laptop',7,1.25,200,'2020-02-01 00:00:00'),(3,'Refrigerator',25,42,300,'2020-01-05 00:00:00'),(4,'Table',12,27,400,'2020-01-05 00:00:00'),(5,'Television',15,47,500,'2020-01-01 00:00:00');
INSERT INTO `mail_order_customers` VALUES (1,'Shivaji Nagar,Pune'),(2,'Mumbai'),(3,'Spurty Chawk, Sangli'),(4,'Shivaji Nagar,Pune'),(5,'Mumbai'),(6,'Bangalore'),(7,'Shivaji Nagar, Pune'),(8,'Mumbai'),(9,'MIDC, Sangli'),(10,'Bangalore');
INSERT INTO `ordered_item` VALUES (1,1,5,500,'2020-05-21 00:00:00'),(1,5,20,10000,'2020-05-21 00:00:00'),(2,2,15,3000,'2020-07-18 00:00:00'),(2,3,15,4500,'2020-07-18 00:00:00'),(2,4,10,4000,'2020-07-18 00:00:00'),(3,2,5,1000,'2020-06-21 00:00:00'),(4,1,20,2000,'2020-02-02 00:00:00'),(5,2,1,200,'2020-03-04 00:00:00'),(6,5,2,1000,'2020-08-08 00:00:00'),(7,4,5,2000,'2020-10-08 00:00:00'),(8,2,7,1400,'2020-08-08 00:00:00'),(8,4,4,1600,'2020-08-08 00:00:00'),(9,2,1,200,'2020-01-01 00:00:00'),(9,3,6,1800,'2020-01-01 00:00:00'),(10,1,4,400,'2020-04-05 00:00:00'),(11,5,4,2000,'2020-05-04 00:00:00'),(12,4,6,2400,'2020-03-02 00:00:00'),(13,4,4,1600,'2020-03-15 00:00:00'),(14,5,2,1000,'2020-04-20 00:00:00'),(15,1,1,100,'2020-05-06 00:00:00');
alter table stores modify column phone varchar(10);
INSERT INTO `stored_items` VALUES (1,1,50,'2020-01-01 00:00:00'),(1,2,40,'2020-01-01 00:00:00'),(2,3,100,'2020-01-01 00:00:00'),(2,4,50,'2020-01-01 00:00:00'),(3,1,50,'2020-01-01 00:00:00'),(3,2,100,'2020-01-01 00:00:00'),(4,3,20,'2020-01-01 00:00:00'),(4,4,50,'2020-01-01 00:00:00'),(5,5,10,'2020-01-01 00:00:00'),(6,1,5,'2020-01-01 00:00:00'),(6,2,15,'2020-01-01 00:00:00'),(6,5,30,'2020-01-01 00:00:00'),(7,4,50,'2020-01-01 00:00:00'),(8,1,25,'2020-01-01 00:00:00'),(8,5,40,'2020-01-01 00:00:00'),(9,2,18,'2020-01-01 00:00:00'),(9,4,80,'2020-01-01 00:00:00'),(10,5,20,'2020-01-01 00:00:00'),(11,1,100,'2020-01-01 00:00:00'),(12,2,30,'2020-01-01 00:00:00'),(12,3,5,'2020-01-01 00:00:00'),(13,4,5,'2020-01-01 00:00:00');
INSERT INTO `stores` VALUES (1,1,'9921990090','2020-01-01 00:00:00'),(2,1,'7914545645','2020-01-11 00:00:00'),(3,1,'7814545645','2020-02-01 00:00:00'),(4,2,'8714545645','2020-01-01 00:00:00'),(5,2,'9714545645','2020-01-01 00:00:00'),(6,3,'984545645','2019-12-01 00:00:00'),(7,3,'7614545645','2019-02-01 00:00:00'),(8,3,'7514545645','2019-02-01 00:00:00'),(9,4,'7114545645','2020-02-01 00:00:00'),(10,4,'9514545645','2020-01-01 00:00:00'),(11,4,'9714545645','2019-12-01 00:00:00'),(12,5,'8514545645','2019-11-01 00:00:00'),(13,5,'8114545645','2019-01-01 00:00:00');
INSERT INTO `walk_in_customers` VALUES (1,'ABC','2020-01-01 00:00:00'),(2,'PQR','2019-12-30 00:00:00'),(3,'MNO','2020-01-01 00:00:00'),(4,'ABC','2020-01-01 00:00:00'),(5,'MNO','2020-02-01 00:00:00'),(6,'RST','2020-01-02 00:00:00'),(7,'PQR','2020-01-05 00:00:00'),(8,'ABC','2019-11-01 00:00:00'),(9,'MNO','2019-05-01 00:00:00'),(10,'XYZ','2020-01-01 00:00:00');
select * from _order;
select * from customer;
select * from headquarters;
select * from items;
select * from mail_order_customers;
select  * from ordered_item;
select * from stored_items;
select * from stores;
select * from walk_in_customers;
-- Find all the stores along with city, state, phone, description, size, weight and  
-- unit  price that hold a particular item of stock.
	create table store_item_details(store_id int,city_name varchar(25),state varchar(25) ,phone varchar(10)
	,description varchar(100),size int,weight double,unit_price double);
	alter table store_item_details drop primary key;
	insert into store_item_details(store_id,city_name,state,phone,description,size,weight,unit_price)
	select st.store_id,hd.city_name,state,phone,description,size,weight,unit_price from headquarters hd 
	inner join stores st on hd.city_id = st.city_id 
	inner join stored_items sti on sti.store_id = st.store_id 
	inner join items it on it.item_id = sti.item_id;
select * from store_item_details;

-- Find all the orders along with customer name and order date that can be  fulfilled by a given store
create table customer_order_details(order_no int,order_date date,customer_name varchar(30),item_id int);

insert into customer_order_details
select od.order_no,order_date,customer_name,oi.item_id from _order od
inner join customer cus on od.customer_id = cus.customer_id
inner join ordered_item oi on od.order_no = oi.order_no
inner join stored_items sti on sti.item_id = oi.item_id;
select distinct * from customer_order_details;
-- Find all stores along with city name and phone that hold items ordered by  given customer
create table customer_order_store_details(store_id int,city_name varchar(35),phone varchar(10),item_id int,customer_id int,customer_name varchar(30));

insert into customer_order_Store_details
select sid.store_id,city_name,phone,si.item_id,customer_id,cod.customer_name from store_item_details sid
inner join stored_items si on sid.store_id = si.store_id
inner join customer_order_details cod on si.item_id = cod.item_id
inner join customer cus on cus.customer_name  = cod.customer_name;
select distinct store_id,city_name,phone from customer_order_store_details where item_id in (select item_id from customer_order_details);

savepoint customer_order_store_details;

-- Find the headquarter address along with city 
-- and state of all stores that hold  stocks of an item above a particular level. 

create table store_headquarter_item_details(store_id int,city_name varchar(30),headquarter_addr varchar(100)
, state varchar(50), item_id int, qantity_held int,SI_Time datetime);

insert into store_headquarter_item_details
select distinct st.store_id,city_name,headquarter_addr,state,item_id,Qantity_held,si._time from headquarters hq
inner join stores st on st.city_id = hq.city_id
inner join stored_items si on st.store_id = si.store_id;

select headquarter_addr,city_name,state,store_id,sum(qantity_held) 
 from store_headquarter_item_details where item_id = 2 group by headquarter_addr,city_name,state,store_id
with rollup having sum(qantity_held) > 50;





-- 8.Find the items, quantity ordered, customer, store and city of an order.
SELECT distinct Customer_name,city_id,Qantity_held,description,s.store_id 
FROM _Order ,Customer,Ordered_Item,Items, Stored_items s 
WHERE _Order.Order_no =Ordered_Item.Order_no and Customer.Customer_id=_Order.customer_id 
and Ordered_Item.Item_id= Items.Item_id and S.item_id= Items.item_id; 



