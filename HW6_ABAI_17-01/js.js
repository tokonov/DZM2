const arr1 = ['abai1',1]
const arr2 = ['abai2',2]
const arr3 = ['abai3',3]
const arr4 = ['abai4',4]
const arr5 = ['abai5',5]

const arrAll = [...arr1,arr2,arr3,arr4,arr5]
console.log(arrAll)

const obj = {
    key1:1,
    key2:2,
    key3:3,
    key4:4,
    key5:5,
}
const obj2 = {
    ...obj,
    key6: 6,
    key7: 7,
    key8: 8,
}
console.log(obj2)

const input = document.getElementById('input');
const button = document.getElementById('button');
const container = document.getElementsByClassName('container')
button.onclick = () =>{
    const div = document.createElement('div')
    div.setAttribute('class', 'mainDiv')
    const childDiv = document.createElement('div')
    childDiv.setAttribute('class', 'childDiv')

    const p = document.createElement("p")
    p.setAttribute('class' , 'p_inner')

    const p2 = document.createElement('p')
    p2.setAttribute('class' , ' p2')
    p2.innerText = 'hello, '

    const deleteButton = document.createElement('button')
    deleteButton.innerText = 'delete'
    deleteButton.setAttribute('class', 'delete')



    p.innerText = input.value

    div.append(childDiv,deleteButton)
    childDiv.append(p2,p)
    document.body.append(div)
    deleteButton.onclick =  () =>{
        div.remove()
    }
}

