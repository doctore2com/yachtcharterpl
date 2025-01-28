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
    public ResponseEntity<?> addCharter(@RequestBody Charter charter) {
        try {
            log.info("Otrzymano żądanie utworzenia rezerwacji. Dane: {}", charter);

            // Sprawdzamy czy użytkownik istnieje
            User user = userRepository.findById(charter.getUser().getId())
                    .orElseThrow(() -> new RuntimeException("Nie znaleziono użytkownika o ID: " + charter.getUser().getId()));

            // Sprawdzamy czy łódź istnieje
            Boat boat = boatRepository.findById(charter.getBoat().getId())
                    .orElseThrow(() -> new RuntimeException("Nie znaleziono łodzi o ID: " + charter.getBoat().getId()));

            // Ustawiamy znalezione encje
            charter.setUser(user);
            charter.setBoat(boat);

            Charter savedCharter = charterService.addCharter(charter);
            return ResponseEntity.ok(savedCharter);
        } catch (Exception e) {
            log.error("Błąd podczas tworzenia rezerwacji: ", e);
            return ResponseEntity.badRequest()
                    .body(new MessageResponse(e.getMessage()));
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
