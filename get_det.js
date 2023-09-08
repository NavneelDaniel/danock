function sendRequest() {
    // Specify the URL you want to send the request to
    const targetUrl = 'https://navneel.free.beeceptor.com';

    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Set up the request
    xhr.open('GET', targetUrl, true);

    // Set the referrer header
    xhr.setRequestHeader('Referer', window.location.href);

    // Define what to do when the request is completed
    xhr.onload = function () {
        if (xhr.status === 200) {
            // Request was successful
            console.log('Request successful');
        } else {
            // Request failed
            console.error('Request failed with status: ' + xhr.status);
        }
    };

    // Send the request
    xhr.send();
}