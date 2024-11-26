package com.example.controller;

import com.example.charter.Charter;
import com.example.service.CharterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/charters")
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*", allowCredentials = "true")
public class CharterController {

    @Autowired
    private CharterService charterService;

    @GetMapping("/")
    public List<Charter> getAllCharters() {
        return charterService.getAllCharters();
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


