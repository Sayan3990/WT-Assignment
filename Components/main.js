let progressbar = document.getElementById("progressbar");
window.addEventListener('scroll', () => {
    var scrollpx = window.scrollY;
    var totalH = $(document).height();
    var windowH = $(window).height();
    var totalV = $(document).width();
    let value;
        value = scrollpx * totalV;
        value = value / (totalH - windowH);
        progressbar.style.width = value + 'px';
}
);