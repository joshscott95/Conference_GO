# Conference Go 🎙️

Conference Go is a comprehensive solution for managing and organizing conferences. It integrates data from Open Weather API and Pexels to enhance user 
experience by providing relevant images based on the conference location and current weather conditions. 
Additionally, it manages attendees and their respective presentations, and it also automates the notification process for attendees upon successful conference registration.

## 📂 Directory Structure

```
.
├── attendees-microservice/   # Microservice to manage conference attendees
├── ghi/                      # Main app components
│   ├── attend-conference.html
│   ├── index.html
│   ├── login.html
│   ├── new-conference.html
│   ├── new-location.html
│   └── new-presentation.html
├── JS/                       # JavaScript files corresponding to the app components
│   ├── attend-conference.js
│   ├── index.js
│   ├── login.js
│   ├── new-conference.js
│   ├── new-location.js
│   └── new-presentation.js
├── presentation-mailer/      # Handles mailing functionalities
│   └── consumer.py           # Consumer for processing mail requests
├── accounts/                 # (You might want to detail what's inside here)
├── conference/               # (You might want to detail what's inside here)
├── events/                   # (You might want to detail what's inside here)
└── ...                       # Other directories or files
```

## 🔧 Installation & Setup

1. **Clone the Repository**  
   \```bash
   git clone <repository-url>
   \```

2. **Navigate to the Project Directory**  
   \```bash
   cd conference-go
   \```

3. **(Add any necessary setup steps here)**, for example:
   - Installing dependencies
   - Setting up the Postgres database
   - Configuring environment variables

## 🖥️ Usage


## ⭐ Features

- **Dynamic Content Integration**: The application fetches weather details using Open Weather API and vibrant images from Pexels, depending on the conference's location.
- **Efficient Management**: Seamlessly manage all attendees and their presentations.
- **Instant Notifications**: Attendees receive a confirmation email once they successfully register for a conference.




