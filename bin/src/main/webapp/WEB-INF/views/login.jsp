<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <!-- Head -->
    <title>Official Signin</title>
   <link href="/css/layout/form.css" rel="stylesheet" />
   
   <link href='//fonts.googleapis.com/css?family=Roboto+Condensed:400,700' rel='stylesheet' type='text/css'>

	
	<!-- //css files -->
	<!-- web-fonts -->
	
</head>

<body>
<!-- Nav -->


<!-- Content-->

	

			
			
			
			
				<div class="header">
		<div class="header-main">
			<h1>Đăng Nhập</h1>
			<div class="header-bottom">
				<div class="header-right w3agile">

					<div class="header-left-bottom agileinfo">

						<form action="/login" method="post">
							<input type="text" placeholder="Tên đăng nhập" name="username" required/>
							<input type="password" placeholder="Mật khẩu" name="password" required/>
							<div class="remember">
								<span class="checkbox1">
									<label class="checkbox"><input type="checkbox" name="" checked=""><i> </i>Nhớ
										tôi</label>
								</span>
								<div class="forgot">
									<h6><a href="http://localhost:8080/restore-password">Quên mật khẩu?</a></h6>
								</div>
								<div class="clear"> </div>
							</div>

							<input type="submit" value="Đăng Nhập">
						</form>



					</div>
				</div>

			</div>
		</div>
	</div>
	<!--header end here-->
	<div class="copyright">
		<p>Nếu bạn chưa có tài khoản | Nhanh tay <a style="color: rgb(42, 165, 67);" href="http://localhost:8080/register">
				Đăng ký ngay </a></p>
	</div>
<!-- Footer -->

</body>
</html>
