/*task 1*/
select id_item,id_place,sum(total) as "Total" from fact_sale 
group by id_item,id_place with 
rollup;
/*task 2*/
select t2.itemname,t3.shopname,sum(total) as "Total" from fact_sale t1 inner 
join dim_item t2 on t1.id_item = t2.id_item inner join dim_place t3 on t1.id_place = t3.id_place 
group by t2.itemname,t3.shopname with 
rollup;
/*task 3*/
select t2.itemname,t3.city,t4.yearmonth,sum(total) as "Total" from fact_sale t1 inner 
join dim_item t2 on t1.id_item = t2.id_item inner join dim_place t3 on t1.id_place = t3.id_place 
inner join dim_time t4 on t1.id_time = t4.id_time
group by t2.itemname,t3.shopname,t4.yearmonth with 
rollup;

/*task 4*/
select t2.color,t3.country,t4.yearmonth,sum(total) as "Total" from fact_sale t1 inner 
join dim_item t2 on t1.id_item = t2.id_item inner join dim_place t3 on t1.id_place = t3.id_place 
inner join dim_time t4 on t1.id_time = t4.id_time
group by t2.color,t3.country,t4.yearmonth with 
rollup;
Select itemname, city, yearmonth, sum()
from fact_sale,dim_item, dim_place,dim_time
where dim_item.id_item=fact_sale.id_item and dim_place.id_place=fact_sale.id_place and dim_time.id_time=fact_sale.id_time
group by cube(itemname,city,yearmonth)
order by itemname,city,yearmonth;

alter table fact_sale add total real;
select * from fact_Sale;
