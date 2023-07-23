function solve() {
  const input = document.querySelector('#input').value.split('.');
  const output = document.querySelector('#output');

  //remove last empty element
  input.pop();

  while (input.length>0) {
    const paragraph = document.createElement('p');
    
    paragraph.textContent = input
      .splice(0, 3)
      .map((text) => text.trim())
      .join('. ') + '.';
    
    output.appendChild(paragraph);
  }
}