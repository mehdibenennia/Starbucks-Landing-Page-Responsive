const drink = document.querySelector('.drink');
const colors = ['#017143', '#eb7495', '#d752b1'];
const menuToggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
const btnDrinks = document.querySelectorAll(".footer > img");

for (let i = 0; i < btnDrinks.length; i++) {
    btnDrinks[i].addEventListener('click', function () {
        drink.scrollLeft = drink.offsetWidth * i;
        document.body.style.setProperty('--drink', colors[i]);
    });
}

document.getElementById("menu").addEventListener('click', function () {
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
});