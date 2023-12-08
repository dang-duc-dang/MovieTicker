<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>


  <section class="container">
            <div class="order-container">
                <div class="order">
                    <img class="order__images" alt='' src="images/tickets.png">
                    <p class="order__title">Book a ticket <br><span class="order__descript">and have fun movie
                            time</span></p>
                    <div class="order__control">
                        <a href="" class="order__control-btn active">Purchase</a>
                        <a href="book3-reserve.html" class="order__control-btn">Reserve</a>
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
                        <li class="book-result__item">Tickets: <span class="book-result__count booking-ticket">3</span>
                        </li>
                        <li class="book-result__item">One item price: <span
                                class="book-result__count booking-price">$20</span></li>
                        <li class="book-result__item">Total: <span class="book-result__count booking-cost">$60</span>
                        </li>
                    </ul>

                    <h2 class="page-heading">Choose payment method</h2>
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
                        <a href="#" class="payment__item">
                            <img alt='' src="/images/payment/pay7.png">
                        </a>


                    </div>

                    <h2 class="page-heading">Contact information</h2>

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