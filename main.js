


let arrayOfAddress = [];

window.onload = function() {
  let fetchNum =1;
  for(let i=0; i<fetchNum; i++){
    getAddresses()
  }
}

const getAddresses = () => {
  fetch('https://randomuser.me/api/')
  .then(res => res.json())
  .then(addresses => arrayOfAddress.push(addresses))
  .catch((error) => {
    console.error('Error: ', error);
  });

  arrayOfAddress.forEach(x => {
    x.results.name.first
    console.log(arrayOfAddress)
    console.log(results.picture.thumbnail)
  })
}


//console.log