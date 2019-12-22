class mammal:
    def walk(self):
        print("walk parent")
class cat(mammal):
    pass
m = cat()
m.walk()     