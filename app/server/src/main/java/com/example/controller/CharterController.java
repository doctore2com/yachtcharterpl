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
@RequestMapping("/api/charters")
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
            log.info("Otrzymano żądanie utworzenia rezerwacji");
            log.debug("Dane rezerwacji: {}", charter);

            if (charter.getUser() == null || charter.getUser().getId() == null) {
                log.error("Brak danych użytkownika");
                return ResponseEntity.badRequest()
                    .body("Musisz być zalogowany, aby utworzyć rezerwację");
            }

            if (charter.getBoat() == null || charter.getBoat().getId() == null) {
                log.error("Brak danych łodzi");
                return ResponseEntity.badRequest()
                    .body("Wymagane dane łodzi");
            }

            Charter savedCharter = charterService.addCharter(charter);
            log.info("Pomyślnie utworzono rezerwację o ID: {}", savedCharter.getId());
            return ResponseEntity.ok(savedCharter);

        } catch (Exception e) {
            log.error("Błąd podczas tworzenia rezerwacji", e);
            return ResponseEntity
                .status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body("Błąd podczas tworzenia rezerwacji: " + e.getMessage());
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Charter> getCharter(@PathVariable Long id) {
        Charter charter = charterService.getCharter(id);
        return ResponseEntity.ok(charter);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Charter> updateCharter(@PathVariable Long id, @RequestBody Charter charter) {
        Charter updatedCharter = charterService.updateCharter(id, charter);
        return ResponseEntity.ok(updatedCharter);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCharter(@PathVariable Long id) {
        charterService.deleteCharter(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Charter>> getChartersByUserId(@PathVariable Long userId) {
        try {
            List<Charter> charters = charterService.findByUserId(userId);
            return ResponseEntity.ok(charters);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
