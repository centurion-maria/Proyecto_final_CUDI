var slideIndex = 1;
var x = document.getElementsByClassName("slide");
var y = document.getElementsByClassName("dot");
showSlide(slideIndex);

function plusDivs(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    var i;
    if (n > x.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      y[i].style.background = "transparent";
    }
    x[slideIndex-1].style.display = "block";  
    y[slideIndex-1].style.background = "white";  
}

function currentDiv(n) {
    showSlide(slideIndex = n);
}

autoSlide();
  function autoSlide() {
    var i;
    for (i = 0; i < x.length; i++) {
     x[i].style.display = "none"; 
     y[i].style.background = "transparent";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    y[slideIndex-1].style.background = "white";
    setTimeout(autoSlide, 3000);
}