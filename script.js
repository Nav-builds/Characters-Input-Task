const textInput = document.getElementById('textInput');
const counter = document.getElementById('counter');
const warning = document.getElementById('warning');
const MAX_CHARS = 200;

// Set the attribute to prevent further typing via browser default
textInput.setAttribute('maxlength', MAX_CHARS);

textInput.addEventListener('input', () => {
    const currentLength = textInput.value.length;
    
    // Update the counter display
    counter.textContent = `${currentLength} / ${MAX_CHARS} characters`;

    // Show or hide the warning message
    if (currentLength >= MAX_CHARS) {
        warning.style.display = 'block';
    } else {
        warning.style.display = 'none';
    }
});