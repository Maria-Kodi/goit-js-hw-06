let inputEl = document.getElementById('name-input');
let outputEl = document.getElementById('name-output');

function changeInput(event) {
    if(inputEl !== ''){
        outputEl.textContent = event.currentTarget.value;
    }
    else { outputEl.textContent = "Anonymous";}
}

inputEl.addEventListener('input', changeInput);
