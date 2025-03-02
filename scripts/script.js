// redirect to blog page
document.getElementById('go').addEventListener('click', function(){
    window.location.href = 'blog.html';
});



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
    alert('Board Updated Successfully');
    const taskCounter = parseInt(document.getElementById('task-counter').innerText) - 1;
    document.getElementById('task-counter').innerText = taskCounter;
    const point = parseInt(document.getElementById('point').innerText) + 1;
    document.getElementById('point').innerText = point;
    event.target.disabled = true;
    event.target.style.backgroundColor = 'gray';
}
const completeBtn = document.querySelectorAll('.complete-btn');
for(i = 0; i < completeBtn.length; i++){
    completeBtn[i].addEventListener('click', completeTask)
}

document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.querySelectorAll('.complete-btn');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            let taskTitle = this.closest('.cards').querySelector('.card-title').innerText;
            let activityBox = document.getElementById('activity-box');
            let time = new Date().toLocaleTimeString('en-US', {hour12: true});
            const defaultMessage = document.getElementById('default-m');
            defaultMessage.style.display = 'none';
            let message = document.createElement('p');
            message.className = 'rounded-lg p-[10px] bg-sky my-2 ml-8 mr-4';
            message.innerText = `You have Complete The Task ${taskTitle} at ${time}`;

            activityBox.appendChild(message);

            const clearBtn = document.getElementById('clear-btn');
            clearBtn.addEventListener('click', function(){
                message.style.display = 'none'
                defaultMessage.style.display = 'block';
            })
        });
    }
});


