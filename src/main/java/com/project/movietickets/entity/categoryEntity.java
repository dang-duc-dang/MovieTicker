package com.project.movietickets.entity;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.Nationalized;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Entity(name = "categoryMovie")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class categoryEntity {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(insertable = false)
    private int id;

    @Nationalized
    @Column(name = "name", nullable = false, unique = true)
    private String name;

    
}
