const grilla = document.querySelector(".grilla")
// const parrafo = document.querySelector(".parrafo")
// const span = document.querySelector(".parrafo span")

const parrafoConHijo = document.querySelector("#parrafoConHijo")
const hijoDelParrafo = document.querySelector("span")


// seleccionar al padre de un elemento
// siepre nos trae UN elemento de html
hijoDelParrafo.parentElement
// es equivalente a definir al elemento con querySelector o getElemetById
// hijoDelParrafo.parentElement === parrafoConHijo
//hijoDelParrafo.parentElement.textContent = "Cambiaron mi texto desde js"

// seleccionar los hijos de un elemento
// siempre nos trae una lista 
parrafoConHijo.children
// console.log(parrafoConHijo.children)


// console.log(grilla.children)
// console.log(grilla.children[0])
// // aceder al hermano anterior y posterior
console.log(grilla.children[0].nextElementSibling)
console.log(grilla.children[0].previousElementSibling)


// puedo encadenar selectores
// console.log(grilla.children[5].children[0])
// console.log(hijoDelParrafo.parentElement.parentElement)

// 

// crear un elemento desde javascript
const lista = document.createElement("ul") //entre parentesis esta la etiqueta de lo q queremos crear
const li = document.createElement("li")
// insertarlo en el dom 
// selecciono quien quiero que sea su mapadre

li.textContent = "Este es texto agregado desde JS"
lista.appendChild(li)
grilla.appendChild(lista)

 
