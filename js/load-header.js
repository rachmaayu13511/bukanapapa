// Load Header dari file header.html
function loadHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            // Insert header ke dalam div dengan id="header-placeholder"
            document.getElementById('header-placeholder').innerHTML = data;
            
            // Inisialisasi menu setelah header dimuat
            initializeMenu();
        })
        .catch(error => {
            console.error('Error loading header:', error);
        });
}

// Inisialisasi menu mobile dan highlight active page
function initializeMenu() {
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const navMenu = document.querySelector('.navmenu');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('mobile-nav-active');
            this.classList.toggle('bi-list');
            this.classList.toggle('bi-x');
        });
    }

    // Dropdown toggle untuk mobile
    const dropdowns = document.querySelectorAll('.dropdown > a');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth < 1200) {
                e.preventDefault();
                this.parentElement.classList.toggle('dropdown-active');
            }
        });
    });

    // Highlight menu aktif berdasarkan halaman saat ini
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const menuLinks = document.querySelectorAll('.navmenu a');
    menuLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || href === `./${currentPage}`) {
            link.classList.add('active');
        }
    });

    // Close mobile menu ketika link diklik
    const navLinks = document.querySelectorAll('.navmenu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 1200) {
                navMenu.classList.remove('mobile-nav-active');
                mobileToggle.classList.remove('bi-x');
                mobileToggle.classList.add('bi-list');
            }
        });
    });
}

// Jalankan saat halaman selesai dimuat
document.addEventListener('DOMContentLoaded', loadHeader);