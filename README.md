# **Sistema de Gestión de Citas Médicas - Frontend**

## **Descripción**  
Este sistema de gestión de citas médicas es una aplicación frontend desarrollada con **React.js**, que proporciona una interfaz intuitiva y eficiente para la administración de citas médicas. Permite a los usuarios gestionar sus citas, consultar historiales médicos y acceder a funcionalidades según su rol.

## **Características Principales**  
- 📅 **Gestión de citas médicas** (creación, reprogramación y cancelación).  
- 🔐 **Autenticación y autorización** con JWT para diferentes roles de usuario (paciente, médico, administrador).  
- 📋 **Interfaz intuitiva** para visualizar historiales médicos y gestionar información de pacientes y médicos.  
- 🔄 **Consumo de API REST** del backend mediante Axios.  
- 🎨 **Diseño responsive** con CSS y Bootstrap.  
- 🔍 **Notificaciones y alertas** para recordar próximas citas médicas.  

## **Tecnologías Utilizadas**  
- **React.js**  
- **React Router** para la navegación entre páginas  
- **Axios** para la comunicación con el backend  
- **Bootstrap / CSS** para el diseño de la interfaz  
- **JWT** para autenticación de usuarios  
- **Vite** como herramienta de construcción  


## **Requisitos de Instalación**  
1. Node.js 16+  
2. npm o yarn (gestor de paquetes)  
3. Editor de código (VS Code recomendado)  

## **Configuración del Entorno**  
1. Clonar el repositorio:  
   ```bash
   git clone https://github.com/tu-repositorio.git
   cd medical-appointments-frontend

2. Instalar dependencias
   npm install
3. Configurar la conexión con el backend en el archivo .env
   VITE_API_URL=http://localhost:8080/api
4. Iniciar la aplicación:
   npm run dev


## Equipo de Desarrollo
- Torres Ollague Dilan Steven
- Conforme Paguay Madelein Kristel
- Izurieta Pineda Ariana Shantal
- Moreno Silva Kevin Fernando

## **Estructura del Proyecto**  
```plaintext
medical-appointments-frontend/
├── src/
│   ├── assets/         # Recursos estáticos (imágenes, estilos, etc.)
│   ├── components/     # Componentes reutilizables
│   ├── pages/          # Vistas principales del sistema
│   ├── services/       # Llamadas a la API
│   ├── context/        # Contextos para la gestión del estado global
│   ├── router/         # Configuración de rutas con React Router
│   ├── App.jsx         # Componente principal de la aplicación
│   ├── main.jsx        # Punto de entrada principal
│   └── styles/         # Estilos globales
├── public/             # Archivos estáticos públicos
├── package.json        # Dependencias y configuración del proyecto
└── README.md           # Documentación
