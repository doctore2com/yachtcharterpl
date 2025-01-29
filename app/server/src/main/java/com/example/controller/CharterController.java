package com.example.controller;

import com.example.charter.Charter;
import com.example.service.CharterService;
import com.example.model.User;
import com.example.repository.UserRepository;
import com.example.boat.Boat;
import com.example.repository.BoatRepository;
import com.example.payload.response.MessageResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/charters")
@CrossOrigin(origins = "http://localhost:4200")
@Slf4j
public class CharterController {

    @Autowired
    private CharterService charterService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BoatRepository boatRepository;

    @GetMapping
    public ResponseEntity<List<Charter>> getAllCharters() {
        System.out.println("Pobieranie wszystkich rezerwacji");
        List<Charter> charters = charterService.getAllCharters();
        System.out.println("Znalezione rezerwacje: " + charters.size());
        return ResponseEntity.ok(charters);
    }

    @PostMapping
    public ResponseEntity<?> createCharter(@RequestBody Charter charter) {
        try {
            log.info("Rozpoczęcie tworzenia rezerwacji");
            log.debug("Otrzymane dane: {}", charter);

            if (charter.getUser() == null || charter.getBoat() == null) {
                log.warn("Brak wymaganych danych: user lub boat");
                return ResponseEntity.badRequest().body("Wymagane pola: user i boat");
            }

            Charter savedCharter = charterService.addCharter(charter);
            log.info("Pomyślnie utworzono rezerwację o ID: {}", savedCharter.getId());
            return ResponseEntity.ok(savedCharter);
        } catch (Exception e) {
            log.error("Błąd podczas tworzenia rezerwacji", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Błąd podczas tworzenia rezerwacji: " + e.getMessage());
        }
    }

    @GetMapping("/{charterId}")
    public Charter getCharter(@PathVariable Long charterId) {
        return charterService.getCharter(charterId);
    }

    @PutMapping("/{charterId}")
    public void updateCharter(@PathVariable Long charterId, @RequestBody Charter charter) {
        charterService.updateCharter(charterId, charter);
    }

    @DeleteMapping("/{charterId}")
    public void deleteCharter(@PathVariable Long charterId) {
        charterService.deleteCharter(charterId);
    }
}
