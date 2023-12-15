package com.project.movietickets.service.user;

import com.project.movietickets.entity.TicketEntity;
import com.project.movietickets.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BookingTicketService {

    private final UserRepository userRepository;

    private final RoomChairRepository roomChairRepository;

    private final RoomMovieScheduleRepository roomMovieScheduleRepository;

    private final TicketRepository ticketRepository;

    private final Set<Integer> processedRoomChairIds = new HashSet<>();
    
    private List<TicketEntity> currentBoughtTickets = new ArrayList<>();
    
    public TicketEntity buyTicket(int scheduleId, int roomChairId, String username) {
        if ( !isTicketValid(scheduleId, roomChairId)) {
            return null;
        }

        
        if (!processedRoomChairIds.contains(roomChairId)) {
           
        	processedRoomChairIds.add(roomChairId);
        } else {
			return null;
		}
        	
        var roomChair = roomChairRepository.getOne(roomChairId);
        var roomChairSchedule = roomMovieScheduleRepository.getOne(scheduleId);
        var code = UUID.randomUUID().toString().substring(0, 13).toUpperCase();
        var user = userRepository.findUserEntityByUsername(username).get();

        roomChair.setStatus(true);
      
        roomChairRepository.save(roomChair);

        // set amount
        // nguoi lon 60k
        // tre em 40k
        int amount = 60;

        if (LocalDate.now().getYear() - user.getDateOfBirth().getYear() < 18) {
            amount = 40;
        }

        var ticket = TicketEntity.builder()
                .date(LocalDate.now())
                .code(code)
                .isPay(false)
                .roomChair(roomChair)
                .roomMovieSchedule(roomChairSchedule)
                .user(user)
                .amount(amount)
                .build();
      
       

        currentBoughtTickets.add(ticket);
        return ticketRepository.save(ticket);
    }
    
    public void updatePaymentStatus(boolean isPay) {
        for (TicketEntity ticket : currentBoughtTickets) {
            if (ticket != null) {
                // Cập nhật trạng thái thanh toán cho tất cả các vé đã mua trong lần gọi mua vé này
                ticket.setPay(true);
                ticketRepository.save(ticket);
            }
        }

        // Sau khi cập nhật, đặt danh sách currentBoughtTickets về trạng thái ban đầu
        currentBoughtTickets = new ArrayList<>();
    }

    public boolean isTicketValid(int scheduleId, int roomChairId){
        var tickets = ticketRepository.findTicketEntitiesByRoomMovieSchedule_Id(scheduleId);
        for (var ticket : tickets){
            if (ticket.getRoomChair().getId() == roomChairId)
                return false;
        }

        return true;
    }
    

}
