//$(function () {
//    $('.responsive').slick({
//        dots: true,
//        infinite: false,
//        speed: 300,
//        slidesToShow: 6,
//        slidesToScroll: 4,
//        responsive: [
//            {
//                breakpoint: 1024,
//                settings: {
//                    slidesToShow: 3,
//                    slidesToScroll: 3,
//                    infinite: true,
//                    dots: true
//                }
//            },
//            {
//                breakpoint: 600,
//                settings: {
//                    slidesToShow: 2,
//                    slidesToScroll: 2
//                }
//            },
//            {
//                breakpoint: 480,
//                settings: {
//                    slidesToShow: 1,
//                    slidesToScroll: 1
//                }
//            }
//        ]
//    });

//});

let timeout
//let squareArray = [];
//for (i = 1; i < 11; i++) {
//    squareArray.push(`.square${i}`);
//}

//$(squareArray).each(
//    $(this).hover(function () {

//        timeout = setTimeout(function () {
//            $('.square').css('width', '400px');
//            $('.square').css('transform', 'scale(1.5)');
//            $('.square .cover').css('width', '300px');
//            $('.square .cover').css('display', 'none');
//            $('.square').prepend('<iframe width="560" height="315" src="https://www.youtube.com/embed/V30EDfahh5A?&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

//        }, 100);
//    }, function () {
//        clearTimeout(timeout);
//        $('.square').css('width', '176px');
//        $('.square').css('transform', 'scale(1)');
//        $('.square .cover').css('width', '150px');
//        $('.square .cover').css('display', 'inline');
//        $('.square iframe').remove();

//    })
//);
$('.square').hover(function () {

    timeout = setTimeout(function () {
        $('.square').css('width', '400px');
        $('.square').css('transform', 'scale(1.5)');
        $('.square .cover').css('width', '300px');
        $('.square .cover').css('display', 'none');
        $('.square').prepend('<iframe width="560" height="315" src="https://www.youtube.com/embed/V30EDfahh5A?&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');

    }, 100);
}, function () {
    clearTimeout(timeout);
    $('.square').css('width', '176px');
    $('.square').css('transform', 'scale(1)');
    $('.square .cover').css('width', '150px');
    $('.square .cover').css('display', 'inline');
    $('.square iframe').remove();

})

$(function () {




    $('#material-symbols-forward').attr('aria-disabled') == true ? $('#material-symbols-forward').hide() : $('#material-symbols-forward').show();
    $('.material-symbols-outlined').click(function () {
        if ($('.material-symbols-outlined').attr('aria-disabled') == true) { $('.material-symbols-outlined').css('opacity', '0'); }
    })
    let i = 1;
    $([$('.responsive1'), $('.responsive2'), $('.responsive3')]).each(function () {
        $(this).slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 4,
            prevArrow: `#material-symbols-prev${i}`,
            nextArrow: `#material-symbols-forward${i}`,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        i++;
    });



    //the validation functions

    $('[placeholder="Please Enter Email Address"]').focusout(function () {

        let form = document.getElementById('form');
        let email = document.getElementById('email').value;
        let text = document.getElementById('text');
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (email.match(pattern)) {
            $('.alert').css('display', 'none');
            form.classList.add('valid');
            form.classList.remove('invalid');
            text.innerHTML = "your email address is valid";
            text.style.color = '#4caf50';
        } else {
            $('.alert').css('display', 'block');
            form.classList.remove('valid');
            form.classList.add('invalid');
            text.innerHTML = "please enter valid email address";
            text.style.color = '#f44336';
        }
        if (email == '') {
            form.classList.remove('valid');
            form.classList.remove('invalid');
            text.innerHTML = '';
        }
    });






});