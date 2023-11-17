document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('header');
    var headerItems = document.querySelectorAll('.header-item, .header-item-2');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('header-scroll');
        } else {
            header.classList.remove('header-scroll');
        }
    });

    headerItems.forEach(function(item) {
        item.addEventListener('click', function(event) {
            headerItems.forEach(function(otherItem) {
                otherItem.classList.remove('active');
            });
            item.classList.add('active');
        });
    });
});
