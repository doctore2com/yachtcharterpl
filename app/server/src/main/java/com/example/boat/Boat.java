 package com.example.boat;

import com.example.charter.Charter;
import javax.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.Set;
import java.util.HashSet;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "boat")
public class Boat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "boat_name")
    private String name;

    private String description;
    private String opinions;
    private String landlord;
    private String manufacturer;
    private String imageSource;
    private int placesInside;
    private int cabins;
    private int bunk;
    private int priceInTheSeason;
    private int priceOutOfSeason;
    private int year;
    private int power;
    private int distance;

    @OneToMany(mappedBy = "boat", cascade = CascadeType.ALL)
    @JsonIgnoreProperties("boat")
    private Set<Charter> charters = new HashSet<>();
}
