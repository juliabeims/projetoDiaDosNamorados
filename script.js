var n = 0
var btn = document.querySelector('.btn')
var imgLocal = document.querySelector('.photos')
var img = document.createElement('img')
var p = document.createElement('p')
p.setAttribute('class','texto')

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
        imgLocal.appendChild(p)
        var text = document.querySelector('.texto')
        text.innerHTML = `isso é um teste`
    }
   //alert(n)

}
 btn.onclick = clicar



