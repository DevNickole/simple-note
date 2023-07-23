
const addbtn = document.querySelector('#add')
const notetake = document.querySelector('#notetake')
const notescollection = document.querySelector('.note-list')


addbtn.addEventListener('click',()=>{
  let newNote = document.createElement('div')
  let delbtn = document.createElement('button')
  let donebtn = document.createElement('button')
    if(notetake.value != ''){
        newNote.innerHTML = `<p>${notetake.value}`
        newNote.appendChild(donebtn)
        newNote.appendChild(delbtn)
        

        delbtn.innerText="del"
        donebtn.innerText = "/"
        newNote.classList.add('newnote')
        delbtn.classList.add('delbtn')
        donebtn.classList.add('donebtn')
        notescollection.appendChild(newNote)
        notetake.value = ''
    }
})


notescollection.addEventListener('click', function(e) {
  if(e.target.classList == 'delbtn'){
    let targetbtn = e.target
    let parenttarget = targetbtn.parentNode
    parenttarget.remove()
  }
  if(e.target.classList == 'donebtn'){
    let donebutton = e.target
    donebutton.previousSibling.classList.add('done')
  }
});

// donebtn.addEventListener('click',()=>{
//     let donebutton = document.querySelector('.donebtn')
//     donebutton.previousSibling.classList.add('done')
// })







