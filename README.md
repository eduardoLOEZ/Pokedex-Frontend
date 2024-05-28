# React + TypeScript + Vite

# Pokédex Management System

## Descripción

Este proyecto es un sistema de gestión de Pokédex. Permite a los usuarios listar, buscar y ver detalles de los Pokémon. También proporciona la funcionalidad para descargar la información de un Pokémon en formato PDF y soporta paginación en el backend. El frontend de la aplicación está desarrollado utilizando React y React Router, mientras que el backend utiliza Node.js y Express.

## Características

- **Listar Pokémon**: Muestra una lista de todos los Pokémon disponibles.
- **Buscar Pokémon**: Permite a los usuarios buscar Pokémon por nombre.
- **Ver Detalles de Pokémon**: Muestra la información detallada de un Pokémon específico.
- **Descargar Información en PDF**: Permite a los usuarios descargar la información de un Pokémon en formato PDF.
- **Paginación en Backend**: Implementa paginación para manejar grandes volúmenes de datos eficientemente.

## Estructura del Proyecto

```plaintext
.
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── PokemonList.tsx
│   │   ├── PokemonDetails.tsx
│   │   ├── SearchPokemon.tsx
│   │   └── ...
│   ├── interfaces
│   │   └── Pokemon.ts
│   ├── utils
│   │   └── pdfDownload.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── package.json
├── tsconfig.json
└── README.md
```

## Dependencias

- axios: ^1.7.2
- jspdf: ^2.5.1
- react: ^18.2.0
- react-router-dom: ^6.23.1
- postcss: ^8.4.38
- tailwindcss: ^3.4.3
- typescript: ^5.2.2
- vite: ^5.2.0


```bash
git clone https://github.com/eduardoLOEZ/Trainers-Frontend.git

```

```bash
cd Trainers-Frontend
npm install

npm run dev


```


![Screenshot](https://res.cloudinary.com/dyhpbqaht/image/upload/v1716877655/Screenshot_2024-05-28_at_0.26.27_hjykar.png)
![Screenshot](https://res.cloudinary.com/dyhpbqaht/image/upload/v1716877742/WhatsApp_Image_2024-05-28_at_00.28.41_jz9mxr.jpg)

![Screenshot](https://res.cloudinary.com/dyhpbqaht/image/upload/v1716877883/WhatsApp_Image_2024-05-28_at_00.28.41_1_yx0jnb.jpg)

