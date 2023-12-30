package com.project.movietickets.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.movietickets.entity.categoryEntity;

public interface categoryReposytory extends JpaRepository<categoryEntity, Integer>{

}
