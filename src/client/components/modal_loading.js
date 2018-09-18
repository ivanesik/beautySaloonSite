export default function () {

    const items = $('#abountCarousel img, #faceNicobaggio img'); //

    /** Remove modal loading view from DOM */
    let removeModal = function() {
        let modal = $('.modal-loading');
        modal.css('opacity', '0');
        modal.bind('transitionend', () => {
            modal.remove();
        });
    };

    /** Check if "items" images is fully loaded */
    let checkLoaded = function() {
        let loaded = true;
        items.each((index, value) => {
            if (!value.complete)
                loaded = false;
        });
        if (loaded)
            removeModal();
    };

    checkLoaded();
    items.on('load', function() {
        checkLoaded();
    });
}