import psutil
disk = psutil.disk_usage('/')
print(f"Disk Usage: {disk.percent}%")