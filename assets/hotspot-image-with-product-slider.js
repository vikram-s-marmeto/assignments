let splide = document.querySelector('.product-cards-slider');

let hotspots = document.querySelectorAll('.hotspot');

hotspots.forEach((hotspot) => {
  hotspot.addEventListener('click', function (e) {
    let i = e.target.dataset.index;

    splide.splide.go(parseInt(i));
  });
});
