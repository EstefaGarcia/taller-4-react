# 💸 Aplicación de Gastos Diarios (React + Vite + PWA)

## 📌 Descripción

Esta aplicación web permite a los usuarios **registrar, visualizar y gestionar sus gastos diarios**, asociando cada gasto a un usuario autenticado.

Cuenta con un sistema completo de **autenticación (registro e inicio de sesión)** y almacenamiento persistente mediante **MongoDB**, conectando el frontend con el backend a través de **Axios**.

Además, incluye funcionalidades como:

* Registro de gastos con  responsable y fecha
* Eliminación de gastos
* Resumen dinámico por persona
* Protección de rutas mediante autenticación
* Diseño responsive adaptable a diferentes dispositivos

---

## 🚀 Tecnologías utilizadas

### 🖥️ Frontend

* React
* Vite
* Material UI (MUI)
* React Router DOM
* Axios
* Recharts (gráficas)
* PWA (vite-plugin-pwa)

### ⚙️ Backend

* Node.js
* Express
* MongoDB
* Mongoose
* JWT (autenticación)
* bcryptjs (hash de contraseñas)

---

## 🧱 Arquitectura del proyecto

El proyecto sigue una estructura **Feature-Based**, lo que permite mayor escalabilidad y mantenimiento.

```
gastos/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   └── expenseController.js
│   │
│   ├── middleware/
│   │   └── auth.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   └── Expense.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── expenseRoutes.js
│   │
│   ├── .env ❌ (NO se sube)
│   ├── .gitignore
│   ├── package.json
│   └── index.js
│
├── frontend/  
│   ├── public/
│   │   ├── icon.png
│   │   └── manifest.json (auto generado)
│   │
│   ├── src/
│   │   ├── api/
│   │   │   ├── index.js
│   │   │   
│   │   │   
│   │   │
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   │   ├── components/
│   │   │   │   │   └── Login.jsx
│   │   │   │   └── hooks/
│   │   │   │       └── useAuthForm.js
│   │   │   │
│   │   │   ├── expenses/
│   │   │   │   └── pages/
│   │   │   │       └── Expenses.jsx
│   │   │   │
│   │   │   └── layout/
│   │   │       ├── components/
│   │   │       │   ├── Header.jsx
│   │   │       │   ├── Footer.jsx
│   │   │       │   └── Content.jsx
│   │   │       └── pages/
│   │   |         └── Expenses.jsx
│   │   ├── services/      
|   |   |          ├── auth.service.js
│   │   │          └── expenses.service.js    
│   │   ├── App.jsx
│   │   └── main.jsx
│   │--index.html
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
|
|
|
|
└── README.md




## 📸 Screenshots

### 🔐 Login
![Login](./frontend/src/assets/screenshots/login.png)

### 💸 Dashboard
![Dashboard](././frontend/src/assets/screenshots/dashboard.png)

### 📱 Responsive
![Mobile](./frontend/src/assets/screenshots/mobile.png)
---

## ⚙️ Instalación y ejecución

### 🔹 1. Clonar repositorio

```bash
git clone https://github.com/tu-usuario/tu-repo.git
```

---

### 🔹 2. Frontend

```bash
cd frontend
npm install
npm run dev
```

---

### 🔹 3. Backend

```bash
cd backend
npm install
node index.js
```

---

## 🔐 Variables de entorno

Crear un archivo `.env` en el backend:

```
MONGO_URI=tu_conexion_mongodb
JWT_SECRET=tu_secreto
PORT=3000
```

---

## 🔗 Conexión Frontend - Backend

Se realiza mediante **Axios**, incluyendo el token JWT en cada petición:

```js
Authorization: Bearer token
```

---

## 📱 PWA

La aplicación cuenta con configuración PWA:

* Manifest configurado
* Iconos
* Service Worker
* Instalable en dispositivos móviles

---

## 📊 Funcionalidades principales

✔ Registro de usuario
✔ Inicio de sesión
✔ Protección de rutas
✔ Crear gastos
✔ Eliminar gastos
✔ Resumen dinámico por responsable
✔ Cierre de sesión

---

## 📸 Capturas de pantalla

👉 (Agrega aquí screenshots de tu app)

---

## 🌐 Despliegue

La aplicación puede ser desplegada en:

* Vercel (frontend)
* Render / Railway (backend)

---

## 📈 Optimización

* Uso de estructura modular
* Código limpio y reutilizable más o menos
* Validaciones en frontend y backend
* Preparado para mejoras de rendimiento (Lighthouse)

---

## 👨‍💻 Autor

Desarrollado por: **Yonier Viveros** 

---

## ✅ Estado del proyecto

✔ Funcional
✔ Escalable
✔ Listo para producción (mejorable con features adicionales)

---
