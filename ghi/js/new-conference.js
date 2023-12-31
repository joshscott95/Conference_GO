window.addEventListener('DOMContentLoaded', async () => {
    const url = 'http://localhost:8000/api/locations/';

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            const data = await response.json();

            const selectTag = document.getElementById('location');
            for (let location of data.locations) {
              const option = document.createElement('option');
              option.value = location.id;
              option.innerHTML = location.name;
              selectTag.appendChild(option);
            }

            const formTag = document.getElementById('create-conference-form');
            formTag.addEventListener('submit', async event => {
                event.preventDefault();
                const formData = new FormData(formTag);
                const json = JSON.stringify(Object.fromEntries(formData)); 
                const conferenceUrl = 'http://localhost:8000/api/conferences/';
                const fetchConfig = {
                    method: "post",
                    body: json,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                };
                const postResponse = await fetch(conferenceUrl, fetchConfig);
                if (postResponse.ok) {
                    formTag.reset();
                    alert('Conference created successfully!');
                } else {
                    alert('There was an error creating the conference.');
                }
            });
        }
    } catch (e) {
        console.log('There was a problem with the fetch operation: ' + e.message);
    }
});
