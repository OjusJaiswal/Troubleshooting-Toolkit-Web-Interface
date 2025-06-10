import psutil
mem = psutil.virtual_memory()
print(f"Memory Usage: {mem.percent}%")