package com.project.movietickets.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.movietickets.entity.CinemaEntity;
import com.project.movietickets.entity.categoryEntity;
import com.project.movietickets.repository.RoomRepository;
import com.project.movietickets.repository.categoryReposytory;
@Service
public class CategorySerivce {
	 @Autowired
	    private categoryReposytory categoryReposytory;

	    public List<categoryEntity> getAllCategory() {
	        return categoryReposytory.findAll();
	    }
}
