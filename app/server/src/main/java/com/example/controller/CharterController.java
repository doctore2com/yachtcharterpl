package com.example.controller;

import com.example.charter.Charter;
import com.example.service.CharterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import java.util.List;


@RestController
@RequestMapping("/charters")
@CrossOrigin(origins = "http://localhost:8080", allowedHeaders = "*", allowCredentials = "true")
public class CharterController {

    @Autowired
    private CharterService charterService;

    @GetMapping
    public ResponseEntity <List<Charter>> getAllCharters() {
        System.out.println("Pobieranie wszystkich rezerwacji");
        List<Charter> charters = charterService.getAllCharters();
        System.out.println("Znalezione rezerwacje: " + charters.size());
        return ResponseEntity.ok(charters);
    }

    @GetMapping("/{charterId}")
    public Charter getCharter(@PathVariable Long charterId) {
        return charterService.getCharter(charterId);
    }

    @PostMapping("/")
    public void addCharter(@RequestBody Charter charter){
        charterService.addCharter(charter);
    }

    @PutMapping("/{charterId}")
    public void updateCharter(@PathVariable Long charterId,  @RequestBody Charter charter){
         charterService.updateCharter(charterId, charter);
    }

    @DeleteMapping("/{charterId}")
    public void deleteCharter(@PathVariable Long charterId) {
        charterService.deleteCharter(charterId);
    }
    }


