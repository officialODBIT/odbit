function sendRequest(name, specID) {
    const webhookURL = "https://discord.com/api/webhooks/1323364399221702748/fp0LHvWA5s6BAbOB_VG0qwQrXn6_gekYty90vlmfU0PLy0BzQkIHGRTLsXfpdJ_FP_sC"; // Replace with your Discord webhook URL

    const payload = {
        content: `Account request:\nName: ${name}\nSpecID: ${specID}`
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            alert("Request submitted successfully!");
        } else {
            alert("Failed to submit request. Please try again.");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
    });
}
