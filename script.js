document.getElementById('submitButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const outputTextElement = document.getElementById('outputText');
  
    // Replace 'https://example.com/api' with your API endpoint
    fetch('https://example.com/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text: inputText })
    })
      .then(response => response.json())
      .then(data => {
        outputTextElement.textContent = data.result; // Update according to your API response
      })
      .catch(error => {
        console.error('Error:', error);
        outputTextElement.textContent = 'An error occurred. Please try again.';
      });
  });
  