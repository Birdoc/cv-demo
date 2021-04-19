const div = document.querySelector('#app')
let string = `你好 这是一段会动的代码`
let string2 = ``
let i = 0
let step = () => {
  setTimeout(() => {
    string2 += string[i]
    i+=1
    div.innerHTML = string2
    if (i < string.length) {
      step()
    } else {}
  }, 100)
}
step()
