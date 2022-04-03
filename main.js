const myForm = document.querySelector('#submission-box');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    
    if(nameInput.value === '' || emailInput.value === ''){
        //alert('Not all required fields are populated.')
        msg.innerHTML = 'Please enter all fields.';
        setTimeout(() => msg.remove(), 5000)
    }
    else{
        //console.log("Success");
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        //Clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}