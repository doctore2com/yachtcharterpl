package com.example.controller;

import com.example.boat.Boat;
import com.example.service.BoatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;

import java.util.List;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

@RestController
@RequestMapping("/boats")
@CrossOrigin(origins = "http://localhost:4200")
@Slf4j
public class BoatController {

    @Autowired
    private BoatService boatService;

    @GetMapping("/")
    public List<Boat> getAllBoats() {
        List<Boat> boats = boatService.getAllBoats();
        System.out.println("Controller returned boats: " + boats.size()); // debugging
        return boats;
    }

    @GetMapping("/{boatId}")
    public Boat getBoat(@PathVariable Long boatId) {
        return boatService.getBoat(boatId);
    }

    @PostMapping("/")
    public ResponseEntity<Boat> addBoat(@RequestBody Boat boat) {
        try {
            log.info("Otrzymano żądanie dodania łodzi: {}", boat);
            boatService.addBoat(boat);
            log.info("Łódź została dodana pomyślnie");
            return ResponseEntity.ok(boat);
        } catch (Exception e) {
            log.error("Błąd podczas dodawania łodzi: ", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping("/{boatId}")
    //@PostMapping("/updateBoat")
    public void updateBoat(@PathVariable Long boatId, @RequestBody Boat boat) {
        boatService.updateBoat(boatId, boat);
    }

    @DeleteMapping("/{boatId}")
    public ResponseEntity<Void> deleteBoat(@PathVariable Long boatId) {
        try{
            boatService.deleteBoat(boatId);
            return ResponseEntity.ok().build();
        } catch (Exception e){
            return ResponseEntity.notFound().build();
        }

    }
}