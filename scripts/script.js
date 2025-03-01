// Theme color change
let bgColors = ['#F6F0F0', '#E8F9FF', '#73C7C7', '#C5BAFF', '#E5D9F2'];
document.getElementById('theme-button').addEventListener('click', function(event){
    const theme = document.getElementById('theme');
    theme.style.backgroundColor = bgColors[Math.floor(Math.random() * bgColors.length)]
})