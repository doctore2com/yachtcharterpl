package com.example.charter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

import com.example.boat.Boat;
import com.example.model.User;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "charter")
public class Charter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    @NotNull(message = "User is required")
    @JsonIgnoreProperties({"charters", "password", "roles"})
    private User user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "boat_id")
    @NotNull(message = "Boat is required")
    @JsonIgnoreProperties("charters")
    private Boat boat;

    @Column(name = "charter_name")
    private String charterName;

    private String description;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Europe/Warsaw")
    @Column(name = "start_charter")
    private Date startCharter;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", timezone = "Europe/Warsaw")
    @Column(name = "end_charter")
    private Date endCharter;

    private String port;
}