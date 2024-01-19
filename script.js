const links = document.querySelector('.header__links');

links.addEventListener('click', (event) => {
    const target = event.target.parentElement;
    if (!target.classList.contains('header__item')) return;
    
    links.querySelectorAll('.header__item').forEach((item) => {
        item.classList.remove('header__item_active');
    });

    if (!target.classList.contains('header__item_active')) {
        target.classList.add('header__item_active');
    }
});
