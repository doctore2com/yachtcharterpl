package com.example.repository;

import com.example.charter.Charter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CharterRepository extends JpaRepository<Charter,Long> {

//    List<Charter> findByTopicId(Long boatId);


//List<Charter> findCharterByBoatId(Long id);





}