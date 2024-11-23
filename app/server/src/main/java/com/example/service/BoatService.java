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

    public void updateBoat(Long id, Boat boatDetails) {
        Boat boat = boatRepository.findById(id).orElseThrow(()->new RuntimeException("Boat not found"));
        boat.setName(boatDetails.getName());
        boat.setDescription(boatDetails.getDescription());
        boat.setBunk(boatDetails.getBunk());
        boat.setCharter(boatDetails.getCharter());
        boat.setCabins(boatDetails.getCabins());
        boat.setDistance(boatDetails.getDistance());
        boat.setImageSource(boatDetails.getImageSource());
        boat.setLandlord(boatDetails.getLandlord());
        boat.setManufacturer(boatDetails.getManufacturer());
        boat.setOpinions(boatDetails.getOpinions());
        boat.setPlacesInside(boatDetails.getPlacesInside());
        boat.setPower(boatDetails.getPower());
        boat.setPriceInTheSeason(boatDetails.getPriceInTheSeason());
        boat.setPriceOutOfSeason(boatDetails.getPriceOutOfSeason());
        boat.setYear(boatDetails.getYear());
        boat.setCharter(boatDetails.getCharter());
        // #1 uzupelnic pozostale pola
        boatRepository.save(boat);
    }

    public void deleteBoat(Long id) {
        Boat boat = boatRepository.findById(id).get();
        boatRepository.delete(boat);

   }
}