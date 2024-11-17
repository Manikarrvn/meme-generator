const generateBtn = document.querySelector('.generate-button')
const memeImage = document.querySelector('.meme-image')

function getMeme() {
  fetch('https://meme-api.com/gimme/wholesomememes')
    .then((res) => res.json())
    .then((data) => {
      const {  url } = data
      memeImage.src = url
    })
}

getMeme()

generateBtn.addEventListener('click', () => {
  getMeme()
})