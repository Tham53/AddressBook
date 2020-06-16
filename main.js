window.onload = function() {
  getMultiple();
}
//grabbing persons information 
let arrayOfPersons = [];
const getPerson = () => {
  fetch('https://randomuser.me/api/')
  .then(res => res.json())
  .then(user => user.results.map(person => {
    arrayOfPersons.push(person)
    console.log(person)
    const list = document.getElementById("allUsers")
    //create li
    const pic = document.createElement("img")
    pic.setAttribute('src', '${person.picture.thumbnail}')
    const li = document.createElement("li")
    const text = document.createTextNode('src', '${person.name.first}')
    const button = document.createElement('button')
    //button info
    //adding phone email dob line break
    const Infobutton = document.createElement("More Info")
    const liInfo = document.createElement("li")
    const textInfo = document.createTextNode('${person.phone}, ${person.emergency}')
    const lineBreak = document.createElement('br')
    li.appendChild(pic)
    li.appendChild(text)
    list.appendChild(li)
    list.appendChild(button)
    button.appendChild(Infobutton)
    liInfo.appendChild(textInfo)
    button.addEventListener("click", function(){
      const textInfo = document.createTextNode('${person.phone}, ${person')
      li.appendChild(lineBreak)
      li.appendChild(textInfo)})
    }));
  }



  const getMultiple = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(user => user.results.map(person => {
      arrayOfPersons.push(person)
      console.log(person)
      const list = document.getElementById('allUsers')
      const pic = document.createElement("img")
    }))
  }
