

const addTask = document.getElementById('add-task')
const taskContainer = document.getElementById('task-container')
const inputTask = document.getElementById('input-task')
let storedTasks = localStorage.getItem('storedTasks')
let taskList = storedTasks ?  JSON.parse(storedTasks) : []
let checkButton = document.createElement('button')
checkButton.innerHTML = `<i class="fa-solid fa-hammer"></i>`
checkButton.classList.add('checkTask')

if (taskList) {
    for(const storedTask of taskList) {
        let task = document.createElement('div')
        task.classList.add('task')
        
        let li = document.createElement('li')
        li.innerHTML = storedTask
        
        let checkButton = document.createElement('button')
        checkButton.innerHTML = `<i class = "fa-solid fa-check"></i>`
        checkButton.classList.add('checkTask')
        task.appendChild(checkButton)
        
        let deleteButton = document.createElement('button')
        deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
        deleteButton.classList.add('deleteTask')
        task.append(li, checkButton, deleteButton)
        
        checkButton.addEventListener('click' , function() {
            console.log('click')
            checkButton.parentElement.classList.toggle('check')
        })
        deleteButton.addEventListener('click', function(e) {
            e.target.parentElement.remove()
        })
        taskContainer.append(task)
    }
}

//events
addTask.addEventListener ('click' , function() {
    console.log(inputTask.value)
    let task = document.createElement('div')
    task.classList.add('task')
    
    let li = document.createElement('li')
    li.innerHTML = `${inputTask.value}`
    task.appendChild(li)
    
    let checkButton = document.createElement('button')
    checkButton.innerHTML = `<i class = "fa-solid fa-check"></i>`
    checkButton.classList.add('checkTask')
    task.appendChild(checkButton)
    
    let deleteButton = document.createElement('button')
    deleteButton.innerHTML = `<i class = "fa-solid fa-trash-can"></i>`
    deleteButton.classList.add('deleteTask')
    task.appendChild(deleteButton)
    
    if (inputTask.value === '') {
        alert('Please Enter a Task')
    } else {
        taskContainer.appendChild(task)
        taskList.push(inputTask.value)
        localStorage.setItem('storedTasks', JSON.stringify(taskList))
        inputTask.value = ""
    }
    checkButton.addEventListener('click' , function() {
        console.log('click')
        checkButton.parentElement.classList.toggle('check')
    })
    deleteButton.addEventListener('click', function(e) {
        e.target.parentElement.parentElement.remove()
    })
})

function clearLocal() {
    localStorage.clear()
}

checkButton.addEventListener('click' , function() {
    console.log('click')
    checkButton.parentElement.classList.toggle('check')
})
deleteButton.addEventListener('click', function(e) {
    e.target.parentElement.remove()
})
console.log('end')