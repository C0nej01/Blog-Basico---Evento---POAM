function toggleMenu() {
    const navLinks = document.querySelector('header ul');
    
   
    if (navLinks.classList.contains('hidden')) {
        navLinks.classList.remove('hidden');
        navLinks.classList.add('active');
    } else {

        navLinks.classList.remove('active');
        navLinks.classList.add('hidden');
    }
}
