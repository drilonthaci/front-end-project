function saveInputValue(inputId) {
    let inputElement = document.getElementById(inputId);
    
    inputElement.addEventListener('input', function() {
        localStorage.setItem(inputId, inputElement.value);
    });
}

function loadSavedInputValues() {
    let inputIds = ['name', 'email', 'phone', 'message'];
    
    inputIds.forEach(function(inputId) {
        var savedValue = localStorage.getItem(inputId);
        if (savedValue) {
            document.getElementById(inputId).value = savedValue;
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    loadSavedInputValues();
    
    let inputIds = ['name', 'email', 'phone', 'message'];
    
    inputIds.forEach(function(inputId) {
        saveInputValue(inputId);
    });
});
