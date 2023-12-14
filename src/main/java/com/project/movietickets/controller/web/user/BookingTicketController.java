package com.project.movietickets.controller.web.user;

import com.project.movietickets.entity.TicketEntity;
import com.project.movietickets.service.user.BookingTicketService;
import lombok.RequiredArgsConstructor;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequiredArgsConstructor
public class BookingTicketController {

	private final BookingTicketService bookingTicketService;

	@GetMapping(value = "/booking/ticket")
	public ModelAndView index(@RequestParam("scheduleId") int scheduleId,
	                          @RequestParam("roomChairId") List<Integer> roomChairIds,
	                          Authentication authentication, HttpSession session) {
	    var modelAndView = new ModelAndView("user/booking-ticket");

	    var username = authentication.getName();

	    // Xử lý mua vé cho danh sách các ghế
	    List<TicketEntity> tickets = new ArrayList<>();
	    for (int roomChairId : roomChairIds) {
	        TicketEntity ticket = bookingTicketService.buyTicket(scheduleId, roomChairId, username);

	        // Kiểm tra xem ticket có bị null không trước khi lưu vào SQL
	        if (ticket != null) {
	            tickets.add(ticket);
	        } 
	    }

	    // Kiểm tra xem có vé hợp lệ nào không trước khi thêm vào modelAndView
	    if (!tickets.isEmpty()) {
	        modelAndView.addObject("tickets", tickets);
	    } else {
	        // Nếu không có vé hợp lệ, có thể thực hiện các xử lý khác ở đây nếu cần
	        // Ví dụ: Hiển thị thông báo lỗi, chuyển hướng đến trang khác, vv.
	    }
	    session.setAttribute("roomChairIds", roomChairIds);
	    return modelAndView;
	}
}
