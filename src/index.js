const init = () => {
  const inputForm = document.querySelector('form');
  inputForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const input = document.querySelector('input#searchByID');
    console.log(input.value);

fetch (`http://localhost:3000/movies/${input.value}`)
.then(resp => resp.json())
.then(data => {
  console.log(data)
  
  let head = document.querySelector('h4')
  let para = document.querySelector('p')
  head.innerText = data.title
  para.innerText = data.summary


})
})
}












document.addEventListener('DOMContentLoaded', init);