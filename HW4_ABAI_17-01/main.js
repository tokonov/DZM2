const blocks = document.getElementsByClassName('block')
console.log(blocks)

const block3 = document.getElementById('block3')
// console.log(block3)
block3.classList.add("NewClass")


block3.classList.remove("second")
console.log(block3.classList)


block3.onclick = () =>{
    block3.classList.toggle("active")
}

const block = document.querySelector('.block');
console.log(block)


const button = document.getElementById("button");
const input = document.getElementById('input');

button.onclick = () =>{
    const div = document.createElement('div')
    const deleteButton = document.createElement('button')
    const p = document.createElement('p')

    deleteButton.innerText = 'delete'
    const changeButton = document.createElement("button")
    changeButton.innerText = 'change'

    div.setAttribute('class', 'block')
    p.innerText = input.value


    div.append(p)
    div.append(deleteButton, changeButton)
    document.body.append(div)
    deleteButton.onclick =  () =>{
        div.remove()
    }
    changeButton.onclick = () =>{
        const text = prompt('abai?')
        p.innerText = text

    };
}

