const firstBlock = document.querySelector('.header')
const cont = document.querySelector('.container')


function createModal(){
  let div = {
    tag: 'section',
    atr: {
      id:'myModal',
      class:'modal fade',
      tabindex:'-1',
      role:'dialog',
    }
  }
  const _modal = document.createElement(div.tag)
  for (var item in div.atr) {
    _modal.setAttribute(item, div.atr[item])
  }
  _modal.setAttribute('aria-labelledby', 'exampleModalLabel')
  _modal.setAttribute('aria-hidden', 'true')
  document.querySelector('.wrapper').prepend(_modal)
  _modal.insertAdjacentHTML('beforeend', `
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body">
        Привет,мир.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
  `)
}
$(document).ready(function(){
  createModal()
  $('#myModal').modal('show')
})


document.getElementById('hider').onclick = function() {
  firstBlock.classList.toggle('hidden')
}

document.getElementById('swap').onclick = function() {
  cont.classList.toggle('_swap')
    if (getComputedStyle(cont).display == 'block') {
      let mainList = document.querySelectorAll('.main')
      mainList[1].remove()
      cont.prepend(mainList[1])
    }
}




