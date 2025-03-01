// Theme color change
let bgColors = ['#F4F7FF', '#F6F0F0', '#E8F9FF', '#73C7C7', '#C5BAFF', '#E5D9F2'];
document.getElementById('theme-button').addEventListener('click', function(event){
    const theme = document.getElementById('theme');
    theme.style.backgroundColor = bgColors[Math.floor(Math.random() * bgColors.length)]
})


// realtime date
function updateDate (){
    const d = new Date()
    document.getElementById('date-calander').innerHTML = d.toDateString();
}
updateDate();
setInterval(updateDate, 60000);


// complete button related script
function completeTask (event) {
    const taskCounter = document.getElementById('task-counter').innerText;
    const numTaskCounter = parseInt(taskCounter);
    const updatedNum = numTaskCounter - 1;
    document.getElementById('task-counter').innerText = updatedNum;
    const point = document.getElementById('point').innerText;
    const numPoint = parseInt(point);
    const updatedPoint = numPoint + 1;
    document.getElementById('point').innerText = updatedPoint;
    event.target.disabled = true;
    event.target.style.backgroundColor = 'gray';
}
const completeBtn = document.querySelectorAll('.complete-btn');
for(i = 0; i < completeBtn.length; i++){
    completeBtn[i].addEventListener('click', completeTask)
}