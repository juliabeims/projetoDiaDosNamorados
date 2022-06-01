var n = 0
var btn = document.querySelector('.advice')
var heart = document.querySelector('.heart')
var heartContent = document.querySelector('.test') 
var imgLocal = document.querySelector('.photos')
var img = document.createElement('img')
var title = document.querySelector('.test-text')

function clicar () {
    if (n<9){
        imgLocal.innerHTML = ""
        n++
        img.setAttribute('src', `${n}.jpg`)
        //alert(n)
        imgLocal.appendChild(img)
    } else{
        n=0
        img.setAttribute('src', ``)
        var p = document.createElement('p')
        p.setAttribute('class','texto')
        imgLocal.appendChild(p)
        var text = document.querySelector('.texto')
        text.innerHTML = `escrever aqui algo fofo para fechar`
    }
   //alert(n)
}
 
btn.onclick = clicar
heart.onclick = clicar
heartContent.onclick = clicar

 


