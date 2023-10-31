let inputBox = document.getElementById('input-box');
let inputList = document.getElementById('input-list');

function addInput(){
    if (inputBox.value === ''){
        alert('Input Field is Empty...');
    } else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        inputList.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    inputBox.value = '';
}

inputList.addEventListener('click', checkList);

function checkList(event){
    if(event.target.tagName === 'LI'){
        event.target.classList.add('checked');
    } else if(event.target.tagName === 'SPAN'){
        event.target.parentElement.remove();
    }
}