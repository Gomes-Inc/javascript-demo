// Select elements
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const message = document.getElementById('message');

// Add events to buttons
btn1.addEventListener('click', function() {
    message.textContent = 'You clicked the first button!';
});

btn2.addEventListener('click', function() {
    message.textContent = 'You clicked the second button!';
});
