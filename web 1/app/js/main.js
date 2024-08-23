let navbar = document.querySelector(".navbar");
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active')
}



window.onscroll = () =>{
    navbar.classList.remove('active')
}


AOS.init({
    duration: 1200,
    easing: 'ease-in-out-back'
  });