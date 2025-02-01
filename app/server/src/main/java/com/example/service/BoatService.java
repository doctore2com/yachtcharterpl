package com.example.service;

import com.example.boat.Boat;
import com.example.repository.BoatRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.util.Map;
import java.util.List;
import java.util.Optional;

@Service
public class BoatService {

    private final Logger logger = LoggerFactory.getLogger(BoatService.class);

    @Autowired
    private BoatRepository boatRepository;

    public List<Boat> getAllBoats() {
        return boatRepository.findAll();
    }

    public Boat getBoat(Long id) {
        Optional<Boat> boat = boatRepository.findById(id);
        return boat.orElse(null);
    }

    public Boat addBoat(MultipartFile file, Map<String, String> boatData) {
        try {
            Boat boat = createBoatFromData(boatData);
            return boatRepository.save(boat);
        } catch (Exception e) {
            throw new RuntimeException("Blad podczas dodawania lodzi", e);
        }
    }

    public Boat createBoatFromData(Map<String, String> boatData) {
        Boat boat = new Boat();
        boat.setBoatName(boatData.get("name"));
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
        if (boat.getBoatName() == null || boat.getBoatName().trim().isEmpty()) {
            throw new IllegalArgumentException("Nazwa łodzi jest wymagana");
        }
        boatRepository.save(boat);
    }

    public Boat updateBoat(Long id, Boat boatDetails) {
        Boat boat = boatRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Nie znaleziono łodzi o id: " + id));

        boat.setBoatName(boatDetails.getBoatName());
        boat.setDescription(boatDetails.getDescription());
        boat.setOpinions(boatDetails.getOpinions());
        boat.setLandlord(boatDetails.getLandlord());
        boat.setManufacturer(boatDetails.getManufacturer());
        boat.setImageSource(boatDetails.getImageSource());
        boat.setPlacesInside(boatDetails.getPlacesInside());
        boat.setCabins(boatDetails.getCabins());
        boat.setBunk(boatDetails.getBunk());
        boat.setPriceInTheSeason(boatDetails.getPriceInTheSeason());
        boat.setPriceOutOfSeason(boatDetails.getPriceOutOfSeason());
        boat.setYear(boatDetails.getYear());
        boat.setPower(boatDetails.getPower());
        boat.setDistance(boatDetails.getDistance());
        return boatRepository.save(boat);
    }

    public void deleteBoat(Long id) {
        boatRepository.deleteById(id);
    }

    public void validateBoat(Boat boat) {
        if (boat.getBoatName() == null || boat.getBoatName().isEmpty()) {
            throw new IllegalArgumentException("Nazwa łodzi jest wymagana");
        }
    }
}