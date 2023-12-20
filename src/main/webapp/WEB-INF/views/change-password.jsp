<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE HTML>
<html>
<head>
    <!-- Head -->
    <jsp:include page="template/header.jsp"/>
</head>

<body>
<!-- Nav -->
<jsp:include page="template/nav.jsp"/>

<!-- Content-->
<form id="login-form" class="login" method='post' action="/change-password">
    <p class="login__title">Đổi mật khẩu<br><span class="login-edition">Chào mừng bạn đến HAC Cinema</span></p>



    <p class="login__tracker">or</p>

    <div class="field-wrap">
        <input type='password' placeholder='Mật khẩu cũ' name='password' class="login__input">
        <input type='password' placeholder='Mật khẩu mới' name='newpass' class="login__input">
        <input type='password' placeholder='Nhập lại mật khẩu mới' name='confirmpass' class="login__input">

       
        <label for='#informed' class='login__check-info'></label>
        <p>${message}</p>
       
    </div>

    <div class="login__control">
       <button type="submit" class="btn btn-primary">Cập nhập</button>
        <a href="#" class="login__tracker form__tracker">Quên mật khẩu?</a>
    </div>
</form>

<div class="clearfix"></div>

<!-- Footer -->
<jsp:include page="template/footer.jsp"/>
</body>
</html>