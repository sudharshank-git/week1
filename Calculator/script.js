var c = console.log
var num_item=document.querySelectorAll(".numpad-item")
var operators=document.querySelectorAll(".operators-item")
let current_num=""
let last_num=""
var inner_text =document.querySelector("h2")

for(i=0;i<num_item.length;i++){
    document.querySelectorAll(".numpad-item")[i].addEventListener("click",function (event){
    var currentnumber=event.target.textContent
    check(currentnumber)
    this.classList.add("animation")
    setTimeout(()=>{
        this.classList.remove("animation")
    },100)
})
}

for(i=0;i<operators.length;i++){
    document.querySelectorAll(".operators-item")[i].addEventListener("click",function (event){
        var currentoperator=event.target.textContent
        check(currentoperator)
        this.classList.add("animation")
        setTimeout(()=>{
            this.classList.remove("animation")
        },100)
    })
}



function check(cur_digit){ 
    c(cur_digit === "⏱")
    if(cur_digit === "⌫"){
        current_num = inner_text.innerText = current_num.slice(0,-1)
    }else if(cur_digit === "^²"){
        if(parseInt(current_num)){
        last_num = current_num = inner_text.innerText = current_num*current_num

        }else{
            inner_text.innerText = "Value Error"

        }
    }else if(cur_digit === "C"){
        c(current_num.length > 0)
        if (current_num.length > 0){
            last_num = current_num || ""
            current_num =""
        }else if (current_num.length = 0){
            c(last_num)
            last_num = last_num
        }
        inner_text.innerText = current_num
    }else if (cur_digit === "⏱"){
        inner_text.innerText = last_num
        current_num = last_num
    }else{
        
        if (cur_digit === "="){
            c(cur_digit)
            calculated_value = eval(current_num)
            last_num = current_num = inner_text.innerText = `${calculated_value}`||""
            c(last_num)
            c(current_num)
        }else{
            current_num += inner_text.innerText = cur_digit
            inner_text.innerText = current_num
        }
    }
    
    
}
