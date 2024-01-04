<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE HTML>
<html>
<head>
<!-- Head -->
<title>Official Signin</title>

  <link href="/css/layout/form.css" rel="stylesheet" />
   
   <link href='//fonts.googleapis.com/css?family=Roboto+Condensed:400,700' rel='stylesheet' type='text/css'>
<!-- //css files -->
<!-- web-fonts -->
<link href="//fonts.googleapis.com/css?family=Snippet" rel="stylesheet">
<!--online fonts-->
<style type="text/css">
.content-w3ls .content-agile1 {
	width: 50%;
	float: left;
	background: url(../images/content.jpg) no-repeat;
	background-position: center;
	background-size: cover;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	-ms-background-size: cover;
	height: 755px;
}
</style>
</head>

<body>
	<!-- Nav -->


	<!-- Content-->

		<div class="header">
		<div class="header-main">
			<h1>Đăng Ký</h1>
			<div class="header-bottom">
				<div class="header-right w3agile">

					<div class="header-left-bottom agileinfo">

						<form action="/register" method="post">
							<input type="text" placeholder="Tên đăng nhập" name="username" required/>
							<input type="text" placeholder="Họ và tên" name="fullname" required/>
							<input type="password" placeholder="Mật khẩu" name="password" required/>
							<input type="email" placeholder="Email" name="email" required/>
							<input type="text" placeholder="Số điện thoại" name="phone" required/>
							<input type="date" placeholder="Ngày sinh" name="dateOfBirth" required/>
							<div class="remember">


								<div class="clear"> </div>
								
								<p class="wthree w3l">${message}</p>
							</div>

							<input type="submit" value="Đăng Ký">
						</form>



					</div>
				</div>

			</div>
		</div>
	</div>
	<!--header end here-->
	<div class="copyright">
		<p>Nếu bạn đã có tài khoản | Nhanh tay <a style="color: rgb(42, 165, 67);" href="http://localhost:8080/login">
				Đăng Nhập ngay </a></p>
	</div>
	<!-- Footer -->
</body>
</html>