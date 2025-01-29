package com.example.service;

import com.example.charter.Charter;
import com.example.repository.CharterRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;


import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class CharterService {

    private final CharterRepository charterRepository;
//    private final BoatRepository boatRepository;

//    public List<Charter> getAllChartersByBoat(Long boatId) {
//        List<Charter> charters = new ArrayList<>();
//        charterRepository.findCharterByBoatId(boatId)
//                .forEach(charters::add);
//        return charters;
//    }

    public boolean isBoatAvailable (Long boatId, Date startDate, Date endDate){
        List<Charter> overlappingCharters= charterRepository.findOverlappingCharters(boatId, startDate, endDate);
        return overlappingCharters.isEmpty();
    }


    public List<Charter> getAllCharters(){

        return charterRepository.findAll();
    }



    public Charter getCharter(Long id) {
        return charterRepository.findById(id).get();
    }

    public Charter addCharter(Charter charter) {
        try {
            log.info("Attempting to save charter: {}", charter);
            log.info("Charter details - User: {}, Boat: {}, Start: {}, End: {}",
                    charter.getUser(), charter.getBoat(),
                    charter.getStartCharter(), charter.getEndCharter());
            if (charter.getStartCharter() != null &&
                    charter.getEndCharter() != null &&
                    charter.getStartCharter().compareTo(charter.getEndCharter()) > 0) {
                throw new IllegalArgumentException("Start date must be before end date");
            }

            Charter savedCharter = charterRepository.save(charter);
            log.info("Charter saved successfully with id: {}", savedCharter.getId());
            return savedCharter;
        } catch (Exception e) {
            log.error("Error saving charter: ", e);
            throw e;
        }
    }

    public void updateCharter(Long id, Charter charterDetails) {

        Charter charter = charterRepository.findById(id).orElseThrow(()->new RuntimeException("Charter not found"));
        charter.setCharterName(charterDetails.getCharterName());
        charter.setDescription(charterDetails.getDescription());
        charter.setPort(charterDetails.getPort());
        charter.setStartCharter(charterDetails.getStartCharter());
        charter.setEndCharter(charterDetails.getEndCharter());
        charterRepository.save(charter);
    }

    public void deleteCharter(Long id) {
        Charter charter = charterRepository.findById(id).get();
        charterRepository.delete(charter);
    }

}