let tasksList = []
let deletedTasks = []

let tasksWrapper = document.querySelector('.task-tracker__wrapper')
let deletedTaskWrapper = document.querySelector('.task-tracker__cart-inner')
let addTaskBtn = document.querySelector('#add-task__trigger')
let addTaskInput = document.querySelector('#add-task__text')
let deleteTaskBtn = document.querySelector('#delete-task__trigger')

const renderTasks = () => {
    let taskElement = ''
    if (tasksList.length === 0) {
        tasksWrapper.innerHTML = ''
    }
    tasksList.forEach(function (item, index) {
        taskElement += `
        <li>
        <label for="item_${index}">${item}</label>
            <input type="checkbox" id="item_${index}" class="task-tracker__task-status" ${item.checked ? 'checked' : ''}>
        </li>
        `
        tasksWrapper.innerHTML = taskElement
    })

}

const renderDeletedTasks = () => {
    let taskElement = ''
    if (tasksList.length === 0) {
        deletedTaskWrapper.innerHTML = ''
    }
    console.log('eto' + deletedTasks)
    deletedTasks.forEach(function (item, index) {
        taskElement += `
        <li>
        <label for="item_${index}" class="cart__item">${item}</label>
            <input type="checkbox" id="item_${index}" class="task-tracker__task-status" ${item.checked ? 'checked' : ''}>
            
        </li>
        `
        deletedTaskWrapper.innerHTML = taskElement
    })
}




addTaskInput.addEventListener('change', (e) => {

    e.target.setAttribute('value', e.target.value)

})

addTaskBtn.addEventListener('click', () => {

    tasksList.push(addTaskInput.value)
    taskValue = addTaskInput.getAttribute('value')
    renderTasks();

})

tasksWrapper.addEventListener('change', function (e) {
    let inputId = e.target.getAttribute('id')
    let forLabel = tasksWrapper.querySelector('[for=' + inputId + ']')
    forLabel.classList.toggle('checked-task')
    let valueLabel = forLabel.innerHTML

    tasksList.forEach(item => {
        if (item.title === valueLabel) {

        }
    })
})


deleteTaskBtn.addEventListener('click', () => {

    tasksWrapper.querySelectorAll('li>label.checked-task').forEach(item => {
        console.log(item)
        tasksList.splice(tasksList.indexOf(item), 1)
        deletedTasks.push(item.innerHTML)
        renderDeletedTasks()
    })
    renderTasks()

})

document.querySelectorAll('.cart__item').forEach(item => {
    item.addEventListener('click', () => {
        deletedTasks.splice(indexOf(item.innerHTML, 1))
        tasksList.push(item.innerHTML)
        renderDeletedTasks()
        renderTasks()
    })
})
   
