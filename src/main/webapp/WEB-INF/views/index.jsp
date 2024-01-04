	<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
	<%@ page language="java" contentType="text/html; charset=UTF-8"
		pageEncoding="UTF-8"%>
	<!DOCTYPE HTML>
	<html>
	<head>
	<jsp:include page="template/header.jsp" />
	<style>
	  .search-container {
            display: flex;
            justify-content: center;
            margin-top: 20px;
        }

        .search-box {
            position: relative;
            width: 300px;
        }

        .search-input {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        .search-icon {
            position: absolute;
            top: 50%;
            right: 10px;
            transform: translateY(-50%);
            cursor: pointer;
        }
   </style>
	
	</head>
	
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
	                <div class="col-sm-10 col-sm-offset-1 movie-best__rating"> lựa chọn hôm nay </div>
			<div class="col-sm-12 change--col">
				
    <c:forEach var="today" items="${movieToday}" varStatus="loopStatus">
                <div class="movie-beta__item">
                    <img alt='' src="${today.movie.image}" style="height: 300px; width: 500px;">
                    <span class="best-rate">5.0</span>
                    <ul class="movie-beta__info">
                        <li><span class="best-voted">${today.movie.name }</span></li>
                        <li>
                            <p class="movie__time">${today.movie.time}min</p>
                            <p>${today.movie.director } | ${today.movie.language } | ${today.movie.premiere }</p>
                          
                        </li>
                        <li class="last-block"><a href="/movies?id=${today.movie.id}" class="slide__link">more</a></li>
                    </ul>
                </div>
    </c:forEach>	

			</div>


			<div class="col-sm-10 col-sm-offset-1 movie-best__check">kiểm tra tất cả các phim đang chiếu</div>
	            </div>
	
	
	            <div class="clearfix"></div>
	
				
				<h2 id='target' class="page-heading heading--outcontainer">BÂY GIỜ TRONG Rạp chiếu phim</h2>
	            <div class="search-container">
       <form action="/search" method="get">
    <div class="search-container">
        <div class="search-box">
            <input type="text" name="keyword" class="search-input" placeholder="Search...">
            <button type="submit" class="search-icon">🔍</button>
        </div>
    </div>
</form>
       </div> <br>
				
					

				<div>
					<c:choose>
						<c:when test="${view eq 'home'}">
							<%@ include file="fragment/listSp.jsp"%>
						</c:when>
						<c:when test="${view eq 'movieList'}">
							<%@ include file="fragment/listSp.jsp"%>
						</c:when>

						<c:otherwise>

							<%@ include file="fragment/listSp.jsp"%>
						</c:otherwise>
					</c:choose>

				</div>
				

				
	
				<div class="col-sm-12">
					<h2 class="page-heading">Tin mới nhất</h2>
	
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
