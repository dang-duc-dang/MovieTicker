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
		<div id="myModal" class="modal fade" role="dialog">
			<div class="modal-dialog">

				<!-- Modal content-->
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title">Thanh toán</h4>
					</div>
					<div class="modal-body">

						<form action="#" method="get" id="form-checkout">

							<div class="row">
								<div class="form-group col-sm-6">
									<label for="sel1">Chọn loại ngân hàng:</label> <select
										class="form-control" id="sel1">
										<option selected>Visa</option>
										<option>Vietcombank</option>
										<option>VPbank</option>
										<option>Viettinbank</option>
									</select>
								</div>
							</div>

							<div class="row">
								<div class="col-sm-6">
									<div class="form-group">
										<label for="card-number">Số thẻ:</label> <input type="number"
											class="form-control" id="card-number" required>
									</div>
								</div>

								<div class="col-sm-6">
									<div class="form-group">
										<label for="date">Ngày hết hạn:</label> <input type="date"
											class="form-control" id="date" required>
									</div>
								</div>
							</div>

							<h2>Thông tin</h2>

							<div class="row">
								<div class="col-sm-3">
									<div class="form-group">
										<label for="last-name">Họ</label> <input type="text"
											class="form-control" id="last-name" required>
									</div>
								</div>

								<div class="col-sm-3">
									<div class="form-group">
										<label for="first-name">Tên:</label> <input type="text"
											class="form-control" id="first-name" required>
									</div>
								</div>

								<div class="col-sm-6">
									<div class="form-group">
										<label for="city">Thành phố:</label> <input type="text"
											class="form-control" id="city" required>
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col-sm-6">
									<div class="form-group">
										<label for="address">Địa chỉ:</label> <input type="text"
											class="form-control" id="address" required>
									</div>
								</div>
								<div class="col-sm-6">
									<div class="form-group">
										<label for="zip-code">Mã zip:</label> <input type="number"
											class="form-control" id="zip-code" required>
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col-sm-6">
									<div class="form-group">
										<label for="address-2">Địa chỉ 2:</label> <input type="text"
											class="form-control" id="address-2">
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col-sm-6">
									<div class="form-group">
										<label for="country">Quốc gia:</label> <input type="text"
											class="form-control" id="country" required>
									</div>
								</div>

								<div class="col-sm-6">
									<div class="form-group">
										<label for="phone">Số điện thoại:</label> <input type="number"
											class="form-control" id="phone" required>
									</div>
								</div>
							</div>

							<div class="row">
								<div class="checkbox">
									<label><input type="checkbox">Lưu lại thông tin
										này!</label>
								</div>
							</div>

							<button type="submit" class="btn btn-primary">Gửi</button>

						</form>

					</div>
					<div class="modal-footer">
						<button id="btn-close" type="button" class="btn btn-default"
							data-dismiss="modal">Đóng</button>
					</div>
				</div>

			</div>
		</div>

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
