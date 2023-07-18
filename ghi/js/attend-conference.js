window.addEventListener('DOMContentLoaded', async () => {
    const selectTag = document.getElementById('conference');
    const loadingIcon = document.getElementById('loading-conference-spinner');  // get the loading icon
  
    const url = 'http://localhost:8000/api/conferences/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
  
      for (let conference of data.conferences) {
        const option = document.createElement('option');
        option.value = conference.href;
        option.innerHTML = conference.name;
        selectTag.appendChild(option);
      }
  
      // Here, add the 'd-none' class to the loading icon
      loadingIcon.classList.add('d-none');
  
      // Here, remove the 'd-none' class from the select tag
      selectTag.classList.remove('d-none');
    }
  
    // Get the attendee form element by its id
    const form = document.getElementById('create-attendee-form');
  
    // Add an event handler for the submit event
    form.addEventListener('submit', async (event) => {
      // Prevent the default from happening
      event.preventDefault();
  
      // Create a FormData object from the form
      let formData = new FormData(form);
  
      // Get a new object from the form data's entries
      let formObject = Object.fromEntries(formData.entries());
  
      // Create options for the fetch
      let options = {
        method: 'POST',  // The method of HTTP request
        body: JSON.stringify(formObject),  // The body data sends to server
        headers: { 'Content-Type': 'application/json' },  // The headers of HTTP request
      }
  
      // Make the fetch using the await keyword to the URL http://localhost:8001/api/attendees/
      const response = await fetch('http://localhost:8001/api/attendees/', options);
      
      if(response.ok) {
        // Get the success message element
        const successMessage = document.getElementById('success-message');
  
        // Remove 'd-none' from the success message to make it visible
        successMessage.classList.remove('d-none');
  
        // Add 'd-none' to the form to hide it
        form.classList.add('d-none');
      } else {
        console.log('Error:', response.status, response.statusText);
        // Here, you can handle the error
        // For example, show an error message
      }
    });
  });
  