<%@ page
	import="com.project.movietickets.entity.RoomMovieScheduleEntity"%>
<%@ page import="java.time.LocalDateTime"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE HTML>
<html>
<head>
<!-- Head -->
<jsp:include page="../template/header.jsp" />
</head>

<body>
	<!-- Nav -->
	<jsp:include page="../template/nav.jsp" />

	<div id="loader-wrapper">
		<div id="loader"></div>

		<div class="loader-section section-left"></div>
		<div class="loader-section section-right"></div>

	</div>
	<!-- Content-->

	<section class="container">
		<div class="order-container">
			 <div class="order">
                    <img class="order__images" alt='' src="/images/tickets.png">
                    <p class="order__title">Cảm ơn bạn <br><span class="order__descript">bạn đã mua vé thành công</span></p>
                </div>
			<c:forEach var="ticket" items="${tickets}">
				<div class="ticket">
					<div class="ticket-position">
						<div class="ticket__indecator indecator--pre">
							<div class="indecator-text pre--text">online ticket</div>
						</div>
						<div class="ticket__inner">

							<div class="ticket-secondary">
								<span class="ticket__item">MÃ VÉ: <strong
									class="ticket__number">${ticket.code}</strong></span> <span
									class="ticket__item">NGÀY CHIẾU: <span
									class="ticket__cinema">${ticket.roomMovieSchedule.schedule.time}</span></span>
								<span class="ticket__item">NGÀY ĐẶT: <span
									class="ticket__cinema">${ticket.date}</span></span> <span
									class="ticket__item">PHÒNG: <span class="ticket__hall">${ticket.roomMovieSchedule.room.name}</span></span>
								<span class="ticket__item ticket__price">thành tiền: <strong
									class="ticket__cost">${ticket.amount}.000Đ</strong></span>
								<c:choose>
									<c:when test="${ticket.received}">
										<span>Tình trạng: Đã nhận vé!</span>
									</c:when>
									<c:when test="${ticket.pay}">
										<span>Tình trạng: Đã thanh toán!</span>
									</c:when>
									<c:otherwise>
										<span>Tình trạng: Chưa thanh toán!</span>
									</c:otherwise>
								</c:choose>
							</div>

							<div class="ticket-primery">
								<span class="ticket__item ticket__item--primery ticket__film">bộ phim<br>
								<strong class="ticket__movie">${ticket.roomMovieSchedule.movie.name}</strong></span>
								<span class="ticket__item ticket__item--primery">Số ghế: <span
									class="ticket__place">${ticket.roomChair.chair.position}</span></span>
								<a href="/history/${ticket.id}/delete" type="button"
									class="your-class-name">Huỷ vé này của bạn!</a>
							</div>


						</div>
						<div class="ticket__indecator indecator--post">
							<div class="indecator-text post--text">online ticket</div>
						</div>
					</div>
				</div>

			</c:forEach>
		</div>
	</section>
	<!-- Footer -->
	<jsp:include page="../template/footer.jsp" />
</body>
</html>