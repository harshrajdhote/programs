x = 'as'
print (x)
class Student:
    def __init__(self,name,rollno):
        self.name = name
        self.rollno = rollno
    def getName(self):
        return name
    def getRoll(self):
        return rollno
    def display(self):
        print("------Student Information------")
        print("Name : "+self.name)
        print(f"Roll no : {self.rollno}")
        #print(x)           
if __name__ == "__main__":
    stud = [Student("Vishal",69),Student("Bot",86)]
    for s in stud:
        s.display()

    
           