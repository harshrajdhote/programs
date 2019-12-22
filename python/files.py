from pathlib import Path
p = Path() #constructor takes argument as directory
for i in p.glob('*'):   # glob takes pattern of file there other methods also refer documentation like mkdir rmdir etc
    print(i)
