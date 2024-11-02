// Sélectionne le bouton burger et le menu
const burgerIcon = document.getElementById('burger-icon');
const menuLinks = document.getElementById('menu-links');

// Ajoute un événement de clic pour activer/désactiver le menu
burgerIcon.addEventListener('click', () => {
    menuLinks.classList.toggle('active'); // Montre/cache le menu
    burgerIcon.classList.toggle('active'); // Anime le bouton burger
});
