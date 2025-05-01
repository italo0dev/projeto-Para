console.log("ola mundo")
document.getElementById('menu-button').addEventListener('click', function() {
    const menuList = document.getElementById('menu-list');
    if (menuList.style.display === 'block') {
        menuList.style.display = 'none';
    } else {
        menuList.style.display = 'block';
    }
})

window.addEventListener('click', function(event) {
    const menuList = document.getElementById('menu-list');
    const menuButton = document.getElementById('menu-button');
    if (!menuButton.contains(event.target) && !menuList.contains(event.target)) {
        menuList.style.display = 'none';
    }
});