package com.example.controller;

import com.example.charter.Charter;
import com.example.service.CharterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/boats")
public class CharterController {

    @Autowired
    private CharterService charterService;

    @GetMapping("/charters")
    public List<Charter> getAllCharters() {
        return charterService.getAllCharters();
    }

    @GetMapping("/{boatId}/charters/{id}")
    public Charter getCharter(@PathVariable Long id) {
        return charterService.getCharter(id);
    }

    @PostMapping("/{boatId}/charters")
    public void addCharter(@RequestBody Charter charter, @PathVariable Long boatId){
        charterService.addCharter(charter, boatId);
    }

    @PostMapping("/charters")
    public void updateCharter(@RequestBody Charter charter){
         charterService.updateCharter(charter);
    }

    @DeleteMapping("/{boatId}")
    public void deleteCharter(@PathVariable Long id) {
        charterService.deleteCharter(id);
    }
    }


