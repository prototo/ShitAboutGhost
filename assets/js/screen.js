
document.addEventListener('DOMContentLoaded', function() {
    var FIXED_CLASS = 'fixed';

    var banner = document.getElementById('banner');
    var vanity = document.getElementById('vanity');
    var scroll_trigger = banner.getBoundingClientRect().height;

    // reset scroll trigger when the browser is resized
    window.addEventListener('resize', function() {
        scroll_trigger = banner.getBoundingClientRect().height;
    });

    // show and hide the banner according to the scroll trigger
    window.addEventListener('scroll', function() {
        if (window.scrollY > scroll_trigger) {
            vanity.classList.add(FIXED_CLASS);
        } else {
            vanity.classList.remove(FIXED_CLASS);
        }
    });
});
