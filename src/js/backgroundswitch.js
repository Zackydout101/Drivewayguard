 var slideIndex = 0;
  var slides = [
    "https://picsum.photos/id/237/200/300",
    "https://picsum.photos/id/237/200/300",
    "https://picsum.photos/id/237/200/300"
  ];

  function showSlides() {
    var currentSlide = slideIndex % slides.length;
    var currentSlideUrl = slides[currentSlide];
    var slideshowContainer = document.querySelector(".heading");

    slideshowContainer.style.backgroundImage = "url(" + currentSlideUrl + ")";
    slideIndex++;
  }

  showSlides();
  setInterval(showSlides, 2000);