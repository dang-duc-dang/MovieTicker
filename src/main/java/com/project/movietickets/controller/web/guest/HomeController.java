package com.project.movietickets.controller.web.guest;

import com.project.movietickets.entity.MovieEntity;
import com.project.movietickets.entity.RoomMovieScheduleEntity;
import com.project.movietickets.entity.categoryEntity;
import com.project.movietickets.repository.CityRepository;
import com.project.movietickets.repository.RoomMovieScheduleRepository;
import com.project.movietickets.repository.categoryReposytory;
import com.project.movietickets.service.MovieService;
import com.project.movietickets.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import javax.servlet.http.HttpSession;
import java.time.LocalDate;
import java.util.List;

@Controller
@RequiredArgsConstructor
public class HomeController {
    private final MovieService movieService;
    private final CityRepository cityRepository;
    private final categoryReposytory categoryrep ;
    private final RoomMovieScheduleRepository movieScheduleRepository ;
    @GetMapping(value = "/")
    public String index(Model model){
       
        List<MovieEntity> allMovies = movieService.getAllMovie();
        List<categoryEntity> allCate = categoryrep.findAll();
        List<RoomMovieScheduleEntity> movieBySchedule = movieScheduleRepository.findRoomMovieSchedulesForToday();
        model.addAttribute("allMovies", allMovies);
        model.addAttribute("date", LocalDate.now().toString());
        model.addAttribute("cityId", cityRepository.findFirstByNameNotNull().getId());
        model.addAttribute("category", allCate);
        model.addAttribute("view", "home");
        model.addAttribute("movieToday", movieBySchedule);
        
        return "index";
    }
}
