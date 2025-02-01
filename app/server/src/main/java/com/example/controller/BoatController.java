package com.example.controller;

import com.example.boat.Boat;
import com.example.service.BoatService;
import com.example.repository.BoatRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

@RestController
@RequestMapping("/api/boats")
@CrossOrigin(origins = "http://localhost:4200")
public class BoatController {

    private static final Logger logger = LoggerFactory.getLogger(BoatController.class);

    @Autowired
    private BoatService boatService;

    @Autowired
    private BoatRepository boatRepository;

    @GetMapping
    public ResponseEntity<List<Boat>> getAllBoats() {
        logger.info("Otrzymano żądanie GET /api/boats");
        try {
            List<Boat> boats = boatService.getAllBoats();
            logger.info("Znaleziono {} łodzi", boats.size());
            return ResponseEntity.ok(boats);
        } catch (Exception e) {
            logger.error("Błąd podczas pobierania łodzi", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Boat> getBoat(@PathVariable Long id) {
        try {
            logger.info("Otrzymano żądanie GET /boats/{}", id);
            Boat boat = boatService.getBoat(id);
            if (boat == null) {
                return ResponseEntity.notFound().build();
            }
            return ResponseEntity.ok(boat);
        } catch (Exception e) {
            logger.error("Błąd podczas pobierania łodzi o id {}", id, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping
    public ResponseEntity<Boat> addBoat(@RequestBody Boat boat) {
        try {
            logger.info("Otrzymano żądanie dodania łodzi: {}", boat);
            boatService.addBoat(boat);
            return ResponseEntity.ok(boat);
        } catch (Exception e) {
            logger.error("Błąd podczas dodawania łodzi: ", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/{boatId}")
    public void updateBoat(@PathVariable Long boatId, @RequestBody Boat boat) {
        boatService.updateBoat(boatId, boat);
    }

    @DeleteMapping("/{boatId}")
    public ResponseEntity<Void> deleteBoat(@PathVariable Long boatId) {
        try {
            boatService.deleteBoat(boatId);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}