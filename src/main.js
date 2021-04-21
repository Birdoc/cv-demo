let demo = document.querySelector('#content')
let style = document.querySelector('#style')
let string = `/*你好 这是一段会动的代码
接下来写一段css代码*/
body{
  color:red;
}
`
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
   if(string[i] ==="\n"){
     string2 += "<br>"
   }else if(string[i]===" "){
     string2 += "&nbsp"
   }else{
     string2 += string[i]
   }
   console.log(string2)
   demo.innerHTML = string2
   style.innerHTML = string.substring(0,i)
   if(i<string.length-1){
     i+=1
     step()
   }
  }, speed)
}
step()

