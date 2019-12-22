class Person:
  def __init__(self, fname, lname):
    self.firstname = fname
    self.lastname = lname  
  
  def __init__(self):
      print("parent")
  
  def printname(self):
    print(self.firstname, self.lastname)

class Student(Person):
  def __init__(self):
    #super().__init__(fname, lname)
    print("child init") #parent constructor isnt called

x = Student()
#x.printname()
