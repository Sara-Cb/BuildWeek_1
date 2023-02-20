const stars = document.querySelectorAll('.stars img');

stars.forEach(star => {
    star.addEventListener('click', () => {
        const value = star.getAttribute('data-value');

        stars.forEach(otherStar => {
            if (otherStar.getAttribute('data-value') <= value) {
                otherStar.classList.add('active');
            } else {
                otherStar.classList.remove('active');
            }
        });
    });
});