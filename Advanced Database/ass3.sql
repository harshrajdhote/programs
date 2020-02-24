create type Text as object (
 name varchar(50),
 MAP MEMBER FUNCTION countNumberOfWords return Number);




 create or replace  type body Text as 
  MAP MEMBER FUNCTION countNumberOfWords return number is
    cnt Number ;
  str varchar(50);
  ch char;
  begin
  count := 0;
  str := name;
  for i in 1..Length(str) loop
  ch := substr(str,i,1);
  if(ch = ' ') then
  cnt := cnt + 1;
  end if;
  end loop;
  return count;
  END;
  END;
  
  
  
  create table words (name Text);
select o.name.countNumberOfWords() from words  o;

exec increase_price(10,'ab');
select * from products;



create or replace 
PROCEDURE INCREASE_PRICE 
(x in products.price%type , y in products.category%type)
AS 
 p_id products.productid%type;
 p_cat products.category%type;
 p_price products.price%type;
 cursor product is 
  select productid,category,price from products;
BEGIN
  open product;
  loop
  fetch product into p_id,p_cat,p_price;
  p_price := p_price + (x/100 * p_price);
  if (p_cat = y) then
     update products set price = p_price where productid = p_id;
  end if;
  exit when product%notfound;
  end loop;
  close product;
     
END INCREASE_PRICE;

show user;
select username,password from dba_users;


