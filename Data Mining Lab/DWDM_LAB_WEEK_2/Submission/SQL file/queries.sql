

---ACTIVITY 1
--Schema Creation
--DIM_Item Table
create table dim_item( id_item integer, itemname varchar2(20), color varchar2(20), price real, primary key(id_item));
--DIM_Time Table
create table dim_time(id_time integer, realdate date, yearmonth varchar2(20), primary key(id_time));
--DIM_Place Table
create table dim_place(	id_place integer,	shopname varchar2(20),	city varchar2(10),	country varchar2(3),
primary key(id_place));
--FACT_sale Table
create table fact_sale(	id_sale char(5),	id_item integer,	id_place integer,	id_time integer,	
total real,	foreign key(id_item) references dim_item(id_item),	foreign key(id_place) references dim_place(id_place),
foreign key(id_time) references dim_time(id_time),	primary key(id_sale));

--Data Insertion
INSERT INTO dim_item VALUES (1,'Bat','Brown',4563.7);
INSERT INTO dim_item VALUES (2,'Shoes','Black',2533);
INSERT INTO dim_item VALUES (3,'Glubs','Blue',651.9);
INSERT INTO dim_item VALUES (4,'Pads','Blue',1367.3);
INSERT INTO dim_item VALUES (5,'Helmet','Blue',299);
INSERT INTO dim_item VALUES (6,'Tshirt','Blue',599);

INSERT INTO dim_place VALUES (1,'NJ Enterprises','Akola','IND');
INSERT INTO dim_place VALUES (2,'AM Sports','Sangli','IND');
INSERT INTO dim_place VALUES (3,'Shridhar Sports','Delhi','IND');
INSERT INTO dim_place VALUES (4,'Patil Sports','London','UK');
INSERT INTO dim_place VALUES (5,'SK Enterprises','NewYork','USA');
INSERT INTO dim_place VALUES (6,'DK Sports','Tokiyo','JPN');
INSERT INTO dim_place VALUES (7,'SS Suppliers','Hiroshima','JPN');

INSERT INTO dim_time VALUES (1,'01-09-2020','2020-SEP');
INSERT INTO dim_time VALUES (2,'03-08-2020','2020-AUG');
INSERT INTO dim_time VALUES (3,'20-07-2020','2020-JUL');
INSERT INTO dim_time VALUES (4,'21-06-2020','2020-JUN');
INSERT INTO dim_time VALUES (5,'09-03-2020','2020-MAR');
INSERT INTO dim_time VALUES (6,'08-02-2020','2020-FEB');

INSERT INTO fact_sale VALUES ('1',1,1,1,'4563.7');
INSERT INTO fact_sale VALUES ('10',3,7,2,'651.9');
INSERT INTO fact_sale VALUES  ('11',2,3,5,'2533' );
INSERT INTO fact_sale  VALUES ('12',1,4,6,'4563.7');
INSERT INTO fact_sale  VALUES ('13',2,5,6,'2533');
INSERT INTO fact_sale VALUES  ('14',3,3,5,'651.9');
INSERT INTO fact_sale VALUES  ('16',4,2,4,'1367.3');
INSERT INTO fact_sale VALUES  ('17',5,2,1,'299');
INSERT INTO fact_sale  VALUES ('18',6,6,3,'599');
INSERT INTO fact_sale VALUES  ('19',6,3,2, '599');
INSERT INTO fact_sale VALUES  ('2',2,3,2,'2533' );
INSERT INTO fact_sale VALUES  ('20',5,1,4,'299');
INSERT INTO fact_sale VALUES  ('21',4,2,6, '1367.3');
INSERT INTO fact_sale VALUES  ('22',3,4,5, '651.9');
INSERT INTO fact_sale VALUES  ('23',2,5,6,'2533');
INSERT INTO fact_sale VALUES  ('24',1,7,1,'4563.7');
INSERT INTO fact_sale VALUES  ('25',1,6,1, '4563.7');
INSERT INTO fact_sale VALUES  ('26',2,4,5,'2533' );
INSERT INTO fact_sale VALUES  ('27',3,3,4,'651.9');
INSERT INTO fact_sale VALUES  ('28',4,2,6,'1367.3');
INSERT INTO fact_sale VALUES  ('29',5,4,3,'299');
INSERT INTO fact_sale VALUES  ('3',1,2,4,  '4563.7');
INSERT INTO fact_sale VALUES  ('30',6,5,3, '599');
INSERT INTO fact_sale VALUES  ('31',6,5,2,'599');
INSERT INTO fact_sale VALUES  ('32',5,7,2,'299');
INSERT INTO fact_sale VALUES  ('33',4,7,5,'1367.3' );
INSERT INTO fact_sale VALUES  ('34',3,1,1,'651.9');
INSERT INTO fact_sale VALUES  ('4',2,3,4,'2533');
INSERT INTO fact_sale VALUES  ('5',5,3,6,'299');
INSERT INTO fact_sale VALUES  ('6',1,7,6,'4563.7');
INSERT INTO fact_sale VALUES  ('7',6,4,1,'599');
INSERT INTO fact_sale VALUES  ('8',4,6,3,'1367.3' );
INSERT INTO fact_sale VALUES  ('9',3,7,4,'651.9');


--Activity 2 --Using RollUp
--1
select id_item,id_place,sum(total) as "Total" from fact_sale 
group by 
rollup(id_item,id_place)
order by id_item,id_place;
--2
select t2.itemname,t3.shopname,sum(total) as "Total" from fact_sale t1 inner 
join dim_item t2 on t1.id_item = t2.id_item inner join dim_place t3 on t1.id_place = t3.id_place 
group by rollup(t2.itemname,t3.shopname);
--3
select t2.itemname,t3.city,t4.yearmonth,sum(total) as "Total" from fact_sale t1 inner 
join dim_item t2 on t1.id_item = t2.id_item inner join dim_place t3 on t1.id_place = t3.id_place 
inner join dim_time t4 on t1.id_time = t4.id_time
group by rollup(t2.itemname,t3.city,t4.yearmonth);
--4
select t2.color,t3.country,t4.yearmonth,sum(total) as "Total" from fact_sale t1 inner 
join dim_item t2 on t1.id_item = t2.id_item inner join dim_place t3 on t1.id_place = t3.id_place 
inner join dim_time t4 on t1.id_time = t4.id_time
group by rollup(t2.color,t3.country,t4.yearmonth);

--Activity 3 --Using Cube
--1
select id_item,id_place,sum(total) as "Total" from fact_sale 
group by 
cube(id_item,id_place)
order by id_item,id_place;
--2
select t2.itemname,t3.shopname,sum(total) as "Total" from fact_sale t1 inner 
join dim_item t2 on t1.id_item = t2.id_item inner join dim_place t3 on t1.id_place = t3.id_place 
group by cube(t2.itemname,t3.shopname);
--3
select t2.itemname,t3.city,t4.yearmonth,sum(total) as "Total" from fact_sale t1 inner 
join dim_item t2 on t1.id_item = t2.id_item inner join dim_place t3 on t1.id_place = t3.id_place 
inner join dim_time t4 on t1.id_time = t4.id_time
group by cube(t2.itemname,t3.city,t4.yearmonth);
--4
select t2.color,t3.country,t4.yearmonth,sum(total) as "Total" from fact_sale t1 inner 
join dim_item t2 on t1.id_item = t2.id_item inner join dim_place t3 on t1.id_place = t3.id_place 
inner join dim_time t4 on t1.id_time = t4.id_time
group by cube(t2.color,t3.country,t4.yearmonth);
