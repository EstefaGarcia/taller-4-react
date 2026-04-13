Gestor de Gastos Personales (React + Vite + PWA)
🧾 Descripción

Esta aplicación web permite llevar un control claro y organizado de los gastos diarios. Cada usuario puede registrar, consultar y administrar sus consumos de manera individual gracias a un sistema de autenticación seguro.

El sistema está diseñado para ser intuitivo, rápido y accesible desde cualquier dispositivo, incluyendo móviles, gracias a su enfoque como aplicación progresiva (PWA).

✨ Funcionalidades principales
Registro de nuevos gastos con información detallada
Eliminación de registros existentes
Visualización de gastos por usuario autenticado
Protección de rutas privadas mediante autenticación
Interfaz adaptable a diferentes tamaños de pantalla
Persistencia de datos en base de datos
🛠️ Tecnologías utilizadas
Frontend
React
Vite
Material UI
React Router DOM
Axios
Recharts
vite-plugin-pwa
Backend
Node.js
Express
MongoDB
Mongoose
JSON Web Token (JWT)
bcryptjs


🧱 Organización del proyecto

El proyecto está estructurado bajo un enfoque modular basado en funcionalidades (Feature-Based Structure), lo que facilita su escalabilidad y mantenimiento.```
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
│   ├── .env 
│   ├── .gitignore
│   ├── package.json
│   └── index.js
│
├── frontend/  
│   ├── public/
│   │   ├── icon.png
│   │   
│   │
|   |
|   |
|   |
|   |
|   |
|   |
│   ├── src/
│   │   ├── api/
│   │   │   ├── index.js
|   |   |   ├──components/
|   |   |        ├──ApiRyC
│   │   | 
|   |   ├── dashboard
|   |   |         ├── Expenses.jsx
|   |   |
|   |   |  
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
│   │   │          ├── Header.jsx
│   │   │          ├── Footer.jsx
│   │   │          └── Content.jsx
│   │   │       
│   │   |         
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

Vistas de la aplicación
🔐 Pantalla de acceso
<img src="./frontend/src/assets/screenshots/login.png">
📱 Vista móvil
<img src="./frontend/src/assets/screenshots/mobile.png">

⚙️ Instalación
1️⃣ Clonar el repositorio
git clone https://github.com/tu-usuario/tu-repo.git
2️⃣ Ejecutar el frontend
cd frontend
npm install
npm run dev
3️⃣ Ejecutar el backend
cd backend
npm install
node index.js
🔐 Variables de entorno

Crear un archivo .env dentro del backend con la siguiente configuración:

MONGO_URI=tu_uri_de_mongodb
JWT_SECRET=clave_secreta
PORT=3000
🔗 Comunicación entre cliente y servidor

Las solicitudes HTTP se realizan con Axios, incluyendo el token de autenticación en cada petición:

Authorization: Bearer <token>
📱 Aplicación PWA

La app está configurada como Progressive Web App, lo que permite:

Instalación en dispositivos móviles
Uso con conexión limitada
Uso de Service Worker
Definición de manifest
📊 Funcionalidades clave

✔ Registro e inicio de sesión
✔ Control de acceso a rutas protegidas
✔ Creación y eliminación de gastos
✔ Visualización de datos por usuario
✔ Cierre de sesión

🌐 Opciones de despliegue

Puedes publicar la aplicación en:

Frontend: Vercel
Backend: Render o Railway
📈 Mejores prácticas implementadas
Arquitectura modular
Separación de responsabilidades
Validaciones en cliente y servidor
Código reutilizable
Base lista para optimización futura
👨‍💻 Autor

Desarrollado por: Estefanía Echeverry

📌 Estado actual

🟢 Aplicación funcional
🟢 Estructura escalable
🟡 Mejorable con nuevas características