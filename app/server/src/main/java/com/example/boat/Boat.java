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
@Table(name = "boats")
public class Boat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "boat_name")
    private String boatName;

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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBoatName() {
        return boatName;
    }

    public void setBoatName(String boatName) {
        this.boatName = boatName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getOpinions() {
        return opinions;
    }

    public void setOpinions(String opinions) {
        this.opinions = opinions;
    }

    public String getLandlord() {
        return landlord;
    }

    public void setLandlord(String landlord) {
        this.landlord = landlord;
    }

    public String getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }

    public String getImageSource() {
        return imageSource;
    }

    public void setImageSource(String imageSource) {
        this.imageSource = imageSource;
    }

    public int getPlacesInside() {
        return placesInside;
    }

    public void setPlacesInside(int placesInside) {
        this.placesInside = placesInside;
    }

    public int getCabins() {
        return cabins;
    }

    public void setCabins(int cabins) {
        this.cabins = cabins;
    }

    public int getBunk() {
        return bunk;
    }

    public void setBunk(int bunk) {
        this.bunk = bunk;
    }

    public int getPriceInTheSeason() {
        return priceInTheSeason;
    }

    public void setPriceInTheSeason(int priceInTheSeason) {
        this.priceInTheSeason = priceInTheSeason;
    }

    public int getPriceOutOfSeason() {
        return priceOutOfSeason;
    }

    public void setPriceOutOfSeason(int priceOutOfSeason) {
        this.priceOutOfSeason = priceOutOfSeason;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getPower() {
        return power;
    }

    public void setPower(int power) {
        this.power = power;
    }

    public int getDistance() {
        return distance;
    }

    public void setDistance(int distance) {
        this.distance = distance;
    }

    public Set<Charter> getCharters() {
        return charters;
    }

    public void setCharters(Set<Charter> charters) {
        this.charters = charters;
    }

    @Override
    public String toString() {
        return "Boat{" +
                "id=" + id +
                ", boatName='" + boatName + '\'' +
                ", description='" + description + '\'' +
                ", opinions='" + opinions + '\'' +
                ", landlord='" + landlord + '\'' +
                ", manufacturer='" + manufacturer + '\'' +
                ", imageSource='" + imageSource + '\'' +
                ", placesInside=" + placesInside +
                ", cabins=" + cabins +
                ", bunk=" + bunk +
                ", priceInTheSeason=" + priceInTheSeason +
                ", priceOutOfSeason=" + priceOutOfSeason +
                ", year=" + year +
                ", power=" + power +
                ", distance=" + distance +
                '}';
    }
}
