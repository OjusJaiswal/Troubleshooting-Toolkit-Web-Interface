# 🛠️ Troubleshooting Toolkit Web Interface

A cross-platform full-stack application for system diagnostics using Angular, Node.js, and Python.

## 🚀 Features

- Real-time CPU, Memory, Disk Usage
- Port scanning and service check
- Modular Python diagnostics scripts
- REST API backend with Node.js
- Angular frontend for dashboard UI

## 📦 Tech Stack

- Angular 17
- Node.js + Express
- Python 3 (psutil, socket)
- SQLite (optional for logs)
- CORS enabled for API

## 🧪 Running Locally

### 1. Start Backend

```bash
cd backend
npm install
node server.js
```

### 2. Start Frontend

```bash
cd frontend/troubleshooting-toolkit
npm install
ng serve
```

### 3. Run Diagnostics
Access: http://localhost:4200 → click "Run Diagnostics"