const dropBtn = document.querySelectorAll('.dropbtn')
const listA = document.querySelectorAll('.list')

let activeBtn = dropBtn[0]
let activeList = listA[0]
let feedbackForm = {0: null,  1: null, 2: null, 3: null, 4: null, 'text1': null, 'text2': null}

for (let i = 0; i < dropBtn.length; i++){
  dropBtn[i].addEventListener('click', function() {
    if (activeBtn == this){
      listA[this.id].classList.toggle('show')
      activeList = listA[this.id]
    } else {
      activeList.classList.remove('show')
      listA[this.id].classList.add('show')
      activeBtn = this
      activeList = listA[this.id]
    }
    listInd()
  }) 
}

document.getElementById('send').onclick = function(){
  feedbackForm['text1'] = document.getElementById('a0').value
  feedbackForm['text2'] = document.getElementById('a1').value
  document.getElementById('a0').value = null
  document.getElementById('a1').value = null
  document.getElementById('f__area').value = JSON.stringify(feedbackForm)
  send()
  for(key in feedbackForm){
    feedbackForm[key] = null
  }
  for(let i = 0; i < 5; i++){
    listA[i].classList.remove("show")
    document.getElementById(i).innerHTML = ''
}
}

function listClick(p,i){
    feedbackForm[i] = p
    document.getElementsByClassName('dropbtn')[i].innerHTML = p
}

function listInd() {
  const EL = document.getElementsByClassName("dropdown__content");
    for (let i = 0; i < EL.length; i++){
      EL[i].addEventListener("click", e => {
        const lang = +e.target.id[1] + 1;
        listClick(lang, i)
    });
    }
};

function send() {
  console.log(1)
  let req = getXmlHttp()
  req.onreadystatechange = function() {
    if (req.readyState == 4) {
      if(req.status == 200) {
        alert("Ответ сервера: "+req.statusText);
      } else {
        alert('error')
      }
  }
}
  req.open('GET', 'json.php', true); 
  req.send(null);
}

function getXmlHttp(){
  var xmlhttp;
  try {
    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
  } catch (e) {
    try {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (E) {
      xmlhttp = false;
    }
  }
  if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
    xmlhttp = new XMLHttpRequest();
  }
  return xmlhttp;
}

