const stars = document.querySelectorAll('.stars img');
const comment = document.querySelector('.commento');

let rating;

stars.forEach(star => {
    star.addEventListener('click', () => {
        rating = star.getAttribute('data-value');

        stars.forEach(otherStar => {
            if (otherStar.getAttribute('data-value') <= rating) {
                otherStar.classList.add('active');
            } else {
                otherStar.classList.remove('active');
            }
        });
    });

    star.addEventListener('mouseover', () => {
        const value = star.getAttribute('data-value');

        stars.forEach(otherStar => {
            if (otherStar.getAttribute('data-value') <= value) {
                otherStar.classList.add('hover');
            } else {
                otherStar.classList.remove('hover');
            }
        });
    });

    star.addEventListener('mouseout', () => {
        stars.forEach(otherStar => {
            otherStar.classList.remove('hover');
        });
    });
});
/* cancella il log del feedback*/


function saveFeedback() {
    const activeStars = document.querySelectorAll('.stars img.active');
    const rating = activeStars.length;
    const feedback = {
        rating: rating,
        comment: comment.value
    };
    comment.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();

        }
    });
    console.log(feedback);
    comment.value = '';
}



const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    saveFeedback();
});