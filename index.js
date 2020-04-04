function updateText() {
  let text = document.getElementById('text-input').value;

  document.getElementById('text-output').innerText = text;
}

function makeBold(elem) {
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('bold');
}

function makeItalic(elem) {
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('italic');
}

function makeUnderline(elem) {
  if (elem.classList.contains('active')) {
    elem.classList.remove('active');
    document.getElementById('text-output').classList.remove('underline');
  } else {
    elem.classList.add('active');
    document.getElementById('text-output').classList.add('underline');
  }
}

function alignText(elem, alignType) {
  let buttonsList = document.getElementsByClassName('align');
  for (let i = 0; i < buttonsList.length; i++) {
    buttonsList[i].classList.remove('active');
  }
  elem.classList.add('active');
  let output = document.getElementById('text-output');
  output.style.textAlign = alignType;
}
