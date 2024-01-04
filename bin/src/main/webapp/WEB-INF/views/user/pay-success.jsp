<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE HTML>
<html>
<head>
<!-- Head -->
<jsp:include page="../template/header.jsp" />
</head>
<style>
.hidden {
	display: none;
}
</style>
<body>
	<!-- Nav -->
	<jsp:include page="../template/nav.jsp" />


	<!-- Content-->
	<div class="container">

		<!-- Modal -->


		<c:choose>
			<c:when test="${ticket }">
				<div class="alert alert-warning" role="alert">
					<h4 class="alert-heading">Bạn đã đặt vé không thành công!</h4>
					<p>Ghế này đã được mua trước, vui lòng chọn ghế khác!</p>
					<hr>
					<p class="mb-0">Chúc bạn một ngày đẹp.</p>
				</div>
			</c:when>
			<c:otherwise>
				<div class="menu-wrapper">
					<jsp:include page="menu-option.jsp" />
				</div>

				<div class="ticket-wrapper hidden">
					<section class="container">
						<div class="order-container">
							 <div class="order">
                    <img class="order__images" alt='' src="/images/tickets.png">
                    <p class="order__title">Thank you <br><span class="order__descript">you have successfully purchased tickets</span></p>
                </div>
								<div class="ticket">
								<c:forEach var="ticket" items="${tickets}">
									<div class="ticket-position">

										<div class="ticket__inner">

											<div class="ticket-secondary">
												<span class="ticket__item">Mã vé : <strong
													class="ticket__number">${ticket.code}</strong></span> <span
													class="ticket__item">Set date: <span
													class="ticket__cinema">${ticket.date}</span></span> <span
													class="ticket__item">SHOWING DAY: <span
													class="ticket__hall">${ticket.roomMovieSchedule.schedule.time}</span></span>
												<span class="ticket__item ticket__price">price: <strong
													class="ticket__cost">${ticket.amount}.000đ</strong></span>
											</div>

											<div class="ticket-primery">
												<span
													class="ticket__item ticket__item--primery ticket__film">Film<br>
													<strong class="ticket__movie">${ticket.roomMovieSchedule.movie.name}</strong></span>
												<span class="ticket__item ticket__item--primery">Sits:
													<span class="ticket__place">${ticket.roomChair.chair.position}</span>
												</span>
											</div>

										</div>

									</div>
									</c:forEach>
								</div>
							
						</div>
					</section>
				</div>
			</c:otherwise>
		</c:choose>

	</div>

	<script>
		$(function() {
			$('#checkout-offline').click(function() {
				showTicket();
			});

			$('#form-checkout').submit(function(event) {
				event.preventDefault();
				$('#btn-close').click();
				showTicket();
			});
		});

		function showTicket() {
			$('.checkout-wrapper').addClass('hidden');
			$('.ticket-wrapper').removeClass('hidden'); 
		}
	</script>

	<!-- Footer -->
	<jsp:include page="../template/footer.jsp" />
</body>
</html>
