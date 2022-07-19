import time

file = "data/log.txt"

k = 0
while True:
    with open(file, "w") as f:
        f.write(f"{k}")
    k += 1
    time.sleep(1)
