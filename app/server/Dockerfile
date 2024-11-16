# Etap budowania
FROM maven:3.8.4-openjdk-17 AS build
WORKDIR /app
COPY ./pom.xml ./
COPY ./src ./src
RUN mvn clean package -DskipTests

# Etap końcowy
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=build /app/target/yachtcharterpl-0.0.1-SNAPSHOT.jar app.jar

# Dodanie healthcheck (opcjonalnie)
HEALTHCHECK --interval=30s --timeout=3s \
	CMD curl -f http://localhost:8080/actuator/health || exit 1

# Opcjonalne zmienne środowiskowe dla JVM
ENV JAVA_OPTS="-Xmx512m -Xms256m"

# Uruchomienie aplikacji
ENTRYPOINT ["java", "-jar", "app.jar"]