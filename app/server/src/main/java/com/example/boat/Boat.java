package com.example.boat;

import com.example.charter.Charter;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Boat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="boatName")
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
    @ManyToOne
    private Charter charter;
}
