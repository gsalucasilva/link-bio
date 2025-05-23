function toggleMode() {
  const body = document.body

  //if(body.classList.contains('light')) {
  //body.classList.remove('light')
  //} else {
  //body.classList.add('light')
  //}

  //Simplificação da condição
  body.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if(body.classList.contains('light')) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/img/light.png")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/img/dark.png")
  }
}