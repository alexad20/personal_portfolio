document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.querySelector('.sidebar');
    const navLinks = document.querySelectorAll('.nav a');
    const contentWrapper = document.querySelector('.content_wrapper');
    const skillsLogos = document.querySelectorAll('.logos img');
    const avatar = document.querySelectorAll('.image img');

    function checkSidebarWidth() {
        console.log('Sidebar width:', sidebar.offsetWidth);
        if (sidebar.offsetWidth < 122) {
            navLinks.forEach(link => link.classList.add('hide-text'));
            avatar.forEach(img => img.classList.add('size2'));
        } else {
            navLinks.forEach(link => link.classList.remove('hide-text'));
            avatar.forEach(img => img.classList.remove('size2'));
        }
    }

    function checkScreenWidth() {
        console.log('Screen width:', contentWrapper.offsetWidth);
        if (contentWrapper.offsetWidth < 800) {
            skillsLogos.forEach(img => img.classList.add('size'));
           
        } else {
            skillsLogos.forEach(img => img.classList.remove('size'));
           
        }
    }



    // Initial check
    checkSidebarWidth();
    checkScreenWidth();

    // Check on window resize
    window.addEventListener('resize', checkSidebarWidth);
    window.addEventListener('resize', checkScreenWidth);
});
