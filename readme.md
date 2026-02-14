# Proyecto Servidor Node.js con Express
# Descripción
Este proyecto es un servidor web básico desarrollado con Node.js y Express que cumple con los siguientes objetivos:

- Gestionar peticiones HTTP y diferenciar la lógica para métodos GET y PUT.
- Generar contenido HTML dinámico mostrando la fecha y hora actual del servidor.
- Proveer un endpoint para entregar palabras y números aleatorios según el método HTTP.
- Responder con un mensaje estándar para métodos HTTP no implementados.
- Aplicar estilos CSS externos para mejorar la presentación.

# Tecnologías utilizadas
- Node.js: Entorno de ejecución para JavaScript del lado del servidor.
- Express: Framework minimalista para crear servidores web en Node.js.
  
# Estructura del Proyecto
![Estructura del proyecto](https://github.com/AlvarezF7/M6-1-servidor-basido-node/blob/main/img/Estructura_proyecto.png)

# Endpoints principales

- GET/: Muestra la fecha y hora actual del servidor en formato HTML.
- GET /random-data: Devuelve una palabra aleatoria de un conjunto predefinido (HTML).
- PUT /random-data: Devuelve un número entero aleatorio entre 10 y 50,000 (HTML).
- Otros métodos en /random-data: Responden con un mensaje indicando que no están implementados (texto plano).
