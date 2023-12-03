package com.project.movietickets.controller.web.user;

import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;


import com.project.movietickets.entity.UserEntity;
import com.project.movietickets.service.UserService;

@Controller
public class ChangePasswordController {
	
	@Autowired
	HttpServletRequest request;
	
	
	@Autowired
	UserService UserService;
	

	 @GetMapping(value = "/change-password")
	    public String changePassword(){
	        return "change-password";
	    }
	  
	  @PostMapping("/change-password") 
	  public String changePassword(
	      @RequestParam String password,
	      @RequestParam String newpass,
	      @RequestParam String confirmpass,
	      Model model) {

	      String username = request.getRemoteUser();
	      Optional<UserEntity> account = UserService.findUserByUsername(username);
	      
	      if (!account.isPresent()) {
	          model.addAttribute("message", "Không tìm thấy người dùng");
	      } else {
	          if (!newpass.equals(confirmpass)) {
	              model.addAttribute("message", "Xác nhận mật khẩu sai");
	          }  else if (!UserService.checkPassword(username, password)) {
	              model.addAttribute("message", "Mật khẩu hiện tại không đúng");
	          } else {
	              // Cập nhật mật khẩu mới
	              account.ifPresent(user -> {
	                  user.setPassword(newpass);
	                  UserService.changePassword(user);             
	                  });
	              model.addAttribute("message", "Đổi mật khẩu thành công");
	          }
	      }
	      
	      return "change-password";
	  }
}