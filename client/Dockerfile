# Utilisation de l'image officielle Node.js
FROM node:18

# Définition du répertoire de travail
WORKDIR /app

# Copie des fichiers de configuration
COPY package.json package-lock.json ./

# Installation des dépendances
RUN npm install

# Copie du reste des fichiers
COPY . .

# Définition des variables d'environnement
ENV PORT=5000
ENV DB_HOST=db
ENV DB_USER=quiz_user
ENV DB_PASSWORD=quiz_password
ENV DB_NAME=quiz_database

# Exposition du port utilisé par le backend
EXPOSE 5000

# Démarrage de l'application
CMD ["npm", "run", "dev"]