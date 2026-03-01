const btn1 = document.getElementById('btn1');

btn1.addEventListener('click', function() {
    textBox.textContent = 'perdeu!';
});

btn2.addEventListener('click', function() {
    textBox.textContent = 'Ganhou!';
});

btn3.addEventListener('click', function() {
    textBox.textContent = 'Eu avisei!';
    console.log('Cuidado com o Gomes!');
    console.error('Cuidado com o Gomes!');
    console.warn('Cuidado com o Gomes!');
    alert('Cuidado com o Gomes!');
});

// adicionar evento para mudar titulo, subtitulo e texto do paragrafo
btn4.addEventListener('click', function() {
    titulo.textContent = 'Verdades do Gomes';
    textBox.textContent = 'Duvido';
    subtitulo.textContent = 'mudar!';
});

// adicionar evento no botao5 para quando clicar, mostrar um prompt (alert()) com o texto digitado
btn5.addEventListener('click', function() {
    var input = inputText.value;
    console.log(input);
    alert('Salvo!');
});
  