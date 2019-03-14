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
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autolay: true
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
  

  burger.addEventListener('click', () => {  
    // Toggle Nav
    nav.classList.toggle('nav-active');
     // animate navlinks
    navLinks.forEach((link, index) => {
      if(link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +0.5}s`; 
     }
    });
    // burger animation
    burger.classList.toggle('toggle');
    });
    //navbar closes on link click
    // links.forEach(() => {
    //   addEventListener('clik', () => {
    //       console.log('clicked');
    //   nav.classList.toggle('nav-active');
    //   burger.classList.toggle('toggle');
    //   });
    // });

    home.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
      burger.classList.toggle('toggle');
    });
    about.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
    });
    gallery.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
    });
    services.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
    });
    contact.addEventListener('click', () => {
      nav.classList.toggle('nav-active');
    });
  
}

navSlide();