export let loadingSetup = function () {

    const items = $('#works .columns figure img, #events .list-horizontal img');
    let i = 1;
    items.on('load', function () {
        if (i >= items.length) {
            let modal = $('.modal-loading');
            modal.css('opacity', '0');
            modal.bind('transitionend', () => {
                modal.remove();
            });
        } else
            i++;
    });
}