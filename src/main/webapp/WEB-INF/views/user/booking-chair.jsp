<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE HTML>
<html>
<head>
<!-- Head -->
<jsp:include page="../template/header.jsp" />
<script>
	$(function() {
		$('.info-room-chair').each(function() {
			const sender = $(this)
			const isSelected = sender.data('is-selected')
			if (isSelected === true) {
				sender.removeClass('btn-primary')
				sender.addClass('sits-state--not')
				sessionStorage.clear();
				sender.addClass('isDisabled')
			}
		})
	})
</script>
</head>

<style>
.isDisabled {
	color: currentColor;
	cursor: not-allowed;
	opacity: 0.5;
	text-decoration: none;
	pointer-events: none;
}

.info-room-chair {
	width: 50px;
	height: 50px;
	margin-left: 15px;
	margin-right: 15px;
	margin-top: 10px;
	margin-bottom: 10px;
}

.chair-container {
	width: 100%;
	height: 450px;
	text-align: center;
}

.note {
	width: 30px;
	height: 30px;
}
</style>

<body>
	<!-- Nav -->
	<jsp:include page="../template/nav.jsp" />




	<div class="wrapper place-wrapper">
		<!-- Banner -->

		<!-- Main content -->
		<div class="place-form-area">
			<section class="container">
				<div class="order-container">
					<div class="order">
						<img class="order__images" alt='' src="/images/tickets.png">
						<p class="order__title">
							Book a ticket <br>
							<span class="order__descript">and have fun movie time</span>
						</p>
						<div class="order__control">
							<a href="#" class="order__control-btn active">Purchase</a> <a
								href="#" class="order__control-btn">Reserve</a>
						</div>
					</div>
				</div>
				<div class="order-step-area">
					<div class="order-step first--step order-step--disable ">1.
						What &amp; Where &amp; When</div>
					<div class="order-step second--step">2. Choose a sit</div>
				</div>

				<div class="choose-sits">
					<div class="choose-sits__info choose-sits__info--first">
						<ul>
							<li class="sits-price marker--none"><strong>Price</strong></li>
							<li class="sits-price sits-price--cheap">40.000đ</li>
							
						</ul>
					</div>

					<div class="choose-sits__info">
						<ul>
							<li class="sits-state sits-state--not">Not available</li>
							<li class="sits-state sits-state--your">Your choice</li>
						</ul>
					</div>

					<div class="col-sm-12 col-lg-10 col-lg-offset-1">
						<div class="sits-area hidden-xs">
							<div class="sits-anchor">screen</div>

							<div class="sits">
								<aside class="sits__line">
									<span class="sits__indecator">A</span> <span
										class="sits__indecator">B</span> <span class="sits__indecator">C</span>
									<span class="sits__indecator">D</span> <span
										class="sits__indecator">E</span> <span class="sits__indecator">F</span>
									<span class="sits__indecator">G</span> 
									<span class="sits__indecator">G</span> 
									<span class="sits__indecator">G</span> 
									<span class="sits__indecator">G</span> 
									<span class="sits__indecator">G</span> 
									<span class="sits__indecator">G</span> 
									<span class="sits__indecator">G</span> 
									
								</aside>

								<div class="sits__row">
									<c:forEach var="roomChair" items="${roomChairs}"
										varStatus="loop">
										<span data-is-selected="${roomChair.status}"
											data-room-chair-id="${roomChair.id}"
											class="sits__place sits-price--cheap info-room-chair" data-place='A2'
											 onclick="selectSeat(${roomChair.id}, '${roomChair.chair.position}')"
											data-price='10'>${roomChair.chair.position}</span>
										<c:if test="${(loop.index+1)%12==0}">
											<br>
										</c:if>
										
								<c:if test="${(loop.index+1)==4 ||(loop.index+1)==8 || (loop.index+1)==16 || (loop.index+1)==20 || (loop.index+1)==28 || (loop.index+1)==32 || (loop.index+1)==40 || (loop.index+1)==44 || (loop.index+1)==52 || (loop.index+1)==56 || (loop.index+1)==64}">
										
											<span style="margin: 15px"></span>
										</c:if>
										
									</c:forEach>     
								</div>

								<aside class="sits__checked">
									<div class="checked-place"></div>
									<div class="checked-result">$0</div>
								</aside>
								<footer class="sits__number">
									<span class="sits__indecator">1</span> <span
										class="sits__indecator">2</span> <span class="sits__indecator">3</span>
									<span class="sits__indecator">4</span> <span
										class="sits__indecator">5</span> <span class="sits__indecator">6</span>
									<span class="sits__indecator">7</span> <span
										class="sits__indecator">8</span>  
								</footer>
							</div>
						</div>
					</div>

					<div class="col-sm-12 visible-xs">
						<div class="sits-area--mobile">
							<div class="sits-area--mobile-wrap">
								<div class="sits-select">
									<select name="sorting_item" class="sits__sort sit-row"
										tabindex="0">
										<option value="1" selected='selected'>A</option>
										<option value="2">B</option>
										<option value="3">C</option>
										<option value="4">D</option>
										<option value="5">E</option>
										<option value="6">F</option>
										<option value="7">G</option>
									
									</select> <select name="sorting_item" class="sits__sort sit-number"
										tabindex="1">
										<option value="1" selected='selected'>1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
										<option value="6">6</option>
										<option value="7">7</option>
										<option value="8">8</option>
										<option value="9">9</option>
										<option value="10">10</option>
										<option value="11">11</option>
										<option value="12">12</option>
										<option value="13">13</option>
										<option value="14">14</option>
										<option value="15">15</option>
										<option value="16">16</option>
										<option value="17">17</option>
										<option value="18">18</option>
									</select> <a href="#" class="btn btn-md btn--warning toogle-sits">Choose
										sit</a>
								</div>
							</div>

							<a href="#" class="watchlist add-sits-line">Add new sit</a>

							<aside class="sits__checked">
								<div class="checked-place">
									<span class="choosen-place"></span>
								</div>
								<div class="checked-result">$0</div>
							</aside>

							<img alt="" src="images/components/sits_mobile.png">
						</div>
					</div>

				</div>
				</section>
		</div>

	</div>



	<div class="clearfix"></div>
	<form id='film-and-time' class="booking-form" method='get'
		action='book3-buy.html'>

		<input type='text' name='choosen-number' class="choosen-number">
		<input type='text' name='choosen-number--cheap'
			class="choosen-number--cheap"> <input type='text'
			name='choosen-number--middle' class="choosen-number--middle">
		<input type='text' name='choosen-number--expansive'
			class="choosen-number--expansive"> <input type='text'
			name='choosen-cost' class="choosen-cost"> <input type='text'
			name='choosen-sits' class="choosen-sits">


		<div class="booking-pagination booking-pagination--margin">
			<a href="book1.html" class="booking-pagination__prev"> <span
				class="arrow__text arrow--prev">prev step</span> <span
				class="arrow__info">what&amp;where&amp;when</span>
			</a> <a id="click_on_session" class="booking-pagination__next"> <span
				class="arrow__text arrow--next">next step</span> <span
				class="arrow__info">checkout</span>
			</a>
		</div>
	</form>

	<div class="clearfix"></div>

	<script>
    function selectSeat(roomChairId, position) {
        // Lấy danh sách ghế đã chọn từ sessionStorage
        var selectedSeats = JSON.parse(sessionStorage.getItem('selectedSeats')) || [];

        // Kiểm tra xem ghế đã được chọn trước đó hay chưa
        var index = selectedSeats.indexOf(roomChairId);
        if (index === -1) {
            // Nếu ghế chưa được chọn, thêm vào danh sách
            selectedSeats.push(roomChairId);
        } else {
            // Nếu ghế đã được chọn, loại bỏ khỏi danh sách
            selectedSeats.splice(index, 1);
        }

        // Lưu danh sách ghế đã chọn vào sessionStorage
        sessionStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));

        // Xử lý thêm bất kỳ hành động nào khác bạn cần
        console.log('Seats selected:', selectedSeats);
    }
</script>
<script type="text/javascript">
        $(document).ready(function () {
            init_BookingTwo();
        });
        console.log()
        
        
    </script>
<script type="text/javascript">
$(window).click('load', function () {
    var selectedSeats = sessionStorage.getItem('selectedSeats');
    selectedSeats = selectedSeats ? JSON.parse(selectedSeats) : [];

    $('#click_on_session').click(function (e) {
        if (selectedSeats.length > 0) {
            var newHref = '/booking/ticket?scheduleId=' + ${scheduleId} + '&roomChairId=' + selectedSeats.join('&roomChairId=');
            window.location.href = newHref;
            e.preventDefault(); // Ngăn chặn sự kiện click mặc định
        }
    });

    console.log(selectedSeats);
});
</script>

 
	<!-- Footer -->
	<jsp:include page="../template/footer.jsp" />
</body>
</html>
