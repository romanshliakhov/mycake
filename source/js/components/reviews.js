const filterReviews = [...document?.querySelectorAll('.filter__product')];


filterReviews.map(function(reviews) {
  const reviewsBtn = reviews.querySelector('.sample__btn-reviews');
  const reviewsContent = reviews.querySelector('.application__reviews');

  reviewsBtn.addEventListener('click', () => {
    reviewsBtn.classList.toggle('show');
    reviewsContent.classList.toggle('active');
  })
})


