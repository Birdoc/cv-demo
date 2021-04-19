let string = `你好 这是一段会动的代码`
let string2 = ``
let i = 0
let speed = 240
x1.onclick = ()=>{
  speed = 240
}
x2.onclick =()=>{
  speed = 120
}
x3.onclick = ()=>{
  speed = 80
}
let step = () => {
  setTimeout(() => {
    string2 += string[i]
    i+=1
    content.innerHTML = string2
    if (i < string.length) {
      step()
    } else {}
  }, speed)
}
step()

