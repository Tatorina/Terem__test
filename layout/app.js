const firstBlock = document.querySelector('.header');
const cont = document.querySelector('.container');

window.onclick = function() {
  document.querySelector('.modal').style.display = 'none';
}

document.getElementById('hider').onclick = function() {
  firstBlock.classList.toggle('hidden');
}

document.getElementById('swap').onclick = function() {
  cont.classList.toggle('_swap');
    if (getComputedStyle(cont).display == 'block') {
      let mainList = document.querySelectorAll('.main');
      mainList[1].remove();
      cont.prepend(mainList[1]);
    }
}




