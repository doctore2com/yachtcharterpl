package com.example.payload.request;



import lombok.Getter;
import lombok.Setter;
//import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class LoginRequest {

//    @NotBlank
    private String username;

//    @NotBlank
    private String password;



    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }
}
