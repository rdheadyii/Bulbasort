const createTeamHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the team form
    const title = document.querySelector('#team-name').value.trim();
    const version = document.querySelector('#version').value.trim();
  
    if (title && version) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/teams', {
        method: 'POST',
        body: JSON.stringify({ title, version }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/api/users/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  // const signupFormHandler = async (event) => {
  //   event.preventDefault();
  
  //   const name = document.querySelector('#name-signup').value.trim();
  //   const email = document.querySelector('#email-signup').value.trim();
  //   const password = document.querySelector('#password-signup').value.trim();
  
  //   if (name && email && password) {
  //     const response = await fetch('/api/users', {
  //       method: 'POST',
  //       body: JSON.stringify({ name, email, password }),
  //       headers: { 'Content-Type': 'application/json' },
  //     });
  
  //     if (response.ok) {
  //       document.location.replace('/api/users/profile');
  //     } else {
  //       alert(response.statusText);
  //     }
  //   }
  // };
  
  document
    .querySelector('#team-form')
    .addEventListener('submit', createTeamHandler);
  
  // document
  //   .querySelector('.signup-form')
  //   .addEventListener('submit', signupFormHandler);
  