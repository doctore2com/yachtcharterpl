package com.example.service;

import  com.example.boat.Boat;
import com.example.repository.BoatRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class  BoatService {

    private final BoatRepository boatRepository;


    public List<Boat> getAllBoats(){
        return boatRepository.findAll();
    }

    public Boat getBoat(Long id) {
        return boatRepository.findById(id).get();
    }

    public void addBoat(Boat boat) {
        boatRepository.save(boat);
    }

    public void updateBoat(Boat boat) {
        boatRepository.save(boat);
    }

    public void deleteBoat(Long id) {
        Boat boat = boatRepository.findById(id).get();
        boatRepository.delete(boat);

   }
}