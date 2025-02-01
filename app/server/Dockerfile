# Etap budowania
FROM maven:3.8.4-openjdk-17

WORKDIR /app

# Kopiujemy cały projekt
COPY . .

# Expose ports
EXPOSE 8080
EXPOSE 5005

# Uruchamiamy aplikację w trybie dev z debuggerem
CMD ["mvn", "spring-boot:run", "-Dspring-boot.run.jvmArguments='-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005'"]