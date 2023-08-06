// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let addEmployeeForm = document.getElementById('addForm')
let employeeTable = document.getElementById('employees')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0

// ADD EMPLOYEE
addForm.addEventListener('submit', (e) => {

// PREVENT FORM SUBMISSION
    e.preventDefault()

// GET THE VALUES FROM THE TEXT BOXES
    let id = document.getElementById('id').value
    let name = document.getElementById('name').value
    let extension = document.getElementById('extension').value
    let email = document.getElementById('email').value
    let department = document.getElementById('department').value

// INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    employeeTable.insertRow(-1)
    count ++
    let row = employeeTable.insertRow(-1)

// INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
// APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
        let c1 = row.insertCell(0)
            c1.innerText = (id)
        let c2 = row.insertCell(1)
            c2.innerText = (name)
        let c3 = row.insertCell(2)
            c3.innerText = (extension)
        let c4 = row.insertCell(3)
            c4.innerText = (email)
        let c5 = row.insertCell(4)
            c5.innerText = (department)

// CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'

    let textDelete = document.createTextNode('X')
    deleteBtn.appendChild(textDelete)

    c5.appendChild(deleteBtn)

// RESET THE FORM
    document.getElementById('addForm').reset()
// SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus()

// INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE

});

// DELETE EMPLOYEE
employeeTable.addEventListener('click', (e) => {
        if (confirm('Are you sure you wish to delete this task?'))
            // SELECT PARENT TASK AND REMOVE 
        row.removeChild(e.target.parentElement)
        count --
})

document.getElementById('empCount').innerHTML = count