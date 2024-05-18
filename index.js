

const addTask = document.getElementById('add-task')
const taskContainer = document.getElementById('task-container')
const inputTask = document.getElementById('input-task')
let storedTasks = localStorage.getItem('storedTasks')
let taskList = storedTasks ?  JSON.parse(storedTasks) : []

//PROTO-TYPE FUNCTIONALITY
let protoTypeEl = document.getElementById('proto-type-el')
const protoTypeElements=protoTypeEl.children
console.log(check2Function)  //check your console
console.log(delete2Function) //check your console
check2Function(protoTypeElements[1])

delete2Function(protoTypeElements[2])


//RE-USABLE BUTTON-FUNCTIONALITY
function check2Function(button) {  
    return button.addEventListener('click' , function() {
        console.log('click')
        button.parentElement.classList.toggle('check')
    })
}

function delete2Function(button) {
    return button.addEventListener('click', function(e) {
        console.log(e.target.childElementCount)
        if(e.target.childElementCount == 0 ) {
        e.target.parentElement.parentElement.remove()
   } else {e.target.parentElement.remove()}
    })
}


    




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
        
    //     function checkFunction() {
    //      checkButton.addEventListener('click' , function() {
    //          console.log('click')
    //          checkButton.parentElement.classList.toggle('check')
    //      })
    //  }
    //  checkFunction()
    check2Function(checkButton)
        // function deleteFunction() {
        //  deleteButton.addEventListener('click', function(e) {
        //      console.log(e.target.childElementCount)
        //      if(e.target.childElementCount == 0 ) {
        //      e.target.parentElement.parentElement.remove()
        // } else {e.target.parentElement.remove()}
        //  })
        //  }
        // deleteFunction()
        delete2Function(deleteButton)
        
      
        
        
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
    console.log('adding-task')
    console.log(inputTask.value)
    
    let task = document.createElement('div')
    task.classList.add('task')
    
    let li = document.createElement('li')
    li.innerHTML = `${inputTask.value}`

    let checkButton = document.createElement('button')
    checkButton.innerHTML = `<i class="fa-solid fa-hammer"></i>`
    checkButton.classList.add('checkTask')

    let deleteButton = document.createElement('button')
    deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
    deleteButton.classList.add('deleteTask')

    task.append(li, checkButton, deleteButton)
    //EVENTS
    checkButton.addEventListener('click' , function() {
        console.log('click')
        checkButton.parentElement.classList.toggle('check')
    })
    deleteButton.addEventListener('click', function(e) {
        console.log(e.target.childElementCount)
        if(e.target.childElementCount == 0 ) {
        e.target.parentElement.parentElement.remove()
    } else {e.target.parentElement.remove()}
    })
    
    
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