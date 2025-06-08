# Utilisation de Node.js
FROM node:18

# Définir le dossier de travail
WORKDIR /app

# Copier les fichiers de configuration
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers
COPY . .

# Définir le port de l’application
ENV PORT=5000
EXPOSE 5000

# Démarrer le serveur
CMD ["npm", "run", "dev"]