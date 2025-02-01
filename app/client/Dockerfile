FROM node:16.13.0

WORKDIR /app

# Najpierw skopiuj pliki package*.json
COPY package*.json ./

# Zainstaluj zależności
RUN npm install --legacy-peer-deps

# Skopiuj resztę plików projektu
COPY . .

# Ustaw uprawnienia dla całego katalogu aplikacji
RUN chmod -R 777 /app

EXPOSE 4200

# Uruchom aplikację z hot reloadingiem
CMD ["npm", "start"]