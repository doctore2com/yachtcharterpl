package com.example.repository;

import com.example.model.User;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
 public interface UserRepository extends JpaRepository<User,Long>{
 User findByEmail(String email);
 User findByEmailAndPassword(String email, String password);
  Optional<User> findByUsername(String username);

 Boolean existsByUsername(String username);

 Boolean existsByEmail(String email);

}
