/** Remove loading modal view when page and images is loaded */
export default function () {

    const items = $('#abountCarousel img, #faceNicobaggio img');
    /** Remove modal loading view from DOM */
    let removeModal = function() {
        setTimeout(function() {
            let modal = $('.modal-loading');
            modal.css('opacity', '0');
            modal.bind('transitionend', function() {
                modal.remove();
            });
        }, 1000);
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