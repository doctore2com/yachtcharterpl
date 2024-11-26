package com.example.controller;

import com.example.boat.Boat;
import com.example.service.BoatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/boats")
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", allowCredentials = "true")
public class BoatController {

    @Autowired
    private BoatService boatService;
    @GetMapping("/")
    public List<Boat> getAllBoats() {
        return boatService.getAllBoats();
    }

    @GetMapping("/{boatId}")
    public Boat getBoat(@PathVariable Long boatId) {
        return boatService.getBoat(boatId);
    }

    @PostMapping("/")
    public void addBoat(@RequestBody Boat boat) {
        boatService.addBoat(boat);
    }   

    @PutMapping("/{boatId}")
    //@PostMapping("/updateBoat")
    public void updateBoat(@PathVariable Long boatId, @RequestBody Boat boat) {
        boatService.updateBoat(boatId, boat);
    }

    @DeleteMapping("/{boatId}")
    public void deleteBoat(@PathVariable Long boatId) {
        boatService.deleteBoat(boatId);
    }
}