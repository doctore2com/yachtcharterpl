package com.example.service;

import  com.example.boat.Boat;
import com.example.repository.BoatRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.util.Map;


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


    public Boat addBoat(MultipartFile file, Map<String, String> boatData){
        try {
            Boat boat = createBoatFromData(boatData);

            return boatRepository.save(boat);
        } catch (Exception e) {
            throw new RuntimeException("Blad podczas dodawania lodzi",e);
        }
    }

    public Boat createBoatFromData(Map<String, String> boatData){
        Boat boat = new Boat();
        boat.setName(boatData.get("name"));
        boat.setBunk(Integer.parseInt(boatData.get("bunk")));
        boat.setCabins(Integer.parseInt(boatData.get("cabins")));
        boat.setDescription(boatData.get("description"));
        boat.setDistance(Integer.parseInt(boatData.get("distance")));
        boat.setImageSource(boatData.get("image_source"));
        boat.setLandlord(boatData.get("landlord"));
        boat.setManufacturer(boatData.get("manufacturer"));
        boat.setOpinions(boatData.get("opinions"));
        boat.setPlacesInside(Integer.parseInt(boatData.get("places_inside")));
        boat.setPower(Integer.parseInt(boatData.get("power")));
        boat.setPriceInTheSeason(Integer.parseInt(boatData.get("price_in_the_season")));
        boat.setPriceOutOfSeason(Integer.parseInt(boatData.get("price_out_of_season")));
        boat.setYear(Integer.parseInt(boatData.get("year")));
        return boat;
    }




    public void addBoat(Boat boat) {
        boatRepository.save(boat);
    }

    public void updateBoat(Long id, Boat boatDetails) {
        Boat boat = boatRepository.findById(id).orElseThrow(()->new RuntimeException("Boat not found"));
        boat.setName(boatDetails.getName());
        boat.setDescription(boatDetails.getDescription());
        boat.setBunk(boatDetails.getBunk());
        boat.setCharters(boatDetails.getCharters());
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
        boat.setCharters(boatDetails.getCharters());
        boatRepository.save(boat);
    }

    public void deleteBoat(Long id) {
        boatRepository.findById(id)
                .ifPresent(boatRepository::delete);
   }
}