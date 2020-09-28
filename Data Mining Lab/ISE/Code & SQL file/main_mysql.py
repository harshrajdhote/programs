import mysql.connector
import random
from datetime import datetime,timedelta

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="datamining",
  database="ise_sales"
)
mycursor = mydb.cursor()
now = datetime.now()
start_time = now.strftime("%H:%M:%S")
print("Current Time =", start_time)
# 100000000
for i in range(0,309270):
    sql = "INSERT INTO sales (order_id,product_id,emp_id,customer_id) VALUES (%s, %s,%s,%s)"
    val = (i+1,random.randint(1,9),random.randint(1,6),random.randint(1,6))
    print(i)
    mycursor.execute(sql, val)
    mydb.commit()

now = datetime.now()
current_time = now.strftime("%H:%M:%S")
print("Current Time =", current_time)
# print(timedelta(hours=start_time.hour,minutes=start_time.minute,seconds=start_time.second) - timedelta(hours=current_time.hour,minutes=current_time.minute,seconds=current_time.second))
print("309270 record inserted.")
# print(mydb)