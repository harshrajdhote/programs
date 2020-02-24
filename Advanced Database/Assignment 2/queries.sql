 sqlplus sys/ as sysdba
 alter session set container = pdborcl
 alter database open
 alter user hr identified by hr account unlock



CREATE OR REPLACE PROCEDURE INCREASE_PRICE 
(x number , y varchar2)
AS 
 p_id products.productid;
 p_cat products.category%type;
 p_price products.price%type;
 cursor product is 
  select category,price from products;
BEGIN
  open product;
  loop
  fetch product into p_cat,p_price;
  exit when products%notfound;
  if p_cat = y then
     update products set price = 12 where productid = p_id;
     
END INCREASE_PRICE;