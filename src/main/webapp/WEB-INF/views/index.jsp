<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE HTML>
<html>
<head>
<jsp:include page="template/header.jsp" />
</head>
<style>
.movie-container {
	margin-left: 100px;
}
</style>
<body>
	<jsp:include page="template/nav.jsp" />
	<!-- Main content -->

<div id="loader-wrapper">
		<div id="loader"></div>

		<div class="loader-section section-left"></div>
		<div class="loader-section section-right"></div>

	</div>



    <div class="bannercontainer">
            <div class="banner">
                <ul>

                    <li data-slotamount="7" class="slide">
                        <img alt='' src="https://amovie.gozha.net/images/slides/next-slide.jpg">

                    </li>

                </ul>
            </div>
        </div>


		<section class="container">
		
		
		      <div class="movie-best">
                <div class="col-sm-10 col-sm-offset-1 movie-best__rating">Today Best choice</div>
                <div class="col-sm-12 change--col">
                    <div class="movie-beta__item ">
                        <img alt='' src="https://amovie.gozha.net/images/movie/movie-sample1.jpg">
                        <span class="best-rate">5.0</span>

                        <ul class="movie-beta__info">
                            <li><span class="best-voted">71 people voted today</span></li>
                            <li>
                                <p class="movie__time">169 min</p>
                                <p>Adventure | Drama | Fantasy </p>
                                <p>38 comments</p>
                            </li>
                            <li class="last-block">
                                <a href="movie-page-left.html" class="slide__link">more</a>
                            </li>
                        </ul>
                    </div>
                    <div class="movie-beta__item second--item">
                        <img alt='' src="https://amovie.gozha.net/images/movie/movie-sample2.jpg">
                        <span class="best-rate">5.0</span>

                        <ul class="movie-beta__info">
                            <li><span class="best-voted">71 people voted today</span></li>
                            <li>
                                <p class="movie__time">169 min</p>
                                <p>Adventure | Drama | Fantasy </p>
                                <p>38 comments</p>
                            </li>
                            <li class="last-block">
                                <a href="movie-page-left.html" class="slide__link">more</a>
                            </li>
                        </ul>
                    </div>
                    <div class="movie-beta__item third--item">
                        <img alt='' src="https://amovie.gozha.net/images/movie/movie-sample3.jpg">
                        <span class="best-rate">5.0</span>

                        <ul class="movie-beta__info">
                            <li><span class="best-voted">71 people voted today</span></li>
                            <li>
                                <p class="movie__time">169 min</p>
                                <p>Adventure | Drama | Fantasy </p>
                                <p>38 comments</p>
                            </li>
                            <li class="last-block">
                                <a href="movie-page-left.html" class="slide__link">more</a>
                            </li>
                        </ul>
                    </div>
                    <div class="movie-beta__item hidden-xs">
                        <img alt='' src="https://amovie.gozha.net/images/movie/movie-sample4.jpg">
                        <span class="best-rate">5.0</span>

                        <ul class="movie-beta__info">
                            <li><span class="best-voted">71 people voted today</span></li>
                            <li>
                                <p class="movie__time">169 min</p>
                                <p>Adventure | Drama | Fantasy </p>
                                <p>38 comments</p>
                            </li>
                            <li class="last-block">
                                <a href="movie-page-left.html" class="slide__link">more</a>
                            </li>
                        </ul>
                    </div>
                    <div class="movie-beta__item hidden-xs hidden-sm">
                        <img alt='' src="https://amovie.gozha.net/images/movie/movie-sample5.jpg">
                        <span class="best-rate">5.0</span>

                        <ul class="movie-beta__info">
                            <li><span class="best-voted">71 people voted today</span></li>
                            <li>
                                <p class="movie__time">169 min</p>
                                <p>Adventure | Drama | Fantasy </p>
                                <p>38 comments</p>
                            </li>
                            <li class="last-block">
                                <a href="movie-page-left.html" class="slide__link">more</a>
                            </li>
                        </ul>
                    </div>
                    <div class="movie-beta__item hidden-xs hidden-sm">
                        <img alt='' src="https://amovie.gozha.net/images/movie/movie-sample6.jpg">
                        <span class="best-rate">5.0</span>

                        <ul class="movie-beta__info">
                            <li><span class="best-voted">71 people voted today</span></li>
                            <li>
                                <p class="movie__time">169 min</p>
                                <p>Adventure | Drama | Fantasy </p>
                                <p>38 comments</p>
                            </li>
                            <li class="last-block">
                                <a href="movie-page-left.html" class="slide__link">more</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-10 col-sm-offset-1 movie-best__check">check all movies now playing</div>
            </div>


            <div class="clearfix"></div>

			
			<h2 id='target' class="page-heading heading--outcontainer">Now
				in the cinema</h2>

			<div class="col-sm-12">
				<div class="row">
					<div class="col-sm-8 col-md-9">
						<!-- Movie variant with time -->
						<c:forEach var="movie" items="${allMovies}" varStatus="loopStatus">
						
						 <div class="movie movie--test movie--test--dark 
						 ${movie.id == 33 || movie.id == 34 || movie.id == 37 || movie.id == 38 || movie.id == 41 || movie.id == 42 || movie.id == 45 || movie.id == 46  ? 'movie--test--left' : 'movie--test--right'}">
							
								<div class="movie__images">
									<a href="/movies?id=${movie.id}" class="movie-beta__link">
										<img alt='' style="width: 205px; height: 205px"
										src="${movie.image}">
									</a>
								</div>

								<div class="movie__info">
									<a href='/movies?id=${movie.id}' class="movie__title">${movie.name}</a>

									<p class="movie__time">${movie.time}min</p>

									<p class="movie__option">
										<a href="#">Sci-Fi</a> | <a href="#">Thriller</a> | <a
											href="#">Drama</a>
									</p>

									<div class="movie__rate">
										<img src="images/star-on.png" alt=""> <img
											src="images/star-on.png" alt=""> <img
											src="images/star-on.png" alt=""> <img
											src="images/star-on.png" alt=""> <img
											src="images/star-on.png" alt=""> <span
											class="movie__rating">4.1</span>
									</div>
								</div>
							</div>
						</c:forEach>

					</div>
					<aside class="col-sm-4 col-md-3">
						<div class="sitebar first-banner--left">

							<div class="promo marginb-sm">
								<div class="promo__head">A.Movie app</div>
								<div class="promo__describe">
									for all smartphones<br> and tablets
								</div>
								<div class="promo__content">
									<ul>
										<li class="store-variant"><a href="#"><img alt=''
												src="images/apple-store.svg"></a></li>
										<li class="store-variant"><a href="#"><img alt=''
												src="images/google-play.svg"></a></li>
										<li class="store-variant"><a href="#"><img alt=''
												src="images/windows-store.svg"></a></li>
									</ul>
								</div>
							</div>

							<div
								class="category category--discuss category--count marginb-sm mobile-category ls-cat">
								<h3 class="category__title">
									the Most <br> <span class="title-edition">discussed
										posts</span>
								</h3>
								<ol>
									<li><a href="#" class="category__item">Gravity</a></li>
									<li><a href="#" class="category__item">The Counselor</a></li>
									<li><a href="#" class="category__item">Bad Grandpa</a></li>
									<li><a href="#" class="category__item">Blue Is the
											Warmest Color</a></li>
									<li><a href="#" class="category__item">Rush</a></li>
									<li><a href="#" class="category__item">Captain
											Phillips</a></li>
									<li><a href="#" class="category__item">Escape Plan</a></li>
									<li><a href="#" class="category__item">Cloudy with a
											Chance of Meatballs 2</a></li>
									<li><a href="#" class="category__item">Prisoners</a></li>
									<li><a href="#" class="category__item">The Fifth
											Estate</a></li>
								</ol>
							</div>

							<div
								class="category category--cooming category--count marginb-sm mobile-category rs-cat">
								<h3 class="category__title">
									coming soon<br>
									<span class="title-edition">movies</span>
								</h3>
								<ol>
									<li><a href="#" class="category__item">Ender's Game</a></li>
									<li><a href="#" class="category__item">About Time</a></li>
									<li><a href="#" class="category__item">Last Vegas</a></li>
									<li><a href="#" class="category__item">Free Birds</a></li>
									<li><a href="#" class="category__item">The Wolf of
											Wall Street</a></li>
									<li><a href="#" class="category__item">The Best Man
											Holiday</a></li>
									<li><a href="#" class="category__item">The Book Thief</a></li>
									<li><a href="#" class="category__item">The Hunger
											Games: Catching Fire</a></li>
									<li><a href="#" class="category__item">Delivery Man</a></li>
									<li><a href="#" class="category__item">Nebraska</a></li>
								</ol>
							</div>
						</div>
					</aside>
				</div>
			</div>

			<div class="col-sm-12">
				<h2 class="page-heading">Latest news</h2>

				<div class="col-sm-4 similar-wrap col--remove">
					<div class="post post--preview post--preview--wide">
						<div class="post__image">
							<img alt='' src="https://amovie.gozha.net/images/client-photo/post-thor.jpg">
							<div class="social social--position social--hide">
								<span class="social__name">Share:</span> <a href='#'
									class="social__variant social--first fa fa-facebook"></a> <a
									href='#' class="social__variant social--second fa fa-twitter"></a>
								<a href='#' class="social__variant social--third fa fa-vk"></a>
							</div>
						</div>
						<p class="post__date">22 October 2013</p>
						<a href="single-page-left.html" class="">30th
							Annual Night Of Stars Presented By The Fashion Group
							International</a> <a href="single-page-left.html"
							class="btn read-more post--btn">read more</a>
					</div>
				</div>
				<div class="col-sm-4 similar-wrap col--remove">
					<div class="post post--preview post--preview--wide">
						<div class="post__image">
							<img alt='' src="https://amovie.gozha.net/images/client-photo/post-annual.jpg">
							<div class="social social--position social--hide">
								<span class="social__name">Share:</span> <a href='#'
									class="social__variant social--first fa fa-facebook"></a> <a
									href='#' class="social__variant social--second fa fa-twitter"></a>
								<a href='#' class="social__variant social--third fa fa-vk"></a>
							</div>
						</div>
						<p class="post__date">22 October 2013</p>
						<a href="single-page-left.html" class="">30th
							Annual Night Of Stars Presented By The Fashion Group
							International</a> <a href="single-page-left.html"
							class="btn read-more post--btn">read more</a>
					</div>
				</div>
				<div class="col-sm-4 similar-wrap col--remove">
					<div class="post post--preview post--preview--wide">
						<div class="post__image">
							<img alt='' src="https://amovie.gozha.net/images/client-photo/post-awards.jpg">
							<div class="social social--position social--hide">
								<span class="social__name">Share:</span> <a href='#'
									class="social__variant social--first fa fa-facebook"></a> <a
									href='#' class="social__variant social--second fa fa-twitter"></a>
								<a href='#' class="social__variant social--third fa fa-vk"></a>
							</div>
						</div>
						<p class="post__date">22 October 2013</p>
						<a href="single-page-left.html" class="">30th
							Annual Night Of Stars Presented By The Fashion Group
							International</a>
							 <a href="single-page-left.html"
							class="btn read-more post--btn">read more</a>
					</div>
				</div>
			</div>
		</section>
	
	<div class="clearfix"></div>

	<jsp:include page="template/footer.jsp" />
</body>
</html>
