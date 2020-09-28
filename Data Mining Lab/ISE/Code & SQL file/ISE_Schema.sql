create database ise_sales;
use ise_sales;
drop table sales;
create table customerDimension(customer_id bigint unsigned primary key,customer_name varchar(25),city varchar(25));
create table productDimension(product_id bigint unsigned primary key,product_name varchar(25),price double);
create table employeeDimension(emp_id bigint unsigned primary key,emp_name varchar(25),region varchar(25));
create table sales(order_id bigint unsigned primary key,product_id bigint unsigned,emp_id bigint unsigned,customer_id bigint unsigned,
foreign key(product_id) references productDimension(product_id),
foreign key(emp_id) references employeeDimension(emp_id),
foreign key(customer_id) references customerDimension(customer_id)
);
truncate sales;
select * from sales limit 309270;
select count(*) from sales;
select * from customerDimension;
select * from employeeDimension;
select * from productDimension;