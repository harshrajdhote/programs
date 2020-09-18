create database week3;
use week3;
 
 /*Headquarter tables*/ 
 
create table customer(customer_id integer primary key, customer_name char(30), city_id integer, first_order_date date);
create table walk_in_customers(customer_id integer,tourism_guide char(30), _Time datetime ,foreign key (customer_id) references customer(customer_id));
create table Mail_order_customers (customer_id integer, post_address char(100), foreign key (customer_id) references customer(customer_id)) ;

 /*Sales tables*/ 

Relation Headqarters (City_id, City_name, Headquarter_addr, State, Time)
 Relation Stores (Store_id, *City_id, Phone, Time) 
 Relation Items (Item_id, Description, Size, Weight, Unit_price, Time) 
 Relation Stored_items (*Store_id, *Item_id, Qantity_held, Time)
 Relation Order (Order_no, Order_date, Customer_id) 
 Relation Ordered_item (*Order_no, *Item_id, Quantity_ordered, Ordered_price, Time) 