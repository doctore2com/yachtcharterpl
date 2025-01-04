package com.example.controller;

import com.example.boat.Boat;
import com.example.service.BoatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/boats")
@CrossOrigin(origins = "http://localhost:4200", allowedHeaders = "*", allowCredentials = "true")
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
        public Boat getBoat (@PathVariable Long boatId){
            return boatService.getBoat(boatId);
        }

        @PostMapping("/")
        public void addBoat (@RequestBody Boat boat){
            boatService.addBoat(boat);
        }

        @PutMapping("/{boatId}")
        //@PostMapping("/updateBoat")
        public void updateBoat (@PathVariable Long boatId, @RequestBody Boat boat){
            boatService.updateBoat(boatId, boat);
        }

        @DeleteMapping("/{boatId}")
        public void deleteBoat (@PathVariable Long boatId){
            boatService.deleteBoat(boatId);
        }
    }