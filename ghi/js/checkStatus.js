

// Function to decode the base64 string
function base64Decode(str) {
    return decodeURIComponent(atob(str).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  }
  
  // Function to get the cookie by name
  function getCookie(name) {
    let cookieArr = document.cookie.split("; ");
    
    for(let i = 0; i < cookieArr.length; i++) {
      let cookiePair = cookieArr[i].split("=");
      
      if (name == cookiePair[0]) {
        return decodeURIComponent(cookiePair[1]);
      }
    }
    
    // Return null if not found
    return null;
  }
  
  // Get the jwt_access_payload cookie
let payloadCookie = getCookie('jwt_access_payload');

if (payloadCookie) {
  // The cookie value is a base64-encoded string, so decode it directly
  let decodedPayload = base64Decode(payloadCookie);

  // Parse the decoded payload to an object
  let payload;
  try {
    payload = JSON.parse(decodedPayload);
  } catch (e) {
    console.error("Failed to parse payload:", decodedPayload);
    console.error(e);
  }
  
  // Print the payload
  console.log(payload);

  // Check if permissions (perms) field exists under user and it is an array
  if (payload && payload.user && Array.isArray(payload.user.perms)) {
    // Check permissions and show the relevant nav links
    if (payload.user.perms.includes('events.add_conference')) {
      document.getElementById('add-conference-link').classList.remove('d-none');
    }
    
    if (payload.user.perms.includes('events.add_location')) {
      document.getElementById('add-location-link').classList.remove('d-none');
    }
  } else {
    console.error("No permissions (perms) field in payload or it is not an array:", payload);
  }
}


  