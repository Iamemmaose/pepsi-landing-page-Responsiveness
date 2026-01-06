function imageSlider(anything) {
    document.querySelector('.pepsi').src = anything;
}

function changebgcolor(color) {
    document.getElementById('sec').style.background = color;
    document.getElementById('nav').style.background = color;
}


function menubarClick() {
    const MenuBar = document.querySelector('.menu-bar');
    const navigation = document.getElementById('nav');
    const MainContent = document.getElementById('main');
    MenuBar.classList.toggle('active');
    navigation.classList.toggle('active');
    MainContent.classList.toggle('active')
}