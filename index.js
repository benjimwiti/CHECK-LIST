

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
function check2Function(specificButton) {  
    return specificButton.addEventListener('click' , function() {
        console.log('click')
        specificButton.parentElement.classList.toggle('check')
    })
}

function delete2Function(specificButton) {
    return specificButton.addEventListener('click', function(e) {
        console.log(e.target.childElementCount)
        if(e.target.childElementCount == 0 ) {
        e.target.parentElement.parentElement.remove()
   } else {e.target.parentElement.remove()}
    })
}

function createTask (x) { 
        let task = document.createElement('div')
        task.classList.add('task')
        
        let li = document.createElement('li')
        li.innerHTML = x
        
        let checkButton = document.createElement('button')
        checkButton.innerHTML = `<i class="fa-solid fa-hammer"></i>`
        checkButton.classList.add('checkTask')
        
        
        let deleteButton = document.createElement('button')
        deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
        deleteButton.classList.add('deleteTask')

        taskBlock = [task,li, checkButton, deleteButton]
        return taskBlock
}




localStoragefunction()
function localStoragefunction() {
if (taskList) {
    for(const storedTask of taskList) {
        x = storedTask
        // let task = document.createElement('div')
        // task.classList.add('task')
        
        // let li = document.createElement('li')
        // li.innerHTML = storedTask
        
        // let checkButton = document.createElement('button')
        // checkButton.innerHTML = `<i class="fa-solid fa-hammer"></i>`
        // checkButton.classList.add('checkTask')
        
        
        // let deleteButton = document.createElement('button')
        // deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
        // deleteButton.classList.add('deleteTask')
        spreadTaskBlockLocal = createTask(x)
        console.log(spreadTaskBlockLocal)
        
    //     function checkFunction() {
    //      checkButton.addEventListener('click' , function() {
    //          console.log('click')
    //          checkButton.parentElement.classList.toggle('check')
    //      })
    //  }
    //  checkFunction()
    check2Function(spreadTaskBlockLocal[2])
        // function deleteFunction() {
        //  deleteButton.addEventListener('click', function(e) {
        //      console.log(e.target.childElementCount)
        //      if(e.target.childElementCount == 0 ) {
        //      e.target.parentElement.parentElement.remove()
        // } else {e.target.parentElement.remove()}
        //  })
        //  }
        // deleteFunction()
        delete2Function(spreadTaskBlockLocal[3])
        
      
        
        
        spreadTaskBlockLocal[0].append(spreadTaskBlockLocal[1], spreadTaskBlockLocal[2], spreadTaskBlockLocal[3])
        taskContainer.append(spreadTaskBlockLocal[0])
        
       // console.log(task.children) 
        console.log(storedTask)
        
        
    }
}
}


//events
addTask.addEventListener ('click' , function() {
    console.log('adding-task')
    console.log(inputTask.value)

    
    // let task = document.createElement('div')
    // task.classList.add('task')
    
    // let li = document.createElement('li')
    // li.innerHTML = `${inputTask.value}`

    // let checkButton = document.createElement('button')
    // checkButton.innerHTML = `<i class="fa-solid fa-hammer"></i>`
    // checkButton.classList.add('checkTask')

    // let deleteButton = document.createElement('button')
    // deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
    // deleteButton.classList.add('deleteTask')
    liveSpreadBox = createTask(inputTask.value)

    liveSpreadBox[0].append(liveSpreadBox[1]/* li = input.value */, liveSpreadBox[2]/* checkButton */,liveSpreadBox[3] /* deleteButton */)
    //EVENTS
    // checkButton.addEventListener('click' , function() {
    //     console.log('click')
    //     checkButton.parentElement.classList.toggle('check')
    // })
    check2Function(liveSpreadBox[2])
    // deleteButton.addEventListener('click', function(e) {
    //     console.log(e.target.childElementCount)
    //     if(e.target.childElementCount == 0 ) {
    //     e.target.parentElement.parentElement.remove()
    // } else {e.target.parentElement.remove()}
    // })
    delete2Function(liveSpreadBox[3])
    
    
    if (inputTask.value === '') {
        alert('Please Enter a Task')
    } else {
        //taskContainer.appendChild(task)
        taskContainer.append(liveSpreadBox[0])
        taskList.push(inputTask.value)
        localStorage.setItem('storedTasks', JSON.stringify(taskList))
        inputTask.value = ""
    }
    
})

function clearLocal() {
    localStorage.clear()
    taskList = [] //instant removal ...in progress
    location.reload()
}


console.log('end')