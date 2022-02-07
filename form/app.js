let container = document.createElement('div')
container.className = 'container'
document.querySelector('body').prepend(container)
const cont = document.querySelector('.container')

let feedbackForm = {0: null,  1: null, 2: null, 3: null, 4: null, 'text1': null, 'text2': null}

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
      onclick:'myFunction(event)',
      id: j
    }
  }
  const _btn = document.createElement(btn.tag)
  for (item in btn.atr){
    _btn.setAttribute(item, btn.atr[item])
  }
  _btn.innerHTML = ''

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
    href.setAttribute('onclick', 'listClick(event)')
    href.setAttribute('id', j.toString() + i.toString())
    _list[j].append(href)
  }
  
}

function createText() {
  let container = document.createElement('div')
  container.className = 'text__container' 
  cont.append(container)
  
  let btn = {
    tag: 'button',
    atr:{
      class:"btn", 
      type: "button",
      id: 'send',
      onclick:'sendBtn(event)'
    }
  }
  const _btn = document.createElement(btn.tag)
  for (item in btn.atr){
    _btn.setAttribute(item, btn.atr[item])
  }
  _btn.innerHTML = 'Отправить'
  for(let i = 0; i < 2; i++){
    let text = document.createElement('textarea')
    text.className = 'text' 
    text.setAttribute('id', 'a' + i)
    container.append(text)
  }
  container.append(_btn)
}



for (let j = 0; j < 5; j++){
  createList(j)
}

createText()

function feedbackArea(){
  let text = document.createElement('textarea')
    text.className = 'text text__container' 
    text.setAttribute('id', 'f__area')
    container.append(text)
    cont.append(text)
}


function myFunction(event) {
  document.getElementById(event.target.id)
  let list = document.querySelectorAll('.list')
  list[event.target.id].classList.toggle("show")
  for(let i = 0; i < 5; i++){
    if(i != event.target.id){
      list[i].classList.remove("show")
    }
  }
}

feedbackArea()
function sendBtn(event){
  feedbackForm['text1'] = document.getElementById('a0').value
  feedbackForm['text2'] = document.getElementById('a1').value
  document.getElementById('a0').value = null
  document.getElementById('a1').value = null
  document.getElementById('f__area').value = JSON.stringify(feedbackForm)
  for(key in feedbackForm){
    feedbackForm[key] = null
  }
  let list = document.querySelectorAll('.list')
  for(let i = 0; i < 5; i++){
      list[i].classList.remove("show")
      document.getElementById(i).innerHTML = ''
  }
}

function listClick(event){
  feedbackForm[parseInt(event.target.id[0])] = (parseInt(event.target.id[1]) + 1).toString()
  document.getElementById(event.target.id[0]).innerHTML = (parseInt(event.target.id[1]) + 1).toString()
  let list = document.querySelectorAll('.list')
  list[parseInt(event.target.id[0])].classList.remove("show")
}