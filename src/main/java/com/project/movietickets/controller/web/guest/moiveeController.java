package com.project.movietickets.controller.web.guest;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import com.project.movietickets.entity.MovieEntity;
import com.project.movietickets.entity.RoomMovieScheduleEntity;
import com.project.movietickets.entity.categoryEntity;
import com.project.movietickets.repository.CityRepository;
import com.project.movietickets.repository.MovieRepository;
import com.project.movietickets.repository.RoomMovieScheduleRepository;
import com.project.movietickets.repository.categoryReposytory;
import com.project.movietickets.service.MovieService;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class moiveeController {
	private final MovieService movieService;
	private final MovieRepository movieRepository ;
    private final CityRepository cityRepository;
    private final categoryReposytory categoryrep ;
    private final RoomMovieScheduleRepository movieScheduleRepository ;
    @GetMapping(value = "/movieCate")
    public String index(@RequestParam int categoryId,Model model){
        List<MovieEntity> hotMovies = movieService.getListMovieViewHighest();
        List<MovieEntity> newMovies = movieService.getListMovieLastest();
        List<MovieEntity> allMovies = movieRepository.findAllByCategory(categoryId);
        List<categoryEntity> allCate = categoryrep.findAll();
        List<RoomMovieScheduleEntity> movieBySchedule = movieScheduleRepository.findRoomMovieSchedulesForToday();
        model.addAttribute("hotMovies", hotMovies);
        model.addAttribute("newMovies", newMovies);
        model.addAttribute("allMovies", allMovies);
        model.addAttribute("date", LocalDate.now().toString());
        model.addAttribute("cityId", cityRepository.findFirstByNameNotNull().getId());
        model.addAttribute("category", allCate);
        model.addAttribute("view", "home");
        model.addAttribute("movieToday", movieBySchedule);
        return "index";
    }
    
    @GetMapping(value = "/search")
    public String search(@RequestParam("keyword") String keyword,Model model){
        List<MovieEntity> hotMovies = movieService.getListMovieViewHighest();
        List<MovieEntity> newMovies = movieService.getListMovieLastest();
        List<MovieEntity> allMovies = movieRepository.findByNameContaining(keyword);
        List<categoryEntity> allCate = categoryrep.findAll();
        List<RoomMovieScheduleEntity> movieBySchedule = movieScheduleRepository.findRoomMovieSchedulesForToday();
        model.addAttribute("hotMovies", hotMovies);
        model.addAttribute("newMovies", newMovies);
        model.addAttribute("allMovies", allMovies);
        model.addAttribute("date", LocalDate.now().toString());
        model.addAttribute("cityId", cityRepository.findFirstByNameNotNull().getId());
        model.addAttribute("category", allCate);
        model.addAttribute("view", "home");
        model.addAttribute("movieToday", movieBySchedule);
        return "index";
    }
}
