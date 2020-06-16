let postArray = [];
let userArray = []
const retrieveSinglePosts = () =>{
  let newPost;
  fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(posts => userArray.push(posts))   
}
const consolePostsList = () => {
  console.log(userArray)
}
const displayThePost = () => {
  const allPosts= document.getElementById('all-posts')
  userArray.map((post, index) => {
    const li = document.createElement('li')
    const text = document.createTextNode(`Number${index}, Name: ${post.name.first}:  ${post.body}, by user: ${post.userId}`)
    li.appendChild(text)
    allPosts.append(li)
  })
}
const retrieveTheUser = () => {
  fetch('https://randomuser.me/api/?results=5')
  .then(res => res.json())
  .then(posts => postArray = posts)
}

const displayTheUsers = () =>{
  console.log(postArray);
}
