window.addEventListener('DOMContentLoaded', async () => {
    const url = 'http://localhost:8000/api/conferences/';
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        const data = await response.json();
  
        const conference = data.conferences[0];
        const nameTag = document.querySelector('.card-title');
        nameTag.innerHTML = conference.name;
  
        const detailUrl = `http://localhost:8000${conference.href}`;
        const detailResponse = await fetch(detailUrl);
        
        if (!detailResponse.ok) {
          throw new Error(`HTTP error! status: ${detailResponse.status}`);
        } else {
          const details = await detailResponse.json();
          
          // Get the description from the details object and add it to the DOM
          const descriptionTag = document.querySelector('.card-text'); // replace '.card-description' with the appropriate selector for your description element
          descriptionTag.innerHTML = details.conference.description;  // replace 'description' with the actual key if it's different
          
          const imageTag = document.querySelector('.card-img-top');
          imageTag.src = details.conference.location.picture_url;
          
          
          console.log(details)


        }
      }
    } catch (e) {
      console.log('There was a problem with the fetch operation: ' + e.message);
    }
});
