package com.example.charter;


import javax.persistence.*;

import com.example.model.User;
import com.fasterxml.jackson.annotation.JsonFormat;
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
@Table(name="charter")
public class Charter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name="charter_name")
    private String name;
    private String description;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss",timezone = "Europe/Warsaw")
    @Column(name="start_charter")
    private Date startCharter;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss",timezone = "Europe/Warsaw")
    @Column(name="end_charter")
    private Date endCharter;
    private String port;
    @ManyToOne
    @JoinColumn(name="id")
    private User user;


}