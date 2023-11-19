<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE HTML>
<html>
<head>
    <!-- Head -->
    <jsp:include page="template/header.jsp"/>
    <style>

        .col-sm-9{
            font-size: 20px;
        }

        .col-sm-9 h2,form{
            color: #357ecd;
            margin-left: 40px;
            padding-top: 12px;
        }

        .item {
            margin-left: 40px;
            padding-top: 12px;
        }

        .col-sm-9 container{
            margin-left: 90px;
        }
    </style>
</head>

<body>
<!-- Nav -->
<jsp:include page="template/nav.jsp"/>
<!-- Main content -->
<section class="container">
    <div class="col-sm-12">
        <div class="movie">
            <h2 class="page-heading">Phim: ${movie.name}</h2>

            <div class="movie__info">
                <div class="col-sm-4 col-md-3 movie-mobile">
                    <div class="movie__images">
                        <img alt='' src="${movie.image}">
                    </div>
                </div>

                <div class="col-sm-8 col-md-9">
                    <a href='/movies?id=${movie.id}' class="movie__title link--huge">${movie.name}</a>

                    <p class="movie__time">${movie.time} phút</p>
                    <p class="movie__option"><strong>Ngôn ngữ: </strong>${movie.language}</p>
                    <p class="movie__option"><strong>Thể loại: </strong>${movie.category}</p>
                    <p class="movie__option"><strong>Ngày chiếu: </strong>${movie.premiere}</p>
                    <p class="movie__option"><strong>Đạo diễn: </strong>${movie.director}</p>
                    <p class="movie__option"><strong>Định dạng: </strong>${movie.format}</p>
                    <p class="movie__option"><strong>Lượt xem: </strong>${movie.view}</p>
                    <p class="movie__option"><strong>Giới hạn tuổi: </strong>${movie.ageLimit == 0 ? 13 : movie.ageLimit}</p>

                    <div class="movie__btns">
                        <a href="/purchase/${movie.id}/${cityId}/${date}" class="watchlist">Mua vé</a>
                    </div>

                </div>
            </div>

            <div class="clearfix"></div>

            <h2 class="page-heading">Chi tiết</h2>

            <p class="movie__describe">${movie.description}</p>
        </div>

    </div>

</section>

<div class="clearfix"></div>

<!-- Footer -->
<jsp:include page="template/footer.jsp"/>
</body>
</html>
