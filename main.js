const myForm = document.querySelector('#submission-box');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const tableHeader = document.querySelector('.table-header');
const tableName = document.querySelector('.table-name');
const tableEmail = document.querySelector('.table-email');
const outputTable = document.querySelector('.output-table');
const body = document.querySelector('body');
let isTableHeader = false;
let increment = 1;

myForm.addEventListener('submit', onSubmit); //listener for submit button

//Function to add user to list
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
            th.className = 't-header';
            th.appendChild(document.createTextNode('Name'));
            tableHeader.appendChild(th);
            const th1 = document.createElement('th');
            th1.className = 't-header';
            th1.appendChild(document.createTextNode('Email'));
            tableHeader.appendChild(th1);
            const th2 = document.createElement('th');
            th2.className = 't-header';
            th2.appendChild(document.createTextNode('Delete'));
            tableHeader.appendChild(th2);

            //Add outline around table
            outputTable.style.border ="solid";
            outputTable.style.backgroundColor="lightgray";

            //Set boolean to show table header is created
            isTableHeader = true;
        }

        //Add record to table
        const tr = document.createElement('tr');
        tr.className = "table-row" + increment;
        const tdName = document.createElement('td');
        const tdEmail = document.createElement('td');
        tdName.appendChild(document.createTextNode(`${nameInput.value}`));
        tdEmail.appendChild(document.createTextNode(`${emailInput.value}`));
        tr.appendChild(tdName);
        tr.appendChild(tdEmail)
        

        //Add delete button
        const tdImage = document.createElement("td");
        const img = document.createElement("img");
        img.src="./image/trash.png";
        img.className="delete-button";
        tdImage.appendChild(img);
        tr.appendChild(tdImage);

        //Create onclick function for delete button and pass in the table row
        img.onclick= function() {deleteUser(tr);};

        outputTable.appendChild(tr);

        //Clear fields
        nameInput.value = '';
        emailInput.value = '';

        //Increment Row
        increment++;
    }
}

//Function to remove user from list
function deleteUser(e){
    //Initialize row and delete from parent node
    let deleteRow = document.querySelector('.'+e.className);
    deleteRow.parentNode.removeChild(deleteRow);

    //Hide table if no users are left
    if(outputTable.rows.length === 1){
        let headerArray = tableHeader.getElementsByClassName("t-header");
        let headerLength = headerArray.length;
        for (let i = 0; i < headerLength; i++) {tableHeader.removeChild(headerArray[0]);}

        //Set boolean to false so header will get added back in if more users are added
        isTableHeader = false;

        //Remove border and color
        outputTable.style.border ="hidden";
        outputTable.style.backgroundColor="gray";
    }
}