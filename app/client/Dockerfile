FROM node:16.13.0 AS builder

WORKDIR /app

# Najpierw kopiujemy tylko package.json
COPY package.json ./

# Instalujemy dokładne wersje zależności
RUN npm install -g @angular/cli@13.1.1 && \
    npm install @angular-devkit/build-angular@13.1.1 && \
    npm install typescript@4.5.2 && \
    npm install

# Kopiujemy resztę projektu
COPY . .

# Upewniamy się, że mamy poprawne wersje
RUN npm list @angular/core && \
    npm list @angular/cli

# Build
RUN ./node_modules/.bin/ng build --configuration=production

FROM nginx:alpine
COPY --from=builder /app/dist/client /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]