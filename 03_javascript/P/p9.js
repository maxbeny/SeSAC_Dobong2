let b=document.querySelectorAll('li.done') //[li3, li4, li5]
let a=document.querySelectorAll('li.todo') // [li1, li2]
b.forEach(el =>{
    el.classList.add('todo')
    el.classList.remove('done')
})

a.forEach(el =>{
    el.classList.remove('todo')
    el.classList.add('done')
})