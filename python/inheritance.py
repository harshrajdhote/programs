class mammal:
    def walk(self): #why self
        print("walk parent")
class cat(mammal):
    pass
m = cat()
m.walk()   #how m.walk works  