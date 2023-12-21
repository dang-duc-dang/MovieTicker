package com.project.movietickets.repository;

import com.project.movietickets.entity.RoomMovieScheduleEntity;
import com.project.movietickets.entity.ScheduleEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface RoomMovieScheduleRepository extends JpaRepository<RoomMovieScheduleEntity, Integer> {
    //List<RoomMovieScheduleEntity> findRoomMovieScheduleEntitiesByMovie_Id(int movieId);

    @Query(value = "select room_movie_schedules.*\n" +
            "from room_movie_schedules\n" +
            "inner join schedules\n" +
            "on room_movie_schedules.schedule_id = schedules.id\n" +
            "inner join rooms\n" +
            "on room_movie_schedules.room_id = rooms.id\n" +
            "inner join cinemas\n" +
            "on rooms.cinema_id = cinemas.id\n" +
            "inner join citys\n" +
            "on cinemas.city_id = citys.id\n" +
            "where movie_id = :movieId and citys.id = :cityId and date(schedules.time) = :localDate", nativeQuery = true)
    List<RoomMovieScheduleEntity> findAllByCityAndMovieAndDate(
            @Param("movieId") int movieId,
            @Param("cityId") int cityId,
            @Param("localDate") String localDate
    );
    @Query(value = "SELECT DISTINCT rms.* FROM room_movie_schedules rms " +
            "INNER JOIN schedules s ON rms.schedule_id = s.id " +
            "WHERE DATE(s.time) = CURRENT_DATE", nativeQuery = true)
    List<RoomMovieScheduleEntity> findRoomMovieSchedulesForToday();




}