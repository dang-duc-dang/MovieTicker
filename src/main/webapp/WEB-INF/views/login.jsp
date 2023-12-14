<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <!-- Head -->
    <title>Official Signin</title>
   <link href="/css/login.css" rel="stylesheet" />
   
   <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap" rel="stylesheet">

	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	<!-- //css files -->
	<!-- web-fonts -->
	<link href="//fonts.googleapis.com/css?family=Snippet" rel="stylesheet"><!--online fonts-->
</head>

<body>
<!-- Nav -->


<!-- Content-->

	<h1 class="w3ls">Official Sign In Form</h1>
	<div class="content-w3ls">
		<div class="content-agile1">
			<h2 class="agileits1">Official</h2>
			<p class="agileits2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
		</div>
		<div class="content-agile2">
			<form action="/login" method="post">
				<div class="form-control w3layouts">
					<input type="text" id="firstname" name="username" placeholder="Username"
						title="Please enter your First Name" required="">
				</div>

				<div class="form-control w3layouts">
					<input type="password" id="email" name="password" placeholder="Passwords"
						title="Please enter a valid email" required="">
				</div>


				<p style="margin-top: 30px;" class="wthree w3l"><a style="color: red;" href="http://localhost:8080/restore-password">Quên mật khẩu?</a></p>

				<input type="submit" class="register" value="SIGN IN">
			</form>
			<script type="text/javascript">
				window.onload = function () {
					document.getElementById("password1").onchange = validatePassword;
					document.getElementById("password2").onchange = validatePassword;
				}
				function validatePassword() {
					var pass2 = document.getElementById("password2").value;
					var pass1 = document.getElementById("password1").value;
					if (pass1 != pass2)
						document.getElementById("password2").setCustomValidity("Passwords Don't Match");
					else
						document.getElementById("password2").setCustomValidity('');
					//empty string means no validation error
				}
			</script>
			<p class="wthree w3l">Fast Signup With Your Favourite Social Profile</p>
			<ul class="social-agileinfo wthree2">
				<li><a href="#"><i class="fa fa-facebook"></i></a></li>
				<li><a href="#"><i class="fa fa-youtube"></i></a></li>
				<li><a href="#"><i class="fa fa-twitter"></i></a></li>
				<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
			</ul>

		</div>
		<div class="clear"></div>

	</div>
	<p class="copyright w3l">Official registration form 2017. All Rights Reserved | Do not have an account <a
			href="http://localhost:8080/register" >SignUp</a></p>
<!-- Footer -->

</body>
</html>
