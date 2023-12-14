<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <jsp:include page="template/header.jsp"/>
</head>
<body>
<jsp:include page="template/nav.jsp"/>

 <section class="container">
            <div class="order-container">
                <div class="order">
                    <img class="order__images" alt='' src="images/tickets.png">
                    <p class="order__title">Book a ticket <br><span class="order__descript">and have fun movie
                            time</span></p>
                    <div class="order__control">
                        <a href="book3-buy.html" class="order__control-btn">Purchase</a>
                        <a href="" class="order__control-btn active">Reserve</a>
                    </div>
                </div>
            </div>
            <div class="order-step-area">
                <div class="order-step first--step order-step--disable ">1. What &amp; Where &amp; When</div>
                <div class="order-step second--step order-step--disable">2. Choose a sit</div>
                <div class="order-step third--step">3. Check out</div>
            </div>

            <div class="col-sm-12">
                <div class="checkout-wrapper">
                    <h2 class="page-heading">price</h2>
                    <ul class="book-result">
                        <li class="book-result__item">Tickets: <span class="book-result__count booking-ticket"></span>
                        </li>
                        <li class="book-result__item">One item price: <span
                                class="book-result__count booking-price">40000Đ</span></li>
                     
                        <li class="book-result__item">Total: <span class="book-result__count booking-cost"></span>
                        </li>
                    </ul>

                    <h2 class="page-heading">Bước cuối cùng để hoàn tất việc mua vé của bạn</h2>

                  

                    <p class="reservation-message">Vui lòng chọn mua ngay phía dưới để thanh toán đơn vé của bạn!</p>

                </div>
<form action="/pay" method="post">
                <div class="order">
                    <a href="${paymentUrl}" class="btn btn-md btn--warning btn--wide">mua ngay</a>
                </div>
</form>
            </div>

        </section>

        <div class="clearfix"></div>
        
          <div class="booking-pagination">
            <a href="book2.html" class="booking-pagination__prev">
                <p class="arrow__text arrow--prev">prev step</p>
                <span class="arrow__info">choose a sit</span>
            </a>
            <a href="#" class="booking-pagination__next hide--arrow">
                <p class="arrow__text arrow--next">next step</p>
                <span class="arrow__info"></span>
            </a>
        </div>

<script type="text/javascript">
var storedArrayString = sessionStorage.getItem('selectedSeats');

// Kiểm tra xem giá trị có tồn tại hay không
if (storedArrayString) {
    // Chuyển đổi chuỗi JSON thành mảng
    var storedArray = JSON.parse(storedArrayString);

    // Lấy số lượng phần tử trong mảng
    var arrayLength = storedArray.length;

    var totalPrice = arrayLength * 40000;

    var totalElement = document.querySelector('.book-result__count.booking-cost');
    if (totalElement) {
        totalElement.textContent =  totalPrice + 'Đ';
    }
    // Gán giá trị cho phần tử HTML
    var countElement = document.querySelector('.book-result__count.booking-ticket');
    if (countElement) {
        countElement.textContent = arrayLength;
    } else {
        console.log('Không tìm thấy phần tử HTML để gán giá trị');
    }
} else {
    console.log('Giá trị không tồn tại trong Session Storage');
}
 </script>

<jsp:include page="template/footer.jsp"/>
</body>
</html>
