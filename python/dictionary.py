customer = {
    "name" : "Harshraj",
    "age"  : 30,
    
}
customer["bd"] = "Jan 01 2000"
print(customer["bd"]) #if key doesnt match this will gives error to avoid this situation use 
# method get which will return none if no key is present there
print(customer.get("cd","default val"),customer["bd"])

