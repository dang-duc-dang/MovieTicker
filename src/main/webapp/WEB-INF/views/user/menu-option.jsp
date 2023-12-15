<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>


  <section class="container">
            <div class="order-container">
                <div class="order">
                    <img class="order__images" alt='' src="/images/tickets.png">
                    <p class="order__title">ĐẶT VÉ <br><span class="order__descript">và chúc bạn có thời gian xem phim vui vẻ</span></p>
                    <div class="order__control">
                        <a href="" class="order__control-btn active">Mua</a>
                        <a href="book3-reserve.html" class="order__control-btn">Dự trữ</a>
                    </div>
                </div>
            </div>
            <div class="order-step-area">
                <div class="order-step first--step order-step--disable ">1. What &amp; Where &amp; When</div>
                <div class="order-step second--step order-step--disable">2. Chọn chỗ ngồi</div>
                <div class="order-step third--step">3. Thủ tục thanh toán</div>
            </div>

            <div class="col-sm-12">
                <div class="checkout-wrapper">
                    <h2 class="page-heading">GIÁ</h2>
                    <ul class="book-result">
                        <li class="book-result__item">Tickets: <span class="book-result__count booking-ticket">3</span>
                        </li>
                        <li class="book-result__item">One item price: <span
                                class="book-result__count booking-price">40000Đ</span></li>
                        <li class="book-result__item">Total: <span class="book-result__count booking-cost">$60</span>
                        </li>
                    </ul>

                    <h2 class="page-heading">LỰA CHỌN HÌNH THỨC THANH TOÁN</h2>
                    <div class="payment">
                        <button id="checkout-offline" class="btn btn-primary" style="padding: 4px 12px;">Tại quầy</button>
                        <a href="#" class="payment__item">
                            <img alt='' src="="> or
                        </a>
                        <a href="#" class="payment__item">
                            <img alt='' src="/images/payment/pay3.png">
                        </a>
                        <a href="#" class="payment__item">
                            <img alt='' src="/images/payment/pay4.png">
                        </a>
                        <a href="#" class="payment__item">
                            <img alt='' src="/images/payment/pay5.png">
                        </a>
                        <a href="#" class="payment__item">
                            <img alt='' src="/images/payment/pay6.png">
                        </a>
                        <a href="http://localhost:8080/pay" id="form-checkout" class="payment__item">
                            <img alt='' src="/images/payment/pay7.png">
                        </a>


                    </div>

                    <h2 class="page-heading">THÔNG TIN LIÊN LẠC</h2>

                    <form id='contact-info' method='post' novalidate="" class="form contact-info">
                        <div class="contact-info__field contact-info__field-mail">
                            <input type='email' name='user-mail' placeholder='Your email' class="form__mail">
                        </div>
                        <div class="contact-info__field contact-info__field-tel">
                            <input type='tel' name='user-tel' placeholder='Phone number' class="form__mail">
                        </div>
                    </form>


                </div>

               

            </div>

        </section>


      


        <div class="clearfix"></div>
        
        
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

        sessionStorage.setItem('totalPrice', totalPrice);
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