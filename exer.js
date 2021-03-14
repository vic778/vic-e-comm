/* jump to */
const navBtn = document.getElementById('navBtn');
const navLinks = document.querySelector('nav');

navBtn.addEventListener('click', function(e){
    e.preventDefault()
    navLinks.classList.toggle('active');
    navBtn.classList.toggle('open');

});

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});







