package com.example.controller;


import com.example.model.User;
import com.example.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/registration")
public class RegistrationController {


    private final UserService userService;


    //
    @PostMapping("/registered")   //to sprawdzic czy registeruser czy registration
    @CrossOrigin(origins = "http://localhost:4200")
    public User registerUser(@RequestBody User user) throws Exception {
        String tempEmail = user.getEmail();
        if (tempEmail != null && !"".equals(tempEmail)) {
            User userObj = userService.fetchUserByEmailId(tempEmail);

            if ((userObj) != null) {
                throw new Exception("User with " + tempEmail + " is already exist");
            }
        }


        User userObj = null;   // bylo userObj = null
        userObj = userService.saveUser(user);
        return userObj;
    }

    @PostMapping("login")
    @CrossOrigin(origins = "http://localhost:4200")
    public User loginUser(@RequestBody User user) throws Exception {
     String tempEmail = user.getEmail();


            String tempPass = user.getPassword();
            User userObj = null;
            if (tempEmail != null && tempPass != null) {
                userObj = userService.fetchUserByEmailIdAndPassword(tempEmail, tempPass);
            }
            if (userObj == null) {
                throw new Exception("Bad credentials");
            }
            return userObj;

        }
    //



    @GetMapping("/allUsers")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/oneUser/{userId}")
    public User getUser(@PathVariable Long userId) {
        return userService.getUser(userId);
    }

    @PostMapping("/addUser")
    public void addUser(@RequestBody User user) {
        userService.addUser(user);
    }

    @PostMapping("/updateUser")
    public void updateUser(@RequestBody User user) {
        userService.updateUser(user);
    }

    @DeleteMapping("/deleteUser/{userId}")
    public void deleteUser(@PathVariable Long userId) {
        userService.deleteUser(userId);
    }
}