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
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const userName = document.querySelector('#userName-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && userName && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, userName, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);