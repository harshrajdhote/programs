from tkinter import *
import pymongo
from tkinter import messagebox
def insert1():
    
    
    p_no1=p_no_field.get()
    p_name1=p_name_field.get()
    p_stock1=p_stock_field.get()
    p_price1=p_price_field.get()
    mydict = { "pno": p_no1 , "name" : p_name1,"stock" : p_stock1,"price" : p_price1  }
    x = mycol.insert_one(mydict)


def display1():
    for x in mycol.find():
      print(x)
    print()



def delete1():
    p_id2=p_no_field.get()
    myquery = { "pno": p_id2 }
    mycol.delete_one(myquery)
    


def stockupdate():
    p_i=p_no_field.get()
    p_i_1=stock_e.get()
    myquery = { "pno": p_i }
    newvalues = { "$set": { "stock": p_i_1 } }
    mycol.update_one(myquery, newvalues)


#main

myclient = pymongo.MongoClient("mongodb://localhost:27017/")
mydb = myclient["pharmacy"]
mycol = mydb["products"]
main=Tk()
rad=StringVar()
main.configure(background='skyblue')
main.title("PHARMACY APPLICATION")
main.geometry("750x250")
top2=Label(main,text="PRODUCT DETAILS",bg="palegreen",font="verdana 25 bold")
top2.grid(row=15,column=1)


p_no=Label(main,text="PRODUCT ID:")
p_name=Label(main,text="PRODUCT NAME:")
p_stock=Label(main,text="STOCK IN:")
p_price=Label(main,text="PRICE:")


p_no.grid(row=16,column=0)
p_name.grid(row=21,column=0)
p_stock.grid(row=23,column=0)
p_price.grid(row=25,column=0)


p_no_field=Entry(main)
p_name_field=Entry(main)
p_stock_field=Entry(main)
p_price_field=Entry(main)



p_no_field.grid(row=16, column=1, ipadx="100")
p_name_field.grid(row=21, column=1, ipadx="100")
p_stock_field.grid(row=23, column=1, ipadx="100")
p_price_field.grid(row=25, column=1, ipadx="100")

b1=Button(main,text="INSERT",font="30",fg="red",bg="lightblue",width="20",command=insert1)
b1.grid(row=26,column=1)
b2=Button(main,text="DISPLAY",font="30",fg="red",bg="lightblue",width="20",command=display1)
b2.grid(row=28,column=1)
b3=Button(main,text="DELETE",font="30",fg="red",bg="lightblue",command=delete1)
b3.grid(row=16,column=2)

stock_b=Button(text="UPDATE STOCK",command=stockupdate)
stock_b.grid(row=23,column=3)

stock_e=Entry(main)
stock_e.grid(row=23,column=2)



    

main.mainloop()