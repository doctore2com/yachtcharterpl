package com.example.service;

import com.example.charter.Charter;
import com.example.repository.CharterRepository;
import com.example.model.User;
import com.example.repository.UserRepository;
import com.example.boat.Boat;
import com.example.repository.BoatRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class CharterService {

    private final CharterRepository charterRepository;
    private final UserRepository userRepository;
    private final BoatRepository boatRepository;

//    public List<Charter> getAllChartersByBoat(Long boatId) {
//        List<Charter> charters = new ArrayList<>();
//        charterRepository.findCharterByBoatId(boatId)
//                .forEach(charters::add);
//        return charters;
//    }

    public boolean isBoatAvailable (Long boatId, Date startDate, Date endDate){
        List<Charter> overlappingCharters= charterRepository.findOverlappingCharters(boatId, startDate, endDate);
        return overlappingCharters.isEmpty();
    }


    public List<Charter> getAllCharters() {
        log.info("Pobieranie wszystkich rezerwacji");
        List<Charter> charters = charterRepository.findAll();
        log.info("Znaleziono {} rezerwacji", charters.size());
        return charters;
    }



    public Charter getCharter(Long id) {
        return charterRepository.findById(id).get();
    }

    public Charter addCharter(Charter charter) {
        log.info("Rozpoczynam tworzenie rezerwacji");
        log.debug("Otrzymane dane: {}", charter);

        // Walidacja danych
        if (charter.getCharterName() == null || charter.getCharterName().trim().isEmpty()) {
            throw new RuntimeException("Charter name is required");
        }
        if (charter.getStartCharter() == null) {
            throw new RuntimeException("Start date is required");
        }
        if (charter.getEndCharter() == null) {
            throw new RuntimeException("End date is required");
        }
        if (charter.getPort() == null || charter.getPort().trim().isEmpty()) {
            throw new RuntimeException("Port is required");
        }
        if (charter.getUser() == null || charter.getUser().getId() == null) {
            throw new RuntimeException("User is required");
        }
        if (charter.getBoat() == null || charter.getBoat().getId() == null) {
            throw new RuntimeException("Boat is required");
        }

        log.debug("User ID: {}", charter.getUser().getId());
        log.debug("Boat ID: {}", charter.getBoat().getId());

        // Sprawdź czy user istnieje
        User user = userRepository.findById(charter.getUser().getId())
                .orElseThrow(() -> new RuntimeException("User not found"));
        log.info("Znaleziono użytkownika: {}", user.getUsername());

        // Sprawdź czy boat istnieje
        Boat boat = boatRepository.findById(charter.getBoat().getId())
                .orElseThrow(() -> new RuntimeException("Boat not found"));
        log.info("Znaleziono łódź: {}", boat.getBoatName());

        try {
            Charter newCharter = new Charter();
            newCharter.setCharterName(charter.getCharterName());
            newCharter.setDescription(charter.getDescription());
            newCharter.setStartCharter(charter.getStartCharter());
            newCharter.setEndCharter(charter.getEndCharter());
            newCharter.setPort(charter.getPort());
            newCharter.setUser(user);
            newCharter.setBoat(boat);

            log.info("Próba zapisu rezerwacji do bazy");
            log.debug("Dane do zapisu: {}", newCharter);
            Charter savedCharter = charterRepository.save(newCharter);
            log.info("Rezerwacja została zapisana z ID: {}", savedCharter.getId());

            return savedCharter;
        } catch (Exception e) {
            log.error("Błąd podczas zapisu rezerwacji: {}", e.getMessage());
            throw new RuntimeException("Błąd podczas zapisu rezerwacji: " + e.getMessage(), e);
        }
    }

    public Charter updateCharter(Long id, Charter charter) {
        Optional<Charter> existingCharter = charterRepository.findById(id);
        if (existingCharter.isPresent()) {
            Charter updatedCharter = existingCharter.get();
            updatedCharter.setBoat(charter.getBoat());
            updatedCharter.setUser(charter.getUser());
            updatedCharter.setCharterName(charter.getCharterName());
            updatedCharter.setDescription(charter.getDescription());
            updatedCharter.setStartCharter(charter.getStartCharter());
            updatedCharter.setEndCharter(charter.getEndCharter());
            updatedCharter.setPort(charter.getPort());
            return charterRepository.save(updatedCharter);
        }
        return null;
    }

    public void deleteCharter(Long id) {
        Charter charter = charterRepository.findById(id).get();
        charterRepository.delete(charter);
    }

    public void validateCharter(Charter charter) {
        Boat boat = charter.getBoat();
        if (boat != null) {
            String boatName = boat.getBoatName();
            // ... reszta kodu ...
        }
    }

    public List<Charter> findByUserId(Long userId) {
        return charterRepository.findByUserId(userId);
    }

}