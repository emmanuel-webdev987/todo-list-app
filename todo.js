const todoList=document.getElementById("todoList")
const textArea=document.getElementById("textArea")
const button=document.getElementById("button")
const message=document.getElementById("message")
let text=""
console.log(textArea, button, todoList, message);
textArea.addEventListener("input", function(){
    text=textArea.value
})

button.addEventListener("click",function(){

    if(text.trim()===""){
        message.textContent="Please Enter A Task"
        message.style.color="red"
        return;
    }

    message.textContent=""

    const todoItem=document.createElement("li")
    const date=document.createElement("div")
    const textField=document.createElement("div")
    const status=document.createElement("div")
    const checkbox=document.createElement("input")

    const dateTime=new Date()

    date.innerText=`${dateTime.getDate()}/${dateTime.getMonth()+1}/${dateTime.getFullYear()}`

    checkbox.addEventListener("change", function(){
        if(checkbox.checked){
            status.innerText="Completed"
        }
        else{
            status.innerText="Not Started"
        }
    })

    textField.innerText=text
    status.innerText="Not Started"
    checkbox.type="checkbox"

    todoItem.appendChild(date)
    todoItem.appendChild(textField)
    todoItem.appendChild(status)
    todoItem.appendChild(checkbox)

    todoList.appendChild(todoItem)

    textArea.value=""
    text=""
})
