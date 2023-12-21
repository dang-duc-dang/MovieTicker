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
												class="movie__rating">4.5</span>
										</div>
									</div>
								</div>
							</c:forEach>
	
						</div>
						<aside class="col-sm-4 col-md-3">
							
	
								<div
									class="category category--discuss category--count marginb-sm mobile-category ls-cat">
									<h3 class="category__title" style="">  
										Moive Genre<br> <span class="title-edition"></span>
									</h3>
									<ol>
									<div class="sitebar first-banner--left">

							
							    <c:forEach var="cate" items="${category}" varStatus="loopStatus">
								         <c:url var="categoryUrl" value="movieCate">
                                   <c:param name="categoryId" value="${cate.id}" />
                                        </c:url>
										<li><a href="<c:out value='${categoryUrl }'/>" class="category__item">Phim ${cate.name }</a></li>
										
								</c:forEach>
							
							
									</ol>
								</div>
	
								<div
									class="category category--cooming category--count marginb-sm mobile-category rs-cat">
									<h3 class="category__title">
										Upcoming Moive<br>
										<span class="title-edition">
	</span>
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