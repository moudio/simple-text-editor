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
  Array.from(document.getElementsByClassName('align')).forEach((button) => {
    button.classList.remove('active');
  });
  elem.classList.add('active');
  switch (alignType) {
    case 'left-align':
      document.getElementById('text-output').style.textAlign = 'left';

      break;
    case 'right-align':
      document.getElementById('text-output').style.textAlign = 'right';
      break;
    case 'center':
      document.getElementById('text-output').style.textAlign = 'center';
      break;
    default:
      document.getElementById('text-output').style.textAlign = 'center';

      break;
  }
}
