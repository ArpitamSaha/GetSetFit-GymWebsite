
// scroll reveal 

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.heading, #gsfHome', { origin: 'right' });
ScrollReveal().reveal('.img-gallery, .product, #gsfPro', { origin: 'bottom' });
ScrollReveal().reveal('#gsfElite', { origin: 'left' });
