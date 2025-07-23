// --- SCRIPT PARA ÍCONOS LUCIDE ---
lucide.createIcons();

// --- SCRIPT PARA NAVEGACIÓN INTERACTIVA ---
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const pageSections = document.querySelectorAll('.page-section');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuBtn = document.getElementById('menu-btn');
    const toggleHeladosBtn = document.getElementById('toggle-helados-btn');
    const heladosMenu = document.getElementById('helados-menu');
    
    // --- LÓGICA PARA MODAL DE PRODUCTOS ---
    const productModal = document.getElementById('product-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalPrice = document.getElementById('modal-price');
    const productItems = document.querySelectorAll('.product-item');

    productItems.forEach(item => {
        item.addEventListener('click', () => {
            modalImg.src = item.dataset.img;
            modalImg.onerror = () => { modalImg.src = `https://placehold.co/200x200/F87171/FFFFFF?text=${item.dataset.title}`; };
            modalTitle.textContent = item.dataset.title;
            modalDesc.textContent = item.dataset.desc;
            modalPrice.textContent = item.dataset.price;
            productModal.classList.remove('hidden');
            lucide.createIcons(); // Vuelve a crear el ícono de cierre en el modal
        });
    });

    const closeModal = () => {
        productModal.classList.add('hidden');
    };

    modalCloseBtn.addEventListener('click', closeModal);
    productModal.addEventListener('click', (event) => {
        // Cierra el modal solo si se hace clic en el fondo oscuro
        if (event.target === productModal) {
            closeModal();
        }
    });


    // --- LÓGICA PARA NAVEGACIÓN Y MENÚS ---
    const showSection = (targetId) => {
        pageSections.forEach(section => {
            if (section.id === targetId) {
                section.classList.remove('hidden');
            } else if(section.id !== 'contacto') {
               section.classList.add('hidden');
            }
        });
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href').substring(1);
            
            if (targetId !== 'contacto') {
                event.preventDefault();
                showSection(targetId);
            }

            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }

            if (!heladosMenu.classList.contains('hidden')) {
                heladosMenu.classList.add('hidden');
                toggleHeladosBtn.textContent = 'Ver Menú de Helados';
            }
        });
    });

    showSection('inicio');

    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    toggleHeladosBtn.addEventListener('click', () => {
        heladosMenu.classList.toggle('hidden');
        toggleHeladosBtn.textContent = heladosMenu.classList.contains('hidden') ? 'Ver Menú de Helados' : 'Ocultar Menú de Helados';
    });
});
