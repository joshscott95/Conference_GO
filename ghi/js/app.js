function createCard(name, description, pictureUrl, startDate, endDate, locationName) {
    // Create date objects from the date strings
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Format the dates to your desired format
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedStart = start.toLocaleDateString(undefined, options);
    const formattedEnd = end.toLocaleDateString(undefined, options);
    
    return `
      <div class="card mb-3 shadow"> 
        <img src="${pictureUrl}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${description}</p>
          <p class="card-text"><small class="text-muted">Starts: ${formattedStart}</small></p>
          <p class="card-text"><small class="text-muted">Ends: ${formattedEnd}</small></p>
          <p class="card-text"><small class="text-muted">Location: ${locationName}</small></p>
        </div>
      </div>
    `;
  }
window.addEventListener('DOMContentLoaded', async () => {
    const url = 'http://localhost:8000/api/conferences/';
    const colDivs = document.querySelectorAll('.col');  // select all the col divs
    let colIndex = 0; // Start with the first column


  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        const data = await response.json();

        for (let conference of data.conferences) {
          const detailUrl = `http://localhost:8000${conference.href}`;
          const detailResponse = await fetch(detailUrl);
          if (detailResponse.ok) {
            const details = await detailResponse.json();
            const title = details.conference.name;
            const description = details.conference.description;
            const pictureUrl = details.conference.location.picture_url;
            const startDate = details.conference.starts;
            const endDate = details.conference.ends;
            const locationName = details.conference.location.name;

            const html = createCard(title, description, pictureUrl, startDate, endDate, locationName);

            colDivs[colIndex].innerHTML += html; // Add the card HTML into the appropriate column

            colIndex = (colIndex + 1) % colDivs.length; // // Increment the column index and wrap around if necessary
          }
        }
      }
    } catch (e) {
      console.log('There was a problem with the fetch operation: ' + e.message);
    }
});
