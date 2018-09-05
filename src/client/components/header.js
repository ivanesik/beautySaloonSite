export let headerSetup = (function () {
    $(window).scroll(function () {
        const scroll = $(window).scrollTop();
        const winHeight = $(window).height();
        if (scroll > winHeight) {
            $('.header-fixed').addClass('show');
        } else {
            $('.header-fixed').removeClass('show');
        }
    });
});

