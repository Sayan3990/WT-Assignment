window.addEventListener('scroll', () => {
    var scrollpx = window.scrollY;
    var totalH = $(document).height();
    var windowH = $(window).height();
    var totalV = $(document).width();
    var windowV = $(window).width();
    var value;
  
    totalV = totalV - 60;
    value = scrollpx * totalV
    value = value / (totalH - windowH);
    progressbar.style.left = value + 'px';
}  
);