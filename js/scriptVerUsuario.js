$(document).ready(function() {
    $('.hamburger').click(function() {
        $('.left_sidebar').css({
            'transform': 'translateX(0)'
        });
    });
    $('.student').click(function() {
        $('.right_sidebar').css({
            'transform': 'translateX(0)'
        });
    });

    $('.close_btn').click(function() {
        $('.right_sidebar').css({
            'transform': 'translateX(150%)'
        })
    })

    $('.close_hamburger_btn').click(function() {
        $('.left_sidebar').css({
            'transform': 'translateX(-150%)'
        })
    })

});

function darkMode() {
    $('body').toggleClass('dark-mode');
    $('.table tr:nth-child(even)').css({
        'color': '#000',
    })
    $('.table tr:nth-child(4)').css({
        'background-color': '#5bb9c0',
        'color': '#fff',
    })

    $('.main_content .main_navbar .dark_mode_icon .bx-sun').click(function() {
        $(this).css('display', 'none');
        $('.main_content .main_navbar .dark_mode_icon .bx-moon').css('display', 'block');
    });

    $('.main_content .main_navbar .dark_mode_icon .bx-moon').click(function() {
        $(this).css('display', 'none');
        $('.main_content .main_navbar .dark_mode_icon .bx-sun').css('display', 'block');
    });
}
// Captura todos los elementos de la lista
const listaItems = document.querySelectorAll('.navbar-nav .nav-item');

// Agrega un evento de clic a cada elemento de la lista
listaItems.forEach(item => {
    item.addEventListener('click', () => {
        // Quita la clase 'active' de todos los elementos de la lista
        listaItems.forEach(item => {
            item.classList.remove('active');
        });

        // Agrega la clase 'active' al elemento clickeado
        item.classList.add('active');
    });
});
