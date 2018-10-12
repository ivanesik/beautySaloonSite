/** Setup Fixed-Header section */
export default (function () {
    $(window).scroll(function () {
        const scroll = $(window).scrollTop();
        const winHeight = $(window).height() - 90;
        if (scroll > winHeight) {
            $('.header-fixed').addClass('show');
        } else {
            $('.header-fixed').removeClass('show');
        }
    });
});

