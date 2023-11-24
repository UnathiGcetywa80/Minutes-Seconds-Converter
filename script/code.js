function convertMinutesToSeconds() {
    const minutesInput = document.getElementById('minutesInput').value;
    if (!isNaN(minutesInput)) {
      const minutes = parseFloat(minutesInput);
      const seconds = minutes * 60; 
      const resultElement = document.getElementById('result');
      resultElement.textContent = `${minutes} minutes is equal to ${seconds} seconds.`;
    } else {
      alert('Please enter number for minutes.');
    }
  }
  