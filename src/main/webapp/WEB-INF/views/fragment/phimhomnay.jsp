 <div class="movie-best">
	                <div class="col-sm-10 col-sm-offset-1 movie-best__rating"> lựa chọn hôm nay </div>

			<div class="">
				<div class="item-container">
    <c:forEach var="today" items="${movieToday}" varStatus="loopStatus">
        <div class="item">
            <div class="product-item">
                <div class="movie-beta__item hi">
                    <img alt='' src="${today.movie.image}" style="height: 200px; width: 500px;">
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
            </div>s
        </div>
    </c:forEach>
</div>
			</div>


			<div class="col-sm-10 col-sm-offset-1 movie-best__check">kiểm tra tất cả các phim đang chiếu</div>
	            </div>