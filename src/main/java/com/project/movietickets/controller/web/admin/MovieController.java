package com.project.movietickets.controller.web.admin;

import com.project.movietickets.entity.categoryEntity;
import com.project.movietickets.repository.categoryReposytory;
import com.project.movietickets.service.MovieService;
import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequiredArgsConstructor
public class MovieController {
    private final categoryReposytory categoryRepo ;
    private final MovieService service;

    @GetMapping(value = {"/admin", "admin/movies"})
    public ModelAndView index() {
        var modelAndView = new ModelAndView("admin/movie/index");
        var movies = service.getAllMovie();
        modelAndView.addObject("movies", movies);
        return modelAndView;
    }

    /**
     * For create movie
     *
     * @return String
     */
    @GetMapping(value = "admin/movies/create")
    public String create(Model model) {
    	var all  = categoryRepo.findAll();
       
        model.addAttribute("category", all);
        return "admin/movie/create";
    }

    @PostMapping(value = "admin/movies")
    public String createMovie(@RequestParam String name,
                              @RequestParam String description,
                              @RequestParam String director,
                              @RequestParam Integer category,
                              @RequestParam String premiere,
                              @RequestParam int time,
                              @RequestParam String language,
                              @RequestParam String format,
                              @RequestParam int ageLimit,
                              @RequestParam MultipartFile image) {
    	 categoryEntity categor = categoryRepo.findById(category).orElse(null);
        service.createMovie(
                name, description, director, categor, premiere, time, language, format, ageLimit, image
        );

        return "redirect:/admin/movies";
    }

    /**
     * For delete movie
     *
     * @param id
     * @return String
     */
    @GetMapping("admin/movies/{id}/delete")
    public String delete(@PathVariable int id) {
        service.deleteMovie(id);

        return "redirect:/admin/movies";
    }

}