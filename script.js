function moveToNextInput(currentInput) {
  if (currentInput.value && currentInput.nextElementSibling) {
    currentInput.nextElementSibling.focus();
  } else if (!currentInput.value && currentInput.previousElementSibling) {
    currentInput.previousElementSibling.focus();
  }
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'Backspace') {
    const focusedInput = document.activeElement;
    if (!focusedInput.value && focusedInput.previousElementSibling) {
      focusedInput.previousElementSibling.focus();
    }
  }
});