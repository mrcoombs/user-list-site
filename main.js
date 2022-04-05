const myForm = document.querySelector('#submission-box');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const tableHeader = document.querySelector('.table-header');
const tableName = document.querySelector('.table-name');
const tableEmail = document.querySelector('.table-email');
const outputTable = document.querySelector('.output-table');
let isTableHeader = false; 

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    
    //Confirm if values are input
    if(nameInput.value === '' || emailInput.value === ''){
        msg.innerHTML = 'Please enter all fields.';
        setTimeout(() => msg.remove(), 5000)
    }
    else{
        //Table header doesn't populate until first user entry
        //Check if table header has been created
        if(isTableHeader === false){
            //Add table header
            const th = document.createElement('th');
            th.appendChild(document.createTextNode('Name'));
            tableHeader.appendChild(th);
            const th1 = document.createElement('th');
            th1.appendChild(document.createTextNode('Email'));
            tableHeader.appendChild(th1);

            //Add outline around table
            outputTable.style.border ="solid";
            outputTable.style.backgroundColor="lightgray";

            //Set boolean to show table header is created
            isTableHeader = true;
        }

        //Add record to table
        const tr = document.createElement('tr');
        const tdName = document.createElement('td');
        const tdEmail = document.createElement('td');
        tdName.appendChild(document.createTextNode(`${nameInput.value}`));
        tdEmail.appendChild(document.createTextNode(`${emailInput.value}`));
        tr.appendChild(tdName);
        tr.appendChild(tdEmail)
        outputTable.appendChild(tr);

        //Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}