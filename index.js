const updateText = () => {
  let text = document.getElementById('text-input').value;
  document.getElementById('text-output').innerText = text;
};
const makeBold = (elem) => {
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('bold');
};

const makeItalic = (elem) => {
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('italic');
};

const makeUnderline = (elem) => {
  if (elem.classList.contains('active')) {
    document.getElementById('text-output').classList.remove('underline');
    elem.classList.remove('active');
  } else {
    elem.classList.add('active');
    document.getElementById('text-output').classList.add('underline');
  }
};

const alignText = (elem, alignType) => {
  let buttonsList = Array.from(document.getElementsByClassName('align'));
  buttonsList.forEach((button) => {
    button.classList.remove('active');
  });

  elem.classList.add('active');
  let output = document.getElementById('text-output');
  output.style.textAlign = alignType;
};
