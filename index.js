let menuIcon = document.querySelector('#menu_icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll =() => {
    sections.forEach(sec => {
        let top = window.screenY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);
    
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration:2000,
    delay: 250
});


ScrollReveal().reveal('.home_content ,  .heading', { origin: 'top'});
ScrollReveal().reveal('.home_img ,  .services_container,  .portfolio_box,  .event_box,  .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home_content h1,  .about_img', { origin: 'left'});
ScrollReveal().reveal('.home_content p,  .about_content', { origin: 'right'});



const typed = new Typed('.multiple-text', {
    strings: ["Frontend Developer", "Student" , "Intern"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay:1000,
    loop: true
});