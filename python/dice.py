import random
class Dice:
    def roll(self):
        x = random.choice([1,2,3,4,5,6])
        y = random.choice([1,2,3,4,5,6])
        return (x,y)
d = Dice()
result = d.roll()
print(result)        