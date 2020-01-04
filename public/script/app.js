const togglerBtn = document.querySelector('.toggler');
const nav = document.querySelector('.nav');

togglerBtn.addEventListener('click', toggle);

function toggle(e) {
  if (e.target.checked) {
    nav.classList.add('slide-down');
  } else {
    nav.classList.remove('slide-down');
  }
}
