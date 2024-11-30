package com.example.repository;

import com.example.charter.Charter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface CharterRepository extends JpaRepository<Charter,Long> {

    List<Charter> findByBoatId(Long boatId);


    @Query("SELECT c FROM Charter c WHERE c.boat.id=:boatId "+
                "AND ((c.startCharter BETWEEN :startDate AND :endDate))"+
                "OR ((c.endCharter BETWEEN :startDate AND :endDate)) ")
    List<Charter> findOverlappingCharters(
            @Param("boatId") Long boatId,
            @Param("startDate") Date startDate,
            @Param("endDate") Date endDate
    );

    }


//List<Charter> findCharterByBoatId(Long id);



