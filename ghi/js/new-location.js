window.addEventListener('DOMContentLoaded', async () => {
    const url = 'http://localhost:8000/api/states/';

    try {
        const response = await fetch(url);
  
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            const data = await response.json();

            const selectTag = document.getElementById('state');
            for (let state of data.states) {
              const option = document.createElement('option');
              option.value = state.abbreviation;
              option.innerHTML = state.name;
              selectTag.appendChild(option);
            }

            const formTag = document.getElementById('create-location-form');
            formTag.addEventListener('submit', async event => {
                event.preventDefault();
                const formData = new FormData(formTag);
                const json = JSON.stringify(Object.fromEntries(formData)); 
                const locationUrl = 'http://localhost:8000/api/locations/';
                const fetchConfig = {
                    method: "post",
                    body: json,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                };
                const postResponse = await fetch(locationUrl, fetchConfig);
                if (postResponse.ok) {
                    formTag.reset();
                    const newLocation = await postResponse.json();
                }
            });
        }
    } catch (e) {
        console.log('There was a problem with the fetch operation: ' + e.message);
    }
});
