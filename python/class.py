class Point:
    y = 20
    def __init__(self): #constructor
         self.x = 10
         self.y = 21
         print(self.x,self.y)
    def hello(self): # here self is compulsory becoz its automatically passed
        print("hello")
        print(self.c)
p = Point()
p.c = 12
p.hello() # we 