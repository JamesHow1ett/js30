const panels = document.querySelectorAll('.panel');

function toggleOpen () {
  this.classList.toggle('open');
  // setTimeout(() => this.classList.toggle('open-active'), 500)
}

function toggleOpenActive (event) {
  event.propertyName.includes('flex') ? this.classList.toggle('open-active') : null;
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleOpenActive));
