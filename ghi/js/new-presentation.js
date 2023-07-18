window.addEventListener('DOMContentLoaded', async () => {
    const url = 'http://localhost:8000/api/conferences/';

    try {
        const response = await fetch(url);
  
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            const data = await response.json();

            const selectTag = document.getElementById('conference_id');
            for (let conference of data.conferences) {
                const option = document.createElement('option');
                option.value = conference.id;
                option.innerHTML = conference.name;
                selectTag.appendChild(option);
            }

            const formTag = document.getElementById('create-presentation-form');
            formTag.addEventListener('submit', async event => {
                event.preventDefault();
                const formData = new FormData(formTag);
                const json = JSON.stringify(Object.fromEntries(formData)); 
                const conferenceId = formData.get('conference_id');
                const presentationUrl = `http://localhost:8000/api/conferences/${conferenceId}/presentations/`;
                const fetchConfig = {
                    method: "post",
                    body: json,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                };
                const postResponse = await fetch(presentationUrl, fetchConfig);
                if (postResponse.ok) {
                    formTag.reset();
                    const newPresentation = await postResponse.json();
                } else {
                    console.log('There was an error creating the presentation.');
                }
            });
        }
    } catch (e) {
        console.log('There was a problem with the fetch operation: ' + e.message);
    }
});
