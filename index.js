const month = '4$';
const months = '3$';
const yearly = '2$';

const acc = document.getElementsByClassName("accordion");

var slideIndex = 1;
showSlides(slideIndex);


function moreInfo () {

}

function displayMonth() {
    document.getElementById('price').innerHTML = '4$';
    document.getElementById('monthlyPrice').innerHTML = '$95 billed monthly';
}

function displayMonths() {
    document.getElementById('price').innerHTML = '3$';
    document.getElementById('monthlyPrice').innerHTML = '$513 billed every 6 months';
}

function displayYear() {
    document.getElementById('price').innerHTML = '2$';
    document.getElementById('monthlyPrice').innerHTML = '$912 billed yearly';
}


function clicked() {
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
          } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
          } 
        });
      }
    }



    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    }