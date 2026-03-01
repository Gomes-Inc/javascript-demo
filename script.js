// Select elements
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const message = document.getElementById('message');
const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');

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
    alert('Este campo recebe apenas valores em anos!')
    var idade = prompt('Por favor, entre com sua idade: ');
    if (idade > 0 && idade < 120 ) {
        message.textContent = `${idade} anos de idade!`;
        console.log(`Usuário tem : ${idade} anos de idade`)
    } else if (idade >= 120){
        message.textContent = `Ninguém vive tanto!`;
    } else {
        message.textContent = `Digite um valor válido!`;
    }
});

btn3.addEventListener('click', function() {
    message.textContent = 'You clicked the second button!';
    alert('Button 3 was clicked!')
});

btn4.addEventListener('click', function() {
    message.textContent = 'You clicked the second button!';
    alert('Button 4 was clicked!')
    var name2 = prompt('Por favor, entre com seu nome: ');
    if (name2) {
        message.textContent = `Olá, ${name2}! Você clicou no botão da felicidade!`;
        console.log(`Usuário entrou com o nome: ${name2}`)
    }
    
});


btn5.addEventListener('click', function() {
    var valor1 = Number(number1.value);
    var valor2 = Number(number2.value);
    var soma = valor1 + valor2;

    alert('A soma dos valores é ' + soma)

});
