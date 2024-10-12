package com.example.service;

import com.example.repository.UserRepository;
import com.example.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;



@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;


    public User saveUser(User user) {
        return userRepository.save(user);}

    public User registerUser(User user) {
        return userRepository.save(user);}


    public User fetchUserByEmailId(String email) {
      return userRepository.findByEmail(email);
    }

    public User fetchUserByEmailIdAndPassword(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password);
    }


    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUser(Long userId) {
        return userRepository.findById(userId).get();
    }

    public void addUser(User user) {
        userRepository.save(user);
    }

    public void updateUser(User user) {
        userRepository.save(user);
    }

    public void deleteUser(Long userId) {
        User user = userRepository.findById(userId).get();
        userRepository.delete(user);
    }

}








