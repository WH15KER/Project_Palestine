let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar a');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header .navbar a');


window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetHeight - 150;
    let id = sec.getAttribute('id');

    if(top => offset && top < offset + height){
      navlinks.forEach(link =>{
        link.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };
  });
}

document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}
