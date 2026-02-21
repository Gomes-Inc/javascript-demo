// Select elements
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const message = document.getElementById('message');

// Add events to buttons
btn1.addEventListener('click', function() {
    message.textContent = 'You clicked the first button!';
    alert('Button 1 was clicked!');
    var name = prompt('Please enter your name:');
    if (name) {
        message.textContent = `Hello, ${name}! You clicked the first button!`;
        console.log(`User entered name: ${name}`);
    }
});

btn2.addEventListener('click', function() {
    message.textContent = 'You clicked the second button!';
});
