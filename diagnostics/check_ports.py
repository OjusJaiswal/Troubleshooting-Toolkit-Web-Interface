import socket
ports = [22, 80, 443, 8080]
open_ports = []

for port in ports:
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.settimeout(1)
    if s.connect_ex(('localhost', port)) == 0:
        open_ports.append(port)
    s.close()

print(f"Open Ports: {open_ports}")