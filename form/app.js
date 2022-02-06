let container = document.createElement('div')
container.className = 'container'
document.querySelector('body').prepend(container)
const cont = document.querySelector('.container')



function createList(j) {
  let dropDown = document.createElement('div')
  dropDown.className = 'dropdown' 
  cont.append(dropDown)
  const drop = document.querySelectorAll('.dropdown')

  let btn = {
    tag: 'button',
    atr:{
      class:"btn  dropbtn", 
      type: "button",
      onclick:'myFunction()'
    }
  }
  const _btn = document.createElement(btn.tag)
  for (item in btn.atr){
    _btn.setAttribute(item, btn.atr[item])
  }
  _btn.setAttribute('data-toggle', 'dropdown')
  _btn.setAttribute('aria-haspopup', 'true')
  _btn.setAttribute('aria-expanded', 'false')
  drop[j].append(_btn)
  
  let list = document.createElement('div')
  list.className = 'list dropdown__content'
  list.id = 'myDropdown'
  drop[j].append(list)
  const _list = document.querySelectorAll('.list')
  for (let i = 0; i < 5; i++){
    let href = document.createElement('a')
    href.className = 'list__item'
    href.innerHTML = i + 1
    _list[j].append(href)
  }
}

for (let j = 0; j < 5; j++){
  createList(j)
}


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}