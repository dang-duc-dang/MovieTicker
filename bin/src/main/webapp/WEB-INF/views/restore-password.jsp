<%@ page import="com.project.movietickets.model.Message" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <!-- Head -->
    
    <link href="/css/layout/form.css" rel="stylesheet" type="text/css" media="all" />
    <link href='//fonts.googleapis.com/css?family=Roboto+Condensed:400,700' rel='stylesheet' type='text/css'>
      
   
</head>

<body>
<!-- Nav -->



<!-- Content-->
<div class="content">

    <%
        Message message = (Message) request.getAttribute("message");
        if (message != null) {
            if (message.getCode() == Message.SUCCESS) {
                out.print("<div style='color: rgb(42, 165, 67);' class='alert copyright alert-success'>"
                        + "<strong>Thành công!</strong> "
                        + message.getMessage()
                        + "</div>");
            } else {
                out.print("<div class='alert alert-danger'>"
                        + "<strong>Thất bại!</strong> "
                        + message.getMessage()
                        + "</div>");
            }
        }
    %>

    
    	<div class="">
		<div class="header-main">
			<h1>Quên mật khẩu</h1>
			<div class="header-bottom">
				<div class="header-right w3agile">

					<div class="header-left-bottom agileinfo">

						<form action="/restore-password" class="form" role="form" method="post">
							<input type="text" placeholder="Tên đăng nhập" name="username" required />
							<input type="password" placeholder="Mật khẩu mới" name="password"
								required />
							<input type="password" placeholder="Nhập lại mật khẩu mới" name="rePassword" required/>

							<input type="submit" value="Cập nhật">
						</form>

					</div>
				</div>

			</div>
		</div>
	</div>
	<!--header end here-->
	<div class="copyright">
		<p>Nếu bạn chưa có tài khoản | Nhanh tay <a style="color: rgb(42, 165, 67);" href="http://localhost:8080/register"
				>
				Đăng ký ngay </a></p>
	</div>
</div>

<!-- Footer -->

</body>
</html>
