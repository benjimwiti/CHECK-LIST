

const addTask = document.getElementById('add-task')
const taskContainer = document.getElementById('task-container')
const inputTask = document.getElementById('input-task')
let storedTasks = localStorage.getItem('storedTasks')
let taskList = storedTasks ?  JSON.parse(storedTasks) : []


let checkButton = document.createElement('button')
checkButton.innerHTML = `<i class="fa-solid fa-hammer"></i>`
checkButton.classList.add('checkTask')

let deleteButton = document.createElement('button')
deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
deleteButton.classList.add('deleteTask')

//EVENTS
checkButton.addEventListener('click' , function() {
    console.log('click')
    checkButton.parentElement.classList.toggle('check')
})
deleteButton.addEventListener('click', function(e) {
    e.target.parentElement.parentElement.remove()
})


if (taskList) {
    for(const storedTask of taskList) {
        let task = document.createElement('div')
        task.classList.add('task')
        
        let li = document.createElement('li')
        li.innerHTML = storedTask
        
        let checkButton = document.createElement('button')
        checkButton.innerHTML = `<i class="fa-solid fa-hammer"></i>`
        checkButton.classList.add('checkTask')
        
        
        let deleteButton = document.createElement('button')
        deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
        deleteButton.classList.add('deleteTask')
        
        checkButton.addEventListener('click' , function() {
            console.log('click')
            checkButton.parentElement.classList.toggle('check')
        })
        deleteButton.addEventListener('click', function(e) {
//            console.log(e.target.childElementCount)
//            if(e.target.childElementCount == 0 ) {
            e.target.parentElement.parentElement.remove()
 //       } else {e.target.parentElement.remove()}
        })
        
        
        task.appendChild(li)
        task.appendChild(checkButton)
        task.appendChild(deleteButton)
        taskContainer.append(task)
        
        console.log(task.children) 
        console.log(storedTask)
        
        
    }
}

//events
addTask.addEventListener ('click' , function() {
    console.log(inputTask.value)
    let task = document.createElement('div')
    task.classList.add('task')
    
    let li = document.createElement('li')
    li.innerHTML = `${inputTask.value}`
    
    task.append(li, checkButton, deleteButton)
    
    if (inputTask.value === '') {
        alert('Please Enter a Task')
    } else {
        taskContainer.appendChild(task)
        taskList.push(inputTask.value)
        localStorage.setItem('storedTasks', JSON.stringify(taskList))
        inputTask.value = ""
    }
    
})

function clearLocal() {
    localStorage.clear()
}


console.log('end')