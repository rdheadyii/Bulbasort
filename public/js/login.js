const loginFormHandler = async (event) => {
    // Stop the browser from submitting the form
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const userName = document.querySelector('#userName-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (userName && password) {
      // Send the username and password to the server
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ userName, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);