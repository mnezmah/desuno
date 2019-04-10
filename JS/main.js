//slick carousel
$('.responsive').slick({
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
        arrows: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: true
      }
    }
  ]
});

// responsive-menu

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.main');
  const navLinks = document.querySelectorAll('.main li');
  const home = document.querySelector('.li-home');
  const about = document.querySelector('.li-about');
  const gallery = document.querySelector('.li-gallery');
  const services = document.querySelector('.li-services');
  const contact = document.querySelector('.li-contact');
  const links = [home, about, gallery, services, contact];

  navLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      burger.classList.toggle('toggle');
      nav.classList.toggle('nav-active');
      navLinks.forEach(setStyleLink);
    });
  });

  burger.addEventListener('click', () => {  
    // Toggle Nav
    nav.classList.toggle('nav-active');
     // animate navlinks
     navLinks.forEach(setStyleLink);
    //burger animation
    burger.classList.toggle('toggle');
  });
}

    function setStyleLink(el, index) {
      if(el.style.animation) {
        el.style.animation = ''
      } else {
        el.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +0.5}s`; 
     }
    }
    

navSlide();